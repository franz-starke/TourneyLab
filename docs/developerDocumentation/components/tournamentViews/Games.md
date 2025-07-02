# Games.vue Documentation

## Overview

`Games.vue` is a Vue 3 component that displays all games for a selected field in a tournament. It allows users to switch between fields, fetches the latest game data from the backend if online, and displays each game using the `Game` component.

---

## Features

- Displays a list of games for the currently selected field
- Allows switching between different fields
- Fetches and synchronizes game data from the backend when online
- Updates the Pinia store with the latest game times and scores
- Responsive and scrollable layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useTournamentStore`  | Pinia store for tournament state            |
| `Game`                | Component to display a single game          |
| `ref`, `onMounted`    | Vue composition API for state and lifecycle |
| `api`                 | API module for backend requests             |

---

## State & Refs

| Variable           | Type    | Description                                      |
|--------------------|---------|--------------------------------------------------|
| `activeFieldID`    | `ref`   | ID of the currently selected field               |
| `gamesOfActiveField` | `ref` | Games for the currently selected field           |
| `store`            | object  | Pinia tournament store instance                  |

---

## Methods

### `syncGamesForFieldFromAPI()`
- Fetches games and scores for the active field from the backend.
- Updates both the local `gamesOfActiveField` and the Pinia store.

### `changeActiveField(fieldID)`
- Changes the active field.
- If online, fetches the latest games for the selected field.

---

## Lifecycle Hooks

- `onMounted`:  
  - If online, fetches the latest games for the default active field.

---

## Template Structure

- **Field Selector:**  
  - Buttons for each field, allowing the user to switch between them.
- **Games List:**  
  - Displays all games for the selected field using the `Game` component.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- API module (`api.js`)
- UI component: `Game`
- Vue composition API (`ref`, `onMounted`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/games`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The component supports both online and
