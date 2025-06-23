// module for calling the api endpoints
// see the backend documentation for more detail on the available endpoints
// these methods will return the raw response
import axios from "axios";

// choose right server address for testing or deployment
const localhost = "127.0.0.1:8000";
const serverDomain = "htw-turnier.de";
const testServer = "217.79.180.226:5400";

const protocol = "http://";

// set the server address to use
const usedServer = testServer;

// Create Tournament
class api {
	constructor(domain = usedServer) {
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
			return this.response.data;
		} catch (error) {
			console.error("API: ", error);
		}
	}

	async getOldTournaments() {

		try {
			this.response = await axios.get(`${this.protocol}${this.serverAddr}/api/tournaments`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getGamesWithScoresFromField(tournamentID, fieldID) {
		try {
			this.response = await axios.get(`${this.protocol}${this.serverAddr}/api/${tournamentID}/fields/${fieldID}`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getGameScore(tournamentID, gameID) {
		try {
			let response = await axios.get(
				`${this.protocol}${this.serverAddr}/api/${tournamentID}/game/${gameID}`
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
				`${this.protocol}${this.serverAddr}/api/${tournamentID}/game/${gameID}`, data
			);
		} catch (error) {
			console.error("There was an error!", error);
		}
	}

	async getTournament(tournamentID) {
		try {
			this.response = await axios.get(`${this.protocol}${this.serverAddr}/api/${tournamentID}/details`);
			return this.response.data;
		} catch (error) {
			console.error("There was an error!", error);
		}
	}
}

export default new api(usedServer);
