# Router Configuration Documentation

This file documents the routes defined in `src/router/index.js` for the frontend.

## Top-Level Routes

| Path                | Name              | Component              |
|---------------------|-------------------|------------------------|
| `/`                 | landing           | LandingPage            |
| `/enter-tournament` | enter-tournament  | EnterTournament        |
| `/create-tournament`| create-tournament | CreateTournament       |
| `/old-tournament`   | old-tournament    | ViewOldTournaments     |
| `/tournament-home`  | tournament-home   | TournamentHome         |

## Nested Routes under `/tournament-home`

| Path                   | Name       | Component   | Notes                        |
|------------------------|------------|-------------|------------------------------|
| `/tournament-home/dashboard`   | -          | Dashboard   |                              |
| `/tournament-home/games`       | -          | Games       |                              |
| `/tournament-home/teams`       | -          | Teams       |                              |
| `/tournament-home/settings`    | -          | Settings    |                              |
| `/tournament-home/imprint`     | -          | Imprint     |                              |
| `/tournament-home/edit-game/:gameId` | edit-game | EditGame    | `:gameId` is a dynamic param |

### Dynamic Route

- `/tournament-home/edit-game/:gameId`  
  - **Component:** EditGame  
  - **Props:** `gameId` (converted to Number)

## Example Usage

To navigate to the edit game page for game ID 5:
```
/tournament-home/edit-game/5
```

---

**Note:**  
Child routes under `/tournament-home` are rendered inside the `TournamentHome` component using `<router-view>`.
