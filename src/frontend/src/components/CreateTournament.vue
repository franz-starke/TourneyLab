<script setup>

// TODO: manual ref assinging dialogue
// TODO: disallow some combinations of tournament params
import api from "@/api/api.js";
import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { addMinutes } from "@/util/time.js"
import { availableRefs, getRounds } from "@/util/tournamentDataStructureUtil.js"

import Modal from "@/components/utilcomponents/Modal.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

// * IMPORTANT SEMANTICS
// * Treat a game with [0,0,0] as empty game
const emptyGame = [0, 0, 0];

const store = useTournamentStore();
const router = useRouter();

// * variables for the tournament creation with default values
const tournamentName = ref("");
const amountFields = ref(1);
const amountTeams1 = ref(3);
const amountTeams2 = ref(0);
const amountGroups = ref(1);
const teamgroups = ref({}); // variable to hold the teams in the groups
const withReturnGame = ref(false);
const tournamentData = ref({});
const games = ref({});
const rounds = ref([]); // variable to hold the rounds of the tournament
const showRefModal = ref(false); // variable to handle if there is a ref dialog going on (for conditional rendering with v-if)
const date = ref((new Date()).toISOString().split('T')[0]);
const startTime = ref("10:00");
const roundDuration = ref(25);
const breakDuration = ref(5);



let resolvePromise; // Shared variable to hold the resolve function of a promise, used for the modal dialog

/**
 * Function Name: generateTournament
 *
 * This function handles the User Input on the Tournament Parameters.
 * 1. It calls the Tournament Algorithm to generate the Tournament.
 *    Only valid values are allowed as user input which is handled via Html.
 * 2. After, if any games do not yet have referees assigned, a modal dialog
 *    is opened to assign referees.
Combinations where referees can and have to be assigned are (some ranges include totally fine combinations but it easier to wrap them together here):

 Return game false:
     Groups 2:
        fields 2:
            Teams1: 3
                Teams2: 4,5
            Teams1: 4
                Teams2: 5
        fields 3:
            Teams1 + Teams2 >= 9
        fields 4:
            Teams1 + Teams2 >=12

 Return Game true:
     Groups 2:
        fields 1:
            Teams1 + Teams2 = 6 to 24
        fields 2:
            Teams1 + Teams2 = 6 to 24
        fields 3:
            Teams1 + Teams2 = 9 to 24
        fields 4:
            Teams1 + Teams2 = 12 to 24

Then there are combinations, that are not sensible, or where the algorithm produces a schedule where
games don't have a referee but there are not enough teams available to assign.
All of the deprecated combinations include:

 Return Game false:
    Groups 1:
        fields 2:
            Teams 3-5
        fields 3:
            Teams 3-8
        fields 4:
            Teams 3-11
    Groups 2:
        fields 3:
            Teams1 + Teams2 < 9
        fields 4:
            Teams1 + Teams2 < 12

 Return Game true:
    Groups 1:
        fields 2:
            Teams 3-5
        fields 3:
            Teams 3-8
        fields 4:
            Teams 3-11
    Groups 2:
        fields 3:
            Teams1 + Teams2 = 3 to 8
        fields 4:
            Teams1 + Teams2 = 3 to 11

All non-listed combinations are unproblematic

 * 3. If the modal returns successfully or it wasn't needed, the tournament data is
 *    synchronized with the server. And the user is redirected to the Tournament Home.
 *
 */
