# Game.vue Documentation

## Overview

`Game.vue` is a Vue 3 component that displays a single game's information and allows inline editing of the score for both teams. It highlights the winning team, shows the referee, and provides a link to a detailed game editing view.

---

## Features

- Displays both teams, their scores, and the referee for a game
- Inline editing of team scores with number inputs
- Highlights the winning team based on the current score and matchpoint rules
- Shows the game start time (optional)
- Provides a link to a detailed edit view for the game
- Responsive and accessible layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `RouterLink`          | Vue Router component for navigation         |
| `computed`, `ref`, `watch` | Vue composition API for state and reactivity |
| `useTournamentStore`  | Pinia store for tournament state            |
| `api`                 | API module for backend requests             |
| `IconEnter`           | Icon for entering the detailed edit view    |

---

## Props

| Prop        | Type     | Description                                  |
|-------------|----------|----------------------------------------------|
| `gameId`    | String   | The ID of the game to display                |
| `showTime`  | Boolean  | Whether to display the game's start time     |

---

## State & Computed

| Variable         | Type      | Description                                      |
|------------------|-----------|--------------------------------------------------|
| `game`           | array     | Game data array from the store                   |
| `team1`          | any       | ID of the first team                             |
| `team2`          | any       | ID of the second team                            |
| `referee`        | any       | ID of the referee team                           |
| `startTime`      | any       | Start time of the game                           |
| `points`         | ref       | Array of points for both teams                   |
| `matchpoint`     | number    | Points needed to win the game                    |
| `whichTeamWon`   | computed  | 1 if team1 won, 2 if team2 won, 0 otherwise      |
| `gameRoute`      | computed  | Route object for the detailed edit view          |
| `numberInput1`   | ref       | Reference to the first team's input field        |
| `numberInput2`   | ref       | Reference to the second team's input field       |

---

## Methods

### `selectInput1()`
- Selects the value in the first team's input field for quick editing.

### `selectInput2()`
- Selects the value in the second team's input field for quick editing.

---

## Watchers

- Watches `points` (deep):
  - Updates the game data and store whenever points change.
  - If online, sends the updated score to the backend.

---

## Template Structure

- **Header (optional):**  
  - Displays the game start time if `showTime` is true.
- **Game Display:**  
  - Shows both teams, their scores, and highlights the winner.
  - Displays the referee.
  - Inline number inputs for editing scores.
  - Link to the detailed edit view for the game.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- API module (`api.js`)
- Vue Router (`RouterLink`)
- UI component: `IconEnter`
- Vue composition API (`computed`, `ref`, `watch`)

---

## Example Usage

This component is typically used within lists of games, such as in the dashboard, games, or team views.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The component supports both online and
