# tournamentEvaluation.js

> Function for evaluating tournaments based on played games and calculating team rankings.

---

## Function: `evaluateTournamentData`

### Description

The `evaluateTournamentData` function processes a tournament data object (or a Vue `ref` wrapping such an object), aggregates the results from all played games, calculates per-team statistics (games played, wins, draws, losses, points, score differential), and generates group-based rankings. It supports both plain JavaScript objects and Vue refs as input.

---

### Input Format
```js
{
  name: string,        // Tournament name
  date: string,        // Tournament date (YYYY-MM-DD)
  groups: {            // Number of teams per group
    [groupId: string]: number
  },
  games: {             // Played games per group
    [groupId: string]: {
      [gameId: string]: [
        teamA: number,
        teamB: number,
        referee: number,
        time: string,
        [scoreA: number, scoreB: number]
      ]
    }
  }
}

```

### Notes
- teamA and teamB are numeric IDs and are internally converted to sequential string IDs ("1", "2", ...).
- Games with result [0, 0] are not counted (treated as not played).
- If name or date is missing, default values "(no name)" and "(no date)" are used.

### Ausgabeformat
```js
{
  name: string,
  date: string,
  groups: [
    {
      groupId: string,
      teams: [
        {
          id: string,
          games_played: number,
          wins: number,
          draws: number,
          losses: number,
          points: number,
          score_diff: number,
          rank: number
        }
      ]
    }
  ]
}
```

### Ranking Rules
- Teams are ranked by total points.
- Ties are resolved by score differential (score_diff).
- Teams with the same points and score differential share the same rank.
- Ranks are not skipped in case of ties (e.g., 1., 1., 2., 3.).

### Example Usage
```js
import { evaluateTournamentData } from "@/utils/tournamentEvaluation";

// Beispiel: Plain JavaScript Object
const tournament = {
  name: "Champions Cup",
  date: "2025-06-28",
  groups: { "1": 4, "2": 4 },
  games: {
    "1": {
      "1": [1, 2, 0, "10:00", [2, 1]],
      "2": [3, 4, 0, "11:00", [0, 0]]
    },
    "2": {
      "3": [5, 6, 0, "12:00", [3, 2]],
      "4": [7, 8, 0, "13:00", [1, 1]]
    }
  }
};

const result = evaluateTournamentData(tournament);
console.log(result.groups);

// Beispiel: Vue 3 ref
import { ref } from "vue";

const tournamentRef = ref(tournament);
const resultFromRef = evaluateTournamentData(tournamentRef);
console.log(resultFromRef.groups);
```

### Return Type (TypeScript)
```ts
function evaluateTournamentData(
  tournamentData: Object | Ref<Object>
): {
  name: string,
  date: string,
  groups: Array<{
    groupId: string,
    teams: Array<{
      id: string,
      games_played: number,
      wins: number,
      draws: number,
      losses: number,
      points: number,
      score_diff: number,
      rank: number
    }>
  }>
}
```
