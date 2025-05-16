
/**
 *
 * @param games Object of Fields with Games
 * @returns Array of Rounds with Arrays of Games in that round
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
 * @returns Array of available Referee Teams for game with gameId
 */
export function availableRefs(gameId) {

  // find the round where the game is in
  const round = rounds.value.find((r) =>
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
    { length: amountTeams1.value + amountTeams2.value },
    (_, i) => i + 1
  );
  // console.log("all refs", refs);

  refs = refs.filter((ref) => !participants.includes(ref));
  // console.log("filtered refs", refs);

  return refs;
}



