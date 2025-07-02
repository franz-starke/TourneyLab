# Teams.vue Documentation

## Overview

`Teams.vue` is a Vue 3 component that displays all teams in the tournament, grouped by their respective group (e.g., "Fun" and "Pro"). It allows users to switch between groups and select a team to view more details.

---

## Features

- Displays teams grouped by their group (supports one or two groups)
- Allows switching between groups via group selector buttons
- Lists all teams in the selected group
- Each team is a clickable link that navigates to the team's detail view
- Responsive and scrollable layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useTournamentStore`  | Pinia store for tournament state            |
| `IconEnter`           | Icon for entering a team's detail view      |
| `ref`, `onBeforeMount`, `computed` | Vue composition API for state and lifecycle |

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `activeGroup`    | `ref`   | Currently selected group (1 or 2)                |
| `teams`          | `computed` | Teams grouped by group, from the store         |
| `store`          | object  | Pinia tournament store instance                  |

---

## Methods

### `setActiveGroup(groupIndex)`
- Sets the currently active group for display.

---

## Lifecycle Hooks

- `onBeforeMount`:  
  - Calls `store.buildTeams()` to ensure the teams data is up to date.

---

## Template Structure

- **Group Selector:**  
  - Buttons for each group (e.g., "Fun", "Pro") to switch the displayed group.
- **Teams List:**  
  - Lists all teams in the selected group.
  - Each team is a `RouterLink` to the team's detail view, passing `teamId` and `groupId` as route params.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`RouterLink`)
- UI component: `IconEnter`
- Vue composition API (`ref`, `onBeforeMount`, `computed`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/teams`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The group names are hardcoded as "Fun" and the translation for "Pro".
