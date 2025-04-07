<script>
  import axios from 'axios'

    
  
    async function createTournament() {
      // Funktion, um nach erfolgter Turnierplanerstellung, die Daten mit dem Server zu synchronisieren.
      // falls das nicht möglich ist, sollten die Daten im localstorage aufbewahrt werden

      this.tournamentData = {
        "name": this.tournamentName,
        "fields": this.amountFields,
        "teams": this.amountTeams,
        "groups": this.amountGroups,
        "return": this.withReturnGame,
        "refs": {

        },
        "games": {

        }
      }

      try {

        const response = await axios.post("https://htw-turnier.de/api/create", );
      } catch (error) {
        console.error('There was an error!', error);
      } finally {
        this.loading = false;
      }
      // console.log(this.tournamentName);
      // console.log(this.anzahlFelder);
      // console.log(this.anzahlTeams);
      // console.log(this.anzahlGruppen);
      // console.log(this.mitHinUndRueckSpiel);
      // console.log("createTournament not implementet yet");
  }


  


  export default {
    data() {
      return {
        tournamentName: "",
        amountFields: 1,
        amountTeams: 3,
        amountGroups: 1,
        withReturnGame: true,
        tournamentData: {},


        // FIXME: TESTING
        //////////////////
        gamesTest: {
          1: [
            // game// possible refs
            [1,2,3],
            [2,3,null],
            [3,2,null],
          ],
          2: [
            [4,5,9],
            [8,6,4],
            [5,7,null],
          ],
        },
        freeRefsPerRoundTest: {
          2: [1,5,7],
          3: [1,4,6],
        },
        //////////////////
        

        games: {},
        showRefModal: false,
      }
    },
    methods: {
      async generateTournament() {
        // TODO:
        //  let games = {}
        //  games = await derNervigsteSagenumwobeneKannMichMalFettAmA****LeckenAlgorithmus(this.amountFields, this.amountTeams, this.amountGroups);

        // TODO: 
        // based on output from the Tournament Algorith, we need to decide if refs have to be added manually
        // if (games has games with refs == null) then:
        this.games = await this.openRefModal();
        // else 


        console.log(this.games);



      },      
      openRefModal() {
        return new Promise((resolve) => {
          this.showRefModal = true; 

          // do something with this.games
          


          // Function to handle form submission
          this.submitForm = () => {
            // FIXME: TESTING
            /////////
            this.games = this.gamesTest
            //////////
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
      closeRefModal() {
        this.showRefModal = true;
      },
      updateFreeRefs($event, round) {
          // TODO: Implement that if choosing refs from one Round, to add back to Round who was selected before (if so), and remove next selected
      }


    }
  };
</script>

<template>
  <form v-if="!showRefModal">
    <input v-model="tournamentName" type="text" placeholder="Enter tournament name" required><br>
    <p>Amount Fields: <input v-model="amountFields" type="number" min="1" max="4" required></p>
    <p>Amount Teams: <input v-model="amountTeams" type="number" min="3" max="12" required></p>
    <p>Amount Groups: <input v-model="amountGroups" type="number" min="1" max="2" required></p>
    <p>Return Game <input v-model="withReturnGame" type="checkbox" required></p>
    <div class="highlight-button" @click="generateTournament" type="submit">Create</div>
  </form>
  <div v-if="showRefModal">
    <h1>Handle manual referee assigning</h1>
    <!-- TODO: -->
    <!-- v-for each game that doesn't have a ref yet, add a div with a select with v-for options set to all possible refs for this Game
     then assign them  -->


    <div v-for="(field, fieldNum) in gamesTest "> 
      Field {{ fieldNum }}
      <div v-for="(game, round) in field">
        <div v-if="game[2] == null">
          Round {{ round }}: Team {{ game[0] }} vs. Team {{ game[1] }} Ref =
          <select @change="updateFreeRefs($event, round)" name="possible-refs">
            <option  v-for="ref in freeRefsPerRoundTest[round + 1]" :value="ref" >{{ ref }}</option>
          </select>

        </div>
      </div>
    </div>


    <button @click="submitForm">save refs</button>
    <button @click="closeModal">cancel</button>


  </div>


</template>


<style scoped>



</style>

