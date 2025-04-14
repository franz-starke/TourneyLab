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
 





// Get old Tournaments




// Get game scores for field


// Get specific game  score


// POST game score

}

export default new api(localhost);