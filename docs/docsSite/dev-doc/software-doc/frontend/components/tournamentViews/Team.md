# Team.vue Documentation

## Overview

`Team.vue` is a Vue 3 component that displays all games associated with a specific team in a specific group. It shows the team’s group, team number, and a list of all games the team is involved in.

---

## Features

- Displays the group and team number in the header
- Lists all games for the selected team within the group
- Each game is rendered using the `Game` component
- Responsive and scrollable layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useTournamentStore`  | Pinia store for tournament state            |
| `defineProps`         | Vue composition API for defining props      |
| `onBeforeMount`       | Vue lifecycle hook for setup                |
| `computed`            | Vue composition API for computed properties |
| `Game`                | Component to display a single game          |

---

## Props

| Prop      | Type            | Description                  |
|-----------|-----------------|-----------------------------|
| `groupId` | Number/String   | The group ID for the team    |
| `teamId`  | Number/String   | The team ID                  |

---

## State & Computed

| Variable   | Type      | Description                                      |
|------------|-----------|--------------------------------------------------|
| `teams`    | computed  | All teams data, grouped by group and team        |
| `store`    | object    | Pinia tournament store instance                  |

---

## Lifecycle Hooks

- `onBeforeMount`:  
  - Calls `store.buildTeams()` to ensure the teams data is up to date before rendering.

---

## Template Structure

- **Header:**  
  - Displays the group name ("Fun" or translated "Pro") and team number.
- **Games List:**  
  - Lists all games for the selected team in the group using the `Game` component.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- UI component: `Game`
- Vue composition API (`defineProps`, `onBeforeMount`, `computed`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/team/:groupId/:teamId`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The group name is displayed as "Fun" for group 1, or the translation for "Pro" for
