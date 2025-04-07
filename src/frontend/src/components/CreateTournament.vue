<script>
  export default {
    data() {
      return {
        tournamentName: "",
        anzahlFelder: 1,
        anzahlTeams: 3,
        anzahlGruppen: 1,
        mitHinUndRueckSpiel: true,
      }
    },
    methods: {
      createTournament() {
        console.log(this.tournamentName);

        console.log(this.anzahlFelder);
        console.log(this.anzahlTeams);
        console.log(this.anzahlGruppen);
        console.log(this.mitHinUndRueckSpiel);
        console.log("createTournament not implementet yet");
      },

    }
  };
</script>

<template>
  <form>
    <input v-model="tournamentName" type="text" placeholder="Enter tournament name" required><br>
    <p>Item name: <input v-model="anzahlFelder" type="number" min="1" max="4" required></p>
    <p>How many: <input v-model="anzahlTeams" type="number" min="3" max="12" required></p>
    <p>How many: <input v-model="anzahlGruppen" type="number" min="1" max="2" required></p>
    <p>Hin- und Rückspiel <input v-model="mitHinUndRueckSpiel" type="checkbox" required></p>
    <div class="highlight-button" @click="createTournament" type="submit">Create</div>
  </form>
</template>


<style scoped>

</style>

