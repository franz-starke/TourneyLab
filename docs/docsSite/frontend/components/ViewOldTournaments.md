# ViewOldTournaments.vue Documentation

## Overview

`ViewOldTournaments.vue` is a Vue 3 component that displays a searchable list of previously created tournaments. Users can search for tournaments by name and select one to view its details and enter the tournament dashboard.

---

## Features

- Fetches and displays a list of old tournaments from the backend
- Search bar for filtering tournaments by name
- Responsive layout using Tailwind CSS utility classes
- Clickable tournament cards to load and enter a selected tournament
- Displays a message if no tournaments are found

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `api`                 | API module for backend requests             |
| `ref`, `onBeforeMount`| Vue composition API for state and lifecycle |
| `useRouter`           | Vue Router for navigation                   |
| `BackHeader`          | Header component for back navigation        |
| `useTournamentStore`  | Pinia store for tournament state            |
| `IconEnter`           | Icon for entering a tournament              |

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `tournaments`    | `ref`   | List of old tournaments fetched from backend     |
| `tournamentName` | `ref`   | Search input for filtering tournaments           |

---

## Methods

### `getTournament(tid)`
- Fetches tournament data for the selected tournament ID from the backend.
- Updates the Pinia store with the tournament data.
- Navigates to the tournament dashboard.

### `filteredTournaments()`
- Returns a filtered list of tournaments based on the search input.

---

## Lifecycle Hooks

- `onBeforeMount`: Fetches the list of old tournaments from the backend when the component is mounted.

---

## Template Structure

- **Header:**  
  - `BackHeader` for navigation.
- **Main Section:**  
  - Title for old tournaments.
  - Search input for filtering tournaments.
  - List of tournament cards (name, date, enter icon).
  - Message if no tournaments are found.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`useRouter`)
- API module (`api.js`)
- UI components: `BackHeader`, `IconEnter`

---

## Example Usage

This component is typically used as a route view for `/old-tournament`.

---

## Notes

- If no tournaments are found or match the search, a message is displayed.
- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
