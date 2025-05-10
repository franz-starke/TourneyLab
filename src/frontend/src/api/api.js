// module for calling the api endpoints
// see the backend documentation for more detail on the available endpoints
// these methods will return the raw response
import axios from "axios";

// choose right server address for testing or deployment
const localhost = "127.0.0.1";
const serverDomain = "htw-turnier.de";
const testServer = "217.79.180.226:5400";
const protocol = "http://";

// Create Tournament
class api {
  constructor(domain = localhost) {
    this.serverAddr = domain;
    this.protocol = protocol;
    this.response = null;
    console.log("Api requests go to: " + protocol + this.serverAddr);
  }

  async createTournament(tournamentData) {
    try {
      this.response = await axios.post(
        `${this.protocol}${this.serverAddr}/api/create`,
        tournamentData
      );
      console.log("Response: ", this.response);
      return this.response.data;
    } catch (error) {
      console.error("API: ", error);
    }
  }

  async getOldTournaments() {
    console.log(this.protocol);

    try {
      return await axios.get(
        `${this.protocol}${this.serverAddr}/api/tournaments`
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  async getGamesWithScoresFromField(tournamentID, fieldID) {
    try {
      return await axios.get(
        `${this.protocol}${this.serverAddr}/api/${tournamentID}/fields/${fieldID}`
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  async getGameScore(tournamentID, gameID) {
    try {
      return await axios.get(
        `${this.protocol}${serverAddr}/api/${tournamentID}/game/${gameID}`
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  async editGameScore(tournamentID, gameID, score) {
    try {
      return await axios.post(
        `${this.protocol}${serverAddr}/api/${tournamentID}/game/${gameID}`
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  }
}

export default new api(testServer);
