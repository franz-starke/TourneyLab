# EvalTournament.vue Documentation

## Overview

`EvalTournament.vue` is a Vue 3 component that evaluates and displays the results of a tournament. It shows a leaderboard for each group, including placement, team, wins, and points, and provides an option to download the results as a PDF.

---

## Features

- Evaluates tournament data and generates a leaderboard for each group
- Displays placement, team ID, number of wins, and points for each team
- Supports tournaments with one or two groups
- Allows switching between groups (e.g., "Fun" and "Pro")
- Downloadable PDF of the leaderboard
- Responsive and scrollable layout

---

## Imports

| Import                        | Description                                         |
|-------------------------------|-----------------------------------------------------|
| `IconDownload`                | Icon for the PDF download button                    |
| `useTournamentStore`          | Pinia store for tournament state                    |
| `ref`, `onBeforeMount`        | Vue composition API for state and lifecycle         |
| `evaluateTournamentData`      | Utility function to evaluate tournament results     |
| `generatePdfBrowser`          | Utility function to generate and download PDF       |

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `leaderboard`    | `ref`   | Stores the evaluated leaderboard data            |
| `activeGroup`    | `ref`   | Index of the currently selected group            |

---

## Methods

### `downloadPdf()`
- Generates and downloads a PDF of the current leaderboard using `generatePdfBrowser`.

### `setActiveGroup(groupIndex)`
- Sets the active group to display its leaderboard.

---

## Lifecycle Hooks

- `onBeforeMount`:  
  - Evaluates the tournament data using `evaluateTournamentData` and stores the result in `leaderboard`.

---

## Template Structure

- **Header:**  
  - Buttons to switch between groups ("Fun" and "Pro")
  - Table header for placement, team, wins, and points
- **Leaderboard:**  
  - List of teams with their rank, ID, wins, and points
  - Special styling for top 3 ranks and points (positive/negative/zero)
- **PDF Download:**  
  - Button to download the leaderboard as a PDF

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Utility modules: `evaluateTournamentData`, `generatePdfBrowser`
- UI components: `IconDownload`
- Vue composition API (`ref`, `onBeforeMount`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/eval`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The leaderboard supports tournaments with one or two groups.
