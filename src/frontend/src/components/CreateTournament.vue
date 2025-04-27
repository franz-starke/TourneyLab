<script>
import api from "@/api/api.js";
import { createTournamentAlgo } from "../tournamentalgo/tournamentalgo.js";

export default {
  data() {
    // This Component holds all the data for the creation of a new tournament
    // starts with a few default values
    return {
      tournamentName: "",
      amountFields: 1,
      amountTeams1: 4,
      amountTeams2: 4,
      amountGroups: 1,
      withReturnGame: false,
      tournamentData: {},

      games: {},
      showRefModal: false, // variable to handle if there is a ref dialog going on (for conditional rendering with v-if)
    };
  },
  methods: {
    // this component needs methods to:
    // -> react on user submit for creating a new tournament
    // -> handle the manual assignment of referees (Handle dialog)
    // -> communicate the created tournament with the server via API

    async generateTournament() {
      // TODO:
      //  let games = {}
      this.games = await createTournamentAlgo(
        this.amountTeams1,
        this.amountTeams2,
        this.amountGroups,
        this.amountFields,
        this.withReturnGame
      );
      console.log("test", this.games);
      // TODO:
      // based on output from the Tournament Algorithm, we need to decide if refs have to be added manually
      // if (games has games with refs == null) then:
      this.games = await this.openRefModal();
      // else

      //TODO: call createTournament
      await this.syncTournament();
      console.log(this.games);

      // TODO: danach weiterleiten zum Tournament home
    },
    openRefModal() {
      // handles the manual assignment of referees
      return new Promise((resolve) => {
        this.showRefModal = true;
        // do something with this.games (add referees)
        // Function to handle form submission
        this.submitForm = () => {
          this.showRefModal = false;
          resolve(this.games); // Resolve the promise with the user input
        };

        // Close modal without submitting
        this.closeModal = () => {
          console.log("didn't update games Referees");
          this.showRefModal = false;
          resolve(null); // You can resolve with a default value or null
        };
      });
    },
    updateFreeRefs($event, round) {
      // function to react when user assigns referees in the modal Dialog
      // updates the free referees per round according to the already chosen
      // TODO: Implement that if choosing refs from one Round, to add back to Round who was selected before (if so), and remove next selected
    },
    async syncTournament() {
      // Methode, um nach erfolgter Turnierplanerstellung, die Daten mit dem Server zu synchronisieren.
      // falls das nicht möglich ist, sollten die Daten im localstorage aufbewahrt werden

      // FIXME: all refs are set in Games after Ref Dialog
      this.tournamentData = {
        name: this.tournamentName,
        fields: this.amountFields,
        teams: this.amountTeams,
        groups: this.amountGroups,
        return: this.withReturnGame,
        games: {},
      };

      // call API at create
      await api.createTournament(tournamenData);
    },
  },
};
</script>

<template>
  <!-- Dashboard html -->
  <form v-if="!showRefModal">
    <input
      v-model="tournamentName"
      type="text"
      placeholder="Enter tournament name"
      required
    /><br />
    <p>
      Amount Fields:
      <input v-model="amountFields" type="number" min="1" max="4" required />
    </p>
    <p>
      Amount Teams1:
      <input v-model="amountTeams1" type="number" min="3" max="12" required />
    </p>
    <p>
      Amount Teams2:
      <input v-model="amountTeams2" type="number" min="3" max="12" required />
    </p>
    <p>
      Amount Groups:
      <input v-model="amountGroups" type="number" min="1" max="2" required />
    </p>
    <p>
      Return Game <input v-model="withReturnGame" type="checkbox" required />
    </p>
    <div class="highlight-button" @click="generateTournament" type="submit">
      Create
    </div>
  </form>

  <!-- Referee Assignment Dialog -->
  <div v-if="showRefModal">
    <h1>Handle manual referee assigning</h1>
    <!-- TODO: -->
    <!-- v-for each game that doesn't have a ref yet, add a div with a select with v-for options set to all possible refs for this Game
     then assign them  -->

    <div v-for="(field, fieldNum) in games" :key="fieldNum">
      <h2>Field {{ fieldNum }}</h2>

      <div v-for="(game, gameId) in field" :key="gameId">
        <div v-if="!game[2] || game[2] === 'leer'">
          Game {{ gameId }}: Team {{ game[0] }} vs. Team {{ game[1] }}
          <br />
          Referee:
          <select @change="updateFreeRefs($event, gameId, fieldNum)">
            <option v-for="ref in [1, 2, 3, 4, 5]" :key="ref" :value="ref">
              {{ ref }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <button @click="submitForm">save refs</button>
    <button @click="closeModal">cancel</button>
  </div>
  <!-- /////////////////////////////////////////////////// -->
</template>
<style scoped></style>
