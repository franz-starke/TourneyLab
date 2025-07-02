# Vue Router Configuration (`src/router/index.js`)

## Overview

This file defines the main routing configuration for the TourneyLab frontend application using Vue Router. It sets up all available routes, including nested child routes for the tournament section, and configures route parameters and props passing for dynamic views.

---

## Structure

- **Router Mode:** Uses HTML5 history mode (`createWebHistory`)
- **Base URL:** Determined by `import.meta.env.BASE_URL`
- **Export:** The configured router instance is exported as the default export

---

## Top-Level Routes

| Path                  | Name                | Component                | Description                                 |
|-----------------------|---------------------|--------------------------|---------------------------------------------|
| `/`                   | `landing`           | `LandingPage`            | Landing page of the application             |
| `/enter-tournament`   | `enter-tournament`  | `EnterTournament`        | Join an existing tournament                 |
| `/create-tournament`  | `create-tournament` | `CreateTournament`       | Create a new tournament                     |
| `/old-tournament`     | `old-tournament`    | `ViewOldTournaments`     | View and select from past tournaments       |
| `/tournament-home`    | `tournament-home`   | `TournamentHome`         | Parent route for all tournament-related views (see below) |

---

## Nested Routes under `/tournament-home`

| Path                       | Name         | Component         | Props Passed         | Description                                 |
|----------------------------|--------------|-------------------|----------------------|---------------------------------------------|
| `dashboard`                | —            | `Dashboard`       | —                    | Tournament dashboard                        |
| `games`                    | —            | `Games`           | —                    | List and manage games                       |
| `teams`                    | —            | `Teams`           | —                    | List and manage teams                       |
| `settings`                 | —            | `Settings`        | —                    | Tournament settings                         |
| `imprint`                  | —            | `Imprint`         | —                    | Legal information / imprint                  |
| `edit-game/:gameId`        | `edit-game`  | `EditGame`        | `{ gameId }`         | Edit a specific game by ID                  |
| `eval`                     | —            | `EvalTournament`  | —                    | Evaluate tournament results                 |
| `sync`                     | —            | `SyncTournament`  | —                    | Synchronize tournament data (offline/online)|
| `team/:groupId/:teamId`    | `team`       | `Team`            | `{ groupId, teamId }` | View details for a specific team            |

---

## Dynamic Route Props

- **`edit-game/:gameId`**  
  - Passes `gameId` as a Number prop to `EditGame`
- **`team/:groupId/:teamId`**  
  - Passes `groupId` and `teamId` as Number props to `Team`

---

## Example Navigation

- To edit game with ID 5:  
  `/tournament-home/edit-game/5`
- To view team 3 in group 1:  
  `/tournament-home/team/1/3`

---

## Notes

- All components are imported at the top of the file for clarity and maintainability.
- Nested routes under `/tournament-home` allow for a persistent layout (e.g., navigation bar) while switching between tournament views.
- Route names are provided for programmatic navigation where needed (e.g., `edit-game`, `team`).

---

## Extensibility

- New tournament-related views can be added as children of `/tournament-home`.
- Dynamic props passing enables flexible and type-safe component usage.

---

## Code Reference

```js
import { createRouter, createWebHistory } from "vue-router";
// ...component imports...

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ...see above tables for route definitions...
  ],
});

export default
