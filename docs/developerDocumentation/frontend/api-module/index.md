
# API Module Documentation

## File: `src/frontend/src/api/api.js`

---

## Overview

This module provides a class-based interface for communicating with the TourneyLab backend API using [Axios](https://axios-http.com/). It abstracts all HTTP requests required by the frontend, including tournament creation, retrieval, and game score management. The API server address is configurable via environment variables.

---

## Configuration

- **API Server Address:**  
  The backend server URL is set via the `VITE_API_URL` environment variable.  
  Example:  `VITE_API_URL=http://localhost:8000`



---

## Export

- The module exports a singleton instance of the `api` class, preconfigured with the server address.

---

## Methods

| Method                                      | Description                                                      | Parameters                                      | Returns                |
|----------------------------------------------|------------------------------------------------------------------|-------------------------------------------------|------------------------|
| `createTournament(tournamentData)`           | Creates a new tournament on the backend.                         | `tournamentData` (object)                       | API response data      |
| `getOldTournaments()`                        | Retrieves a list of all old tournaments.                         | —                                               | API response data      |
| `getGamesWithScoresFromField(tournamentID, fieldID)` | Gets all games and scores for a specific field in a tournament.  | `tournamentID` (string/number), `fieldID` (string/number) | API response data      |
| `getGameScore(tournamentID, gameID)`         | Retrieves the score for a specific game.                         | `tournamentID` (string/number), `gameID` (string/number) | API response data      |
| `editGameScore(tournamentID, gameID, score)` | Updates the score for a specific game.                           | `tournamentID` (string/number), `gameID` (string/number), `score` (object/array) | API response           |
| `getTournament(tournamentID)`                | Retrieves all details for a specific tournament.                 | `tournamentID` (string/number)                  | API response data      |

---

## Usage Example

```js
import api from '@/api/api.js';

// Create a new tournament
const result = await api.createTournament(tournamentData);

// Get all old tournaments
const tournaments = await api.getOldTournaments();

// Get games and scores for a field
const games = await api.getGamesWithScoresFromField('tournament123', 1);

// Get a specific game's score
const score = await api.getGameScore('tournament123', 42);

// Edit a game's score
await api.editGameScore('tournament123', 42, [21, 19]);

// Get tournament details
const details = await api.getTournament('tournament123');
```


## Notes
+ All methods return the raw response data from the backend or undefined if an error occurs.
+ Errors are logged to the console for debugging.
+ The API class can be extended with additional methods as needed.
+ For more details on the backend endpoints, see the backend documentation.
