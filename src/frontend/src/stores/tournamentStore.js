// stores/tournamentStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";

export const useTournamentStore = defineStore("tournament", () => {
	//  tournament object in LocalStorage:
	//   games: {},
	//   name: "",
	//   id: "",
	//   groups: {},
	//   date: ""
	//   matchpoint: 25,
	const teams = ref({});
	const tournament = useLocalStorage("tournament", {});

	function getGameById(gameId) {
		for (const gamesOnField of Object.values(tournament.value.games)) {
			if (gameId in gamesOnField) {
				return gamesOnField[gameId];
			}
		}
		return undefined;
	}


	function setGameById(gameId, updatedGame) {
		for (const [field, gamesOnField] of Object.entries(tournament.value.games)) {
			if (gameId in gamesOnField) {
				gamesOnField[gameId] = updatedGame;
				// Update the reactive tournament object
				tournament.value.games[field] = { ...gamesOnField };
				// console.log("Updated game: ", tournament.value.games[field]);
				break;
			}
		}
	}

	function buildTeams() {
        let result = {};
        let firstTeamIdOfGroup = 1;
        Object.entries(tournament.value.groups).forEach(([groupId, teamAmount]) => {
            result[groupId] = {};
            for (
                let teamId = firstTeamIdOfGroup;
                teamId < teamAmount + firstTeamIdOfGroup;
                teamId++
            ) {
                result[groupId][teamId] = {};
                Object.values(tournament.value.games).forEach(gamesOnField => {
                    Object.entries(gamesOnField).forEach(([gameId, gameArray]) => {
                        let playingTeams = gameArray.slice(0, 2);
                        let refTeam = gameArray[2];
                        let tid = teamId;
                        if (
                            typeof playingTeams[0] === "string" ||
                            typeof playingTeams[1] === "string"
                        ) {
                            tid = String(teamId);
                        }
                        if (playingTeams.includes(tid) || refTeam == tid) {
                            result[groupId][tid][gameId] = gameArray;
                        }
                    });
                });
            }
            firstTeamIdOfGroup += teamAmount;
        });
		console.log("Built teams: ", result);
        teams.value = result;
    }

	return {
		buildTeams,
		teams,
		setGameById,
		getGameById,
		tournament,
	};
});