async function generateTournament() {
  games.value = createTournamentAlgo(
    amountTeams1.value,
    amountTeams2.value,
    amountGroups.value,
    amountFields.value,
    withReturnGame.value
  );


  //// TEST:-------------------------------
  //=======================================================================
  console.log("Game plan: ", games.value);
  rounds.value = getRounds(games.value);

  console.log("rounds ", rounds.value);
  // Check if any array has a 0 at index 2 <=> no referee assigned
  // and see which refs are available
  let impossibleRefAssigning = false;
  Object.values(games.value).forEach((field) => {
    for (const [gameId, game] of Object.entries(field)) {
      let gameHasNoRefAndIsNoNullGame = game[2] === 0 && game[0] != 0 && game[1] != 0;
      if (!gameHasNoRefAndIsNoNullGame) continue;
      // find the round where the game is in
      const round = rounds.value.find((r) =>
        r.some((g) => g[0] === gameId.toString())
      );
      let refNeeded = round.reduce((total, game) => {
        if (game[1][2] == 0) {
          return total + 1;
        }
        return total;
      }, 0);
      console.log("Refs needed", refNeeded);
      let refsToassign = availableRefs(games.value, gameId);
      console.log("no ref ", gameId, " available refs: ", refsToassign);
      if (refsToassign.length < refNeeded) impossibleRefAssigning = true;
    }
  });

  // TEST: if no refs available for a round with needed refs, then true
  console.log("Impossible ref assigning: ", impossibleRefAssigning);
  //=======================================================================


  // TODO: handle cases with manual referee assignment through modal dialog


  // const gameHasNoRef =  Object.values(games.value).forEach((field) => { for (const [gameId, game] of Object.entries(field)) {
  //
  //     let gameHasNoRefAndIsNoNullGame = game[2] === 0 && game[0] != 0 && game[1] != 0;
  //     if (!gameHasNoRefAndIsNoNullGame) continue;
  //
  //     let refsToassign = availableRefs(gameId);
  //     console.log(gameId, refsToassign);
  //
  //   }
  // });
  //
  //   console.log(gameHasNoRef);
  //
  //
  //
  // if (gameHasNoRef) {
  //   // Open the modal dialog to assign referees
  //   rounds.value = getRounds(games.value);
  //   games.value = await openRefModal();
  // }
  //

  // prepare for server sync
  Object.keys(games.value).forEach((field) => {
    let roundTime = startTime.value;
    Object.keys(games.value[field]).forEach((gameId) => {
      games.value[field][gameId][3] = roundTime;
      roundTime = addMinutes(roundTime, roundDuration.value + breakDuration.value);
    });
  });

  teamgroups.value = {
    1: amountTeams1.value,
    2: amountTeams2.value,
  };

  // if online, then sync this data to the server
  let tournamentId;
  if (navigator.onLine) {
    console.log("Online: Synchronizing tournament data with the server...");
    tournamentId = await syncTournament();
  }
  else {
    console.log("Offline: no server sync");
    tournamentId = undefined;
  }


  // init games with Points 0,0
  // TODO: add the times to each game with startTime, roundDuration and breakDuration
  Object.keys(games.value).forEach((field) => {
    Object.keys(games.value[field]).forEach((gameId) => {
      if (games.value[field][gameId] !== emptyGame) {
        games.value[field][gameId][4] = [0, 0]; // Add points [0, 0] to each game
      }
    });
  });

  // store Tournament data in localstorage via pinia
  store.tournament.games = games.value;
  store.tournament.name = tournamentName.value;
  store.tournament.id = tournamentId; // can be undefined in which case as soon as a network connection establishes, a call to the api should happen to get one


  // Redirect to the tournament home page
  router.push({ name: "tournament-home" });
}

/** Methode, um nach erfolgter Turnierplanerstellung, die Daten mit dem Server zu synchronisieren.
* falls das nicht möglich ist, sollten die Daten im localstorage via pinia aufbewahrt werden
*/
async function syncTournament() {
  tournamentData.value = {
    name: tournamentName.value, // string
    teams: teamgroups.value,
    games: games.value,
    date: date.value, // string ex: "2025-04-26"
  };

  console.log("Request data: ", tournamentData.value);

  // FIXME: continous testing
  // call API at create
  let tId = await api.createTournament(tournamentData.value);
  if (tId == undefined) {
    console.error("Api access error in syncTournament");
    return;
  }

  return tId.tournamentid;
}


