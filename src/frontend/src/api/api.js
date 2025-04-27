// module for calling the api endpoints
import axios from "axios";

// choose right server address for testing or deployment
const localhost = "127.0.0.1";
const serverDomain = "htw-turnier.de";

// Create Tournament
class api {
  constructor(domain = localhost) {
    this.serverAddr = domain;
    console.log("Api requests go to: " + this.serverAddr);
  }
  // TODO: implement createTournament
  async createTournament(tournamentData) {
    console.log("I GOT CALLED");
    // try {
    //     const response = await axios.post(`https://${serverAddr}/api/create"`, );
    //   } catch (error) {
    //     console.error('There was an error!', error);
    //   } finally {
    //     this.loading = false;
    // }
  }

  // TODO: Get old Tournaments

  // TODO: Get game scores for field

  // TODO: Get specific game  score

  // TODO: POST game score
}

export default new api(localhost);
