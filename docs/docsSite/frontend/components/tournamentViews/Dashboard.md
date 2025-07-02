# Dashboard.vue Documentation

## Overview

`Dashboard.vue` is a Vue 3 component that serves as the main dashboard for an ongoing tournament. It displays the current game for each field, provides quick access to tournament synchronization and evaluation features, and shows game times.

---

## Features

- Displays the game for each field in the tournament which hasn't finished yet
- Shows the start time for each current game
- Button to synchronize tournament data (QR code)
- Button to evaluate tournament results (trophy)
- Responsive and scrollable layout

---

## Imports

| Import                        | Description                                         |
|-------------------------------|-----------------------------------------------------|
| `useTournamentStore`          | Pinia store for tournament state                    |
| `RouterLink`                  | Vue Router component for navigation                 |
| `IconQrCode`                  | Icon for the sync button                            |
| `IconTrophy`                  | Icon for the results button                         |
| `Game`                        | Component to display a single game                  |
| `getCurrentGamePerField`      | Utility function to get the current game per field  |

---

## State & Computed

| Variable               | Description                                              |
|------------------------|----------------------------------------------------------|
| `store`                | Pinia tournament store instance                          |
| `currentGamePerField`  | Object mapping field numbers to current game IDs         |

---

## Methods

### `getGameTime(gameId)`
- Retrieves the start time for a given game by its ID from the store.

---

## Template Structure

- **Top Button:**  
  - "Sync" button with QR code icon, navigates to `/tournament-home/sync`
- **Main Content:**  
  - Scrollable list of current games per field
  - For each field:
    - Field number and game start time
    - `Game` component for the current game
- **Bottom Button:**  
  - "Results" button with trophy icon, navigates to `/tournament-home/eval`

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`RouterLink`)
- Utility: `getCurrentGamePerField`
- UI components: `Game`, `IconQrCode`, `IconTrophy`

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/dashboard`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The scrollable area ensures usability on
