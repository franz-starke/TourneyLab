# EditGame.vue Documentation

## Overview

`EditGame.vue` is a Vue 3 component that allows users to view and edit the score of a specific game within a tournament. It fetches the current score from the backend if online, updates the Pinia store, and allows real-time editing of both teams' points with instant synchronization.

---

## Features

- Fetches and displays the current score for a specific game
- Allows editing of both teams' points via input fields and increment/decrement buttons
- Updates the backend and Pinia store in real-time when points change (if online)
- Responsive and accessible input controls

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useTournamentStore`  | Pinia store for tournament state            |
| `onBeforeMount`, `ref`, `watch` | Vue composition API for state and lifecycle |
| `api`                 | API module for backend requests             |

---

## Props

| Prop      | Type   | Description                  |
|-----------|--------|-----------------------------|
| `gameId`  | Number | The ID of the game to edit  |

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `game`           | `ref`   | Array containing game data                       |
| `points`         | `ref`   | Array containing the points for both teams       |
| `numberInput1`   | `ref`   | Reference to the first team's input field        |
| `numberInput2`   | `ref`   | Reference to the second team's input field       |

---

## Methods

### `selectInput1()`
- Selects the value in the first team's input field for quick editing.

### `selectInput2()`
- Selects the value in the second team's input field for quick editing.

---

## Lifecycle Hooks

- `onBeforeMount`:  
  - Loads the game data from the store.
  - If online, fetches the latest score from the backend and updates the store.
  - Initializes the `points` ref with the current score.

---

## Watchers

- Watches `points` (deep):
  - Updates the game data and store whenever points change.
  - If online, sends the updated score to the backend.

---

## Template Structure

- **Header:**  
  - Displays the referee and start time for the game.
- **Score Editing Fields:**  
  - For each team:
    - Team label
    - Number input for points (with min value 0)
    - Increment and decrement buttons

---

## Dependencies

- Pinia store (`useTournamentStore`)
- API module (`api.js`)
- Vue composition API (`ref`, `onBeforeMount`, `watch`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/edit-game/:gameId`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The component is responsive and suitable for mobile and desktop use.
- The score is always kept in sync with the backend if the device is online.
