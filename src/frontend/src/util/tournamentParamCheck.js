import { availableRefsForGame } from "@/util/tournamentDataStructureUtil.js"



// TODO: implement checkTournamentParams
// There are combinations, that are not sensible, or where the algorithm produces a schedule where
// games don't have a referee but there are not enough teams available to assign.
// All of the deprecated combinations include:
//  Return Game false:
//     Groups 1:
//         fields 2:
//             Teams 3-5
//         fields 3:
//             Teams 3-8
//         fields 4:
//             Teams 3-11
//     Groups 2:
//         fields 3:
//             Teams1 + Teams2 < 9
//         fields 4:
//             Teams1 + Teams2 < 12

//  Return Game true:
//     Groups 1:
//         fields 2:
//             Teams 3-5
//         fields 3:
//             Teams 3-8
//         fields 4:
//             Teams 3-11
//     Groups 2:
//         fields 3:
//             Teams1 + Teams2 = 3 to 8
//         fields 4:
//             Teams1 + Teams2 = 3 to 11
/** 
* Check if the tournement parameters are supported by the algorithm.

* @param {Number} amountFields Amount of Fields
* @param {Number} amountGroups Amount of Groups
* @param {Number} amountTeams1 Amount of Teams in Group 1
* @param {Number} amountTeams2 Amount of Teams in Group 2
* @param {Boolean} withReturnGame If the tournament has return games
* @return {Boolean} true if the parameters are supported, false otherwise
*/
export function checkTournamentParams(amountFields, amountGroups, amountTeams1, amountTeams2, withReturnGame) {
  console.log("checktournamentParams not implemented yet");
  return true; // Placeholder return value
}






/** 
* Check if it is impossible to assign refrees to games in a tournament.
* @param {Object} games Object of Fields with Games
* @param {Object} games.fieldId Object of Games with gameId as key and Array of Game-Arrays as value
* @param {Array} games.fieldId.gameId game Array with [team1, team2, referee]
* @param {Array} rounds Array of Rounds, where each Round is an Array of Games
* @param {Array} rounds[roundIndex] Array of Games in that Round
* @param {Array} rounds[roundIndex][gameIndex] game Array with [gameId, [team1, team2, referee]]
* @return {Boolean} true if it is impossible to assign referees, false otherwise
*/
export function impossibleRefAssigning(games, rounds, totalTeamAmount) {
  let impossibleRefAssigning = false;
  Object.values(games).forEach((field) => {
    for (const [gameId, game] of Object.entries(field)) {
      let gameHasNoRefAndIsNoNullGame = game[2] === 0 && game[0] != 0 && game[1] != 0;
      if (!gameHasNoRefAndIsNoNullGame) continue;
      // find the round where the game is in
      const round = rounds.find((r) =>
        r.some((g) => g[0] === gameId.toString())
      );
      
      let refNeeded = round.reduce((total, game) => {
        if (game[1][2] == 0) {
          return total + 1;
        }
        return total;
      }, 0);

      console.log("Refs needed", refNeeded);
      let refsToassign = availableRefsForGame(games, gameId, totalTeamAmount);
      console.log("no ref ", gameId, " available refs: ", refsToassign);
      if (refsToassign.length < refNeeded) impossibleRefAssigning = true;
    }
  });
    return impossibleRefAssigning;
}
