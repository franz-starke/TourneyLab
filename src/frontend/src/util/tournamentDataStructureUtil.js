
/**
 * convert the game data structure to rounds of games
 *
 * @param {Object<string, Object<string, Array<string, string, string>>>} games
 * An object where keys are field IDs, and values are objects mapping game IDs
 * to game arrays ([team1, team2, referee]).
 *
 * @returns {Array<Array<Array<string, Array<string, string, string>>>>}
 * Returns an array of rounds. Each round is an array of tuples:
 * [gameId, [team1, team2, referee]].
*/
export function getRounds(games) {
	// function to get the rounds from the games
	const rounds = [];

	// Step 1: Convert each field (object of games) into an array
	const fieldGames = Object.values(games).map(
		(field) => Object.entries(field) // get all games on that field
	);

	// Step 2: Determine how many rounds we have (max number of games per field)
	const maxRounds = Math.max(...fieldGames.map((g) => g.length));

	// Step 3: For each round index, gather the corresponding game from each field
	for (let i = 0; i < maxRounds; i++) {
		const round = [];
		fieldGames.forEach((field) => {
			if (field[i]) {
				round.push(field[i]); // Push the i-th game from each field (if exists)
			}
		});
		rounds.push(round);
	}
	return rounds;
}




/**
 *
 *
 *
 * @returns Array of available Referee Teams for game with gameId
 */
export function availableRefsForGame(games, gameId, totalTeamAmount) {

	const rounds = getRounds(games);

	// find the round where the game is in
	const round = rounds.find((r) =>
		r.some((g) => g[0] === gameId.toString())
	);
	// console.log("Round: ", round);

	// get all participants of the round the game is in
	const participants = [];
	round.forEach((g) => {
		g[1].forEach((team) => {
			if (team != 0) participants.push(team);
		});
	});
	// console.log("Participants ", participants);
	let refs = Array.from(
		{ length: totalTeamAmount },
		(_, i) => i + 1
	);
	// console.log("all refs", refs);

	refs = refs.filter((ref) => !participants.includes(ref));
	// console.log("filtered refs", refs);

	return refs;
}



/**
* Brief description of the function here.
* @param {Object} games Object of Fields with Games
* @param {Object} games.fieldId Object of Games with gameId as key and Array of Game-Arrays as value
* @param {Array} games.fieldId.gameId game Array with [team1, team2, referee]
* @return {Boolean} true if some game in games has no referee, false otherwise
*/
export function someGameInGamesHasNoRef(games) {
	for (const fieldGames of Object.values(games)) {
		for (const game of Object.values(fieldGames)) {
			// game: [team1, team2, referee]
			console.log("game", game);
			if (
				game[2] === 0 && // referee is 0
				game[0] !== 0 && // team1 is not 0
				game[1] !== 0    // team2 is not 0
			) {
				return true; // Found a game with no referee
			}
		}
	}
	return false; // No game found with no referee
}






/**
 * Returns an object mapping each fieldId to the gameId of the last not finished game.
 */
export function getCurrentGamePerField(games, matchpoint = 25) {
	const result = {};
	for (const [fieldId, gamesOnField] of Object.entries(games)) {
		for (const [gameId, gameArr] of Object.entries(gamesOnField)) {

			let points = gameArr[4];
			let isfinished = points[0] >= matchpoint && points[0] - points[1] >= 2 || points[1] >= matchpoint && points[1] - points[0] >= 2
			// Check if the game is finished
			if (!isfinished) {
				// If the game is not finished, set it as the current game for the field
				result[fieldId] = gameId;
				break; // No need to check further games on this field
			}
		}
	}
	console.log("Current games per field: ", result);
	return result;
}
