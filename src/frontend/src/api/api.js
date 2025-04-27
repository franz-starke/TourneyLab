// module for calling the api endpoints 
// see the backend documentation for more detail on the available endpoints
// these methods will return the raw response
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
 
    async createTournament(tournamentData)  {
        try {
            return await axios.post(`https://${serverAddr}/api/create`, tournamentData);
        } catch (error) {
          console.error('API: ', error);
        }
    }

    async getOldTournaments() {
        try {
            return await axios.get(`https://${serverAddr}/api/tournaments`);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    async getGamesWithScoresFromField(tournamentID, fieldID) {
        try {
            return await axios.get(`https://${serverAddr}/api/${tournamentID}/fields/${fieldID}`);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    async getGameScore(tournamentID, gameID) {
        try {
            return await axios.get(`https://${serverAddr}/api/${tournamentID}/game/${gameID}`);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    async editGameScore(tournamentID, gameID, score) {
        try {
            return await axios.post(`https://${serverAddr}/api/${tournamentID}/game/${gameID}`);
        } catch (error) {
            console.error('There was an error!', error);
        }
    }
}

export default new api(localhost);
