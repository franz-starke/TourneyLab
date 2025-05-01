import api from "./api.js";


// Mocking the API calls


// choose right server address for testing or deployment
const localhost = "127.0.0.1";
const serverDomain = "htw-turnier.de";
const testServer = "217.79.180.226:5400"
const protocol = "http://"; 





async function fetchTournaments() {
	try {
		const response = await api.getOldTournaments();
        console.log(response.data);
	} catch (error) {
		console.error("Error fetching tournaments:", error);
	}
}

fetchTournaments();