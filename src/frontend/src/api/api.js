// module for calling the api endpoints
// see the backend documentation for more detail on the available endpoints
// these methods will return the raw response
import axios from "axios";

// choose right server address for testing or deployment
const apiServer = import.meta.env.VITE_API_URL
// set the server address to use
const usedServer = apiServer;

// Create Tournament
class api {
	constructor(domain = usedServer) {
		this.serverAddr = domain;
		this.response = null;
		console.log("Api requests go to: " + this.serverAddr);
	}

	async createTournament(tournamentData) {
		try {
			this.response = await axios.post(
				`${this.serverAddr}/create`,
				tournamentData
			);
			return this.response.data;
		} catch (error) {
			console.error("API: ", error);
		}
	}

	async getOldTournaments() {

		try {
			this.response = await axios.get(`${this.serverAddr}/tournaments`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getGamesWithScoresFromField(tournamentID, fieldID) {
		try {
			this.response = await axios.get(`${this.serverAddr}/${tournamentID}/fields/${fieldID}`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getGameScore(tournamentID, gameID) {
		try {
			let response = await axios.get(
				`${this.serverAddr}/${tournamentID}/game/${gameID}`
			);
			return response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async editGameScore(tournamentID, gameID, score) {
		try {
			const data = { "score": score };
			return await axios.put(
				`${this.serverAddr}/${tournamentID}/game/${gameID}`, data
			);
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getTournament(tournamentID) {
		try {
			this.response = await axios.get(`${this.serverAddr}/${tournamentID}/details`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}
}

export default new api(usedServer);
