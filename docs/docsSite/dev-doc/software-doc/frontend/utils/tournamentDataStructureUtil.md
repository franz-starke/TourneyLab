# tournamentDataStructureUtil.js Documentation

## Overview

`tournamentDataStructureUtil.js` provides utility functions for handling and analyzing the tournament's games data structure in the TourneyLab application. These functions help convert, query, and validate the games data for use in scheduling, referee assignment, and UI display.

---

## Functions

### `getRounds(games)`

**Description:**  
Converts the games data structure into an array of rounds, where each round contains the games played simultaneously across all fields.

**Parameters:**
- `games` (`Object<string, Object<string, Array>>`):  
  An object where keys are field IDs, and values are objects mapping game IDs to game arrays (`[team1, team2, referee]`).

**Returns:**  
- `Array<Array<[gameId, [team1, team2, referee]]>>`:  
  An array of rounds. Each round is an array of tuples: `[gameId, [team1, team2, referee]]`.

---

### `availableRefsForGame(games, gameId, totalTeamAmount)`

**Description:**  
Returns an array of available referee teams for a given game, ensuring that teams playing in the same round are not assigned as referees.

**Parameters:**
- `games` (`Object`): Games data structure.
- `gameId` (`string|number`): The ID of the game to check.
- `totalTeamAmount` (`number`): Total number of teams in the tournament.

**Returns:**  
- `Array<number>`: List of team IDs available to be referees for the specified game.

---

### `someGameInGamesHasNoRef(games)`

**Description:**  
Checks if there is any game in the games data structure that does not have a referee assigned (i.e., referee is `0` and both teams are set).

**Parameters:**
- `games` (`Object`): Games data structure.

**Returns:**  
- `Boolean`: `true` if some game has no referee, `false` otherwise.

---

### `getCurrentGamePerField(games, matchpoint = 25)`

**Description:**  
Returns an object mapping each field ID to the game ID of the last not-finished game (i.e., the current game) on that field.

**Parameters:**
- `games` (`Object`): Games data structure.
- `matchpoint` (`number`, optional): Points required to win a game (default: `25`).

**Returns:**  
- `Object<string, string>`: Mapping of field IDs to the current game ID on that field.

---

## Usage Example

```js
import {
  getRounds,
  availableRefsForGame,
  someGameInGamesHasNoRef,
  getCurrentGamePerField
} from '@/util/tournamentDataStructureUtil.js';

const rounds = getRounds(games);
const availableRefs = availableRefsForGame(games, '5', 12);
const hasMissingRef = someGameInGamesHasNoRef(games);
const currentGames = getCurrentGamePerField(games, 21);
```

---

## Notes

- These utilities are essential for tournament scheduling, referee assignment, and UI logic.
- The functions assume a consistent games data structure as described above.
- All functions are pure and do not mutate the input data.

---
