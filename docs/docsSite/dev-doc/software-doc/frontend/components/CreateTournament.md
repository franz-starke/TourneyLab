# CreateTournament.vue Documentation

## Overview

`CreateTournament.vue` is a Vue 3 component that provides a form for users to create a new tournament. It handles input validation, tournament structure generation, optional referee assignment, and synchronization with the backend server.

---

## Features

- Responsive form for tournament creation
- Input validation for tournament parameters
- Dynamic group/team configuration
- Optional modal for manual referee assignment
- Synchronization with backend API
- Stores tournament data in Pinia store
- Redirects to tournament dashboard after creation

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `tournamentName` | `ref`   | Name of the tournament                           |
| `amountFields`   | `ref`   | Number of fields                                 |
| `amountTeams1`   | `ref`   | Number of teams in group 1                       |
| `amountTeams2`   | `ref`   | Number of teams in group 2 (if applicable)       |
| `amountGroups`   | `ref`   | Number of groups (1 or 2)                        |
| `withReturnGame` | `ref`   | Boolean: whether return games are played         |
| `date`           | `ref`   | Tournament date                                  |
| `startTime`      | `ref`   | Start time                                       |
| `roundDuration`  | `ref`   | Duration of each round (minutes)                 |
| `breakDuration`  | `ref`   | Duration of breaks between rounds (minutes)      |
| `matchpoint`     | `ref`   | Points needed to win a match                     |
| `showRefModal`   | `ref`   | Controls visibility of referee assignment modal   |

---

## Methods

### `generateTournament()`
- Validates input fields.
- Generates tournament structure using `createTournamentAlgo`.  
	See [tournamentAlgov2.js](../utils/tournamentalgo.md) for implementation details.
- Checks for valid parameter combinations.
- Handles manual referee assignment if needed.
- Prepares and syncs tournament data with the server.
- Stores tournament data in Pinia and redirects to dashboard.

### `syncTournament()`
- Sends tournament data to backend API.
- Returns the tournament ID on success.

### `openRefModal()`
- Opens the modal for manual referee assignment.
- Returns a promise that resolves when the modal is closed.

### `submitRefModal()`
- Closes the referee modal and resolves the promise as successful.

### `closeRefModal()`
- Closes the referee modal and resolves the promise as cancelled.

---

## Watchers

- Watches `amountGroups` to ensure valid team counts for each group.

---

## Template Structure

- **Header:** Back navigation.
- **Main Form:** Inputs for all tournament parameters.
- **Modal:** For manual referee assignment (conditionally rendered).
- **Submit Button:** Triggers tournament creation.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`useRouter`)
- Utility modules: `tournamentalgo.js`, `time.js`, `tournamentDataStructureUtil.js`, `tournamentParamCheck.js`
- API module: `api.js`
- UI components: `NumberField`, `Modal`, `BackHeader`

---

## Example Usage

This component is typically used as a route view for `/create-tournament`.

---

## Notes

- The component assumes at least 3 teams per group.
- The modal for referee assignment is a placeholder for future implementation.
- All user-facing strings are internationalized via
