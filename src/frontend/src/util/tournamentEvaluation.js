import { unref } from "vue";

/**
 * 📊 Evaluates a tournament based on the played games and calculates team rankings.
 *
 * This function can accept either a plain object or a Vue `ref` containing the tournament data.
 *
 * --- Input format ---
 * {
 *   name: "Tournament Name",
 *   date: "YYYY-MM-DD",
 *   groups: {1:6, 2:6}, // Number of teams per group
 *   games: {
 *     "1": {
 *       "1": [1, 2, 0, [5, 3], "10:00"], // [teamA, teamB, field, [scoreA, scoreB], time]
 *       ...
 *     },
 *     "2": { ... }
 *   }
 * }
 *
 * --- Output format ---
 * {
 *   name: "Tournament Name",
 *   date: "YYYY-MM-DD",
 *   groups: [
 *     {
 *       groupId: "1",
 *       teams: [
 *         {
 *           id: "1",
 *           games_played: 5,
 *           wins: 3,
 *           draws: 1,
 *           losses: 1,
 *           points: 10,
 *           score_diff: 8,
 *           rank: 1
 *         },
 *         ...
 *       ]
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object|Ref} tournamentData - Tournament object or a Vue ref containing it.
 * @returns {Object} Structured tournament result with team statistics and rankings.
 */
export function evaluateTournamentData(tournamentData) {
	const tournament = unref(tournamentData);
	const name = tournament.name || "(no name)";
	const date = tournament.date || "(no date)";
	const games = tournament.games || {};
	const groups = tournament.groups || [];

	// groupId => team count
	const teams = {};
	// teamId => stats
	const teamStats = {};
	// groupId => [teamIds]
	const groupTeams = {};

	let teamCounter = 1;

  // Initialize teams and groups
  Object.entries(groups).forEach((groupEntry) => {
    const [groupId, count] = groupEntry; 
    teams[groupId] = count;

		const teamIds = [];
		for (let i = 0; i < count; i++) {
			const teamId = String(teamCounter + i);
			teamIds.push(teamId);
			teamStats[teamId] = {
				games_played: 0,
				wins: 0,
				draws: 0,
				losses: 0,
				points: 0,
				score_diff: 0
			};
		}

		groupTeams[groupId] = teamIds;
		teamCounter += count;
	});

  // Evaluate games
  Object.values(games).forEach((fieldGames) => {
    Object.values(fieldGames).forEach((game) => {
      const [teamA, teamB, , ,[scoreA, scoreB]] = game;
      const idA = String(teamA);
      const idB = String(teamB);

      [idA, idB].forEach((tid) => {
      // init stats for each team if not in Teamstats
        if (!(tid in teamStats)) {
          teamStats[tid] = {
            games_played: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            points: 0,
            score_diff: 0
          };
        }
      });


      // // don't eval, if scores: 0 to 0
      if (scoreA == 0 && scoreB == 0) return;

      // Update match statistics
      teamStats[idA].games_played += 1;
      teamStats[idA].score_diff += scoreA - scoreB;

			teamStats[idB].games_played += 1;
			teamStats[idB].score_diff += scoreB - scoreA;

			// Points allocation
			if (scoreA > scoreB) {
				teamStats[idA].wins += 1;
				teamStats[idA].points += 3;
				teamStats[idB].losses += 1;
			} else if (scoreB > scoreA) {
				teamStats[idB].wins += 1;
				teamStats[idB].points += 3;
				teamStats[idA].losses += 1;
			} else {
				teamStats[idA].draws += 1;
				teamStats[idB].draws += 1;
				teamStats[idA].points += 1;
				teamStats[idB].points += 1;
			}
		});
	});

	// Prepare output
	const result = {
		name,
		date,
		groups: []
	};

	// Build group ranking
	Object.entries(groupTeams).forEach(([groupId, teamIds]) => {
		const sorted = [...teamIds]
			.map((tid) => [tid, teamStats[tid]])
			.sort((a, b) => {
				if (b[1].points !== a[1].points) {
					return b[1].points - a[1].points;
				}
				return b[1].score_diff - a[1].score_diff;
			});

		const group = {
			groupId,
			teams: sorted.map(([tid, stats], rank) => ({
				id: tid,
				...stats,
				rank: rank + 1
			}))
		};

		result.groups.push(group);
	});

	return result;
}