/**
 * Function Name: openRefModal
 *
 * This function handles the opening of the modal dialog for manual referee assignment.
 * @returns Promise which resolves to the updated Games data structure
 */
async function openRefModal() {
  return new Promise((resolve) => {
    showRefModal.value = true;

    resolvePromise = resolve; // Assign `resolve` to the shared variable
    // Attach these functions to the modal's scope using refs
  });
}

// Define submitForm and closeModal locally
function submitRefModal() {
  showRefModal.value = false;
  if (resolvePromise) {
    resolvePromise(games.value); // Resolve the promise with the updated games
  }
}

function closeRefModal() {
  console.log("Modal closed without saving changes.");
  showRefModal.value = false;
  if (resolvePromise) {
    resolvePromise(null); // Resolve with `null` to indicate no changes
  }
}

function updateFreeRefs(event, gameId, fieldNum) {
  // function to update the free refs for the game
  const selectedRef = event.target.value;
  games.value[fieldNum][gameId][2] = selectedRef; // Update the referee in the games object
  console.log("Selected Referee: ", selectedRef);
}
</script>

<template>
  <!-- Dashboard html -->
  <form v-if="!showRefModal">
    <input v-model="tournamentName" type="text" placeholder="Enter tournament name" maxlength="8" required /><br />
    <p>
      <label for="amountFields">Amount Fields: </label>
      <input id="amountFields" v-model="amountFields" type="number" min="1" max="4" required />
    </p>
    <p>
      Amount Groups:
      <input v-model="amountGroups" type="number" min="1" max="2" required />
    </p>
    <p>
      <label for="amountTeams1">Amount Teams {{ amountGroups == 1 ? "" : " Group 1" }}:
      </label>
      <input id="amountTeams1" v-model="amountTeams1" type="number" min="3" max="12" required />
    </p>
    <p v-if="amountGroups == 2">
      <!-- * Only show this input if there are 2 groups -->
      <label for="amountTeams2">Amount Teams Group 2: </label>
      <input id="amountTeams2" v-model="amountTeams2" type="number" min="3" max="12" required />
    </p>

    <p>
      <label for="withReturnGame">with Return Game </label>
      <input id="withReturnGame" v-model="withReturnGame" type="checkbox" required />
    </p>

    <p>
      <label for="date">Date:</label>
      <input type="date" id="input-date" name="date" v-model="date" />
    </p>

    <p>
      <label for="start-time">Start:</label>
      <input type="time" id="input-start-time" name="start-time" v-model="startTime" />
    </p>

    <p>
      <label for="round-duration">Round duration (min):</label>
      <input type="number" id="input-round-duration" name="round-duration" v-model="roundDuration" min="1" />
    </p>

    <p>
      <label for="break-duration">Break duration (min):</label>
      <input type="number" id="input-break-duration" name="break-duration" v-model="breakDuration" min="0" />
    </p>

    <div class="button" @click="generateTournament" type="submit">Create</div>
  </form>

  <!-- Referee Assignment Dialog -->
  <Modal v-if="showRefModal" @close="closeRefModal">
    <h1>Handle manual referee assigning</h1>
    <div id="ref-modal-field-wrapper">
      <div v-for="(field, fieldNum) in games" :key="fieldNum">
        <h2>Field {{ fieldNum }}</h2>
        <div v-for="(game, gameId) in field" :key="gameId">
          <div v-if="game[2] === 0 && game !== emptyGame">
            Game {{ gameId }}: Team {{ game[0] }} vs. Team {{ game[1] }}
            <br />
            Referee:
            <select @change="updateFreeRefs($event, gameId, fieldNum)">
              <option v-for="ref in availableRefs(gameId)" :key="ref" :value="ref">
                {{ ref }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <button @click="submitRefModal">Save Refs</button>
  </Modal>
</template>

<style scoped>
#ref-modal-field-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
