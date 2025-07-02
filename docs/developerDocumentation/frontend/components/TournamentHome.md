# TournamentHome.vue Documentation

## Overview

`TournamentHome.vue` is the main layout component for the tournament section of the app. It provides a persistent header with the tournament name, a main content area for nested views, and a bottom navigation bar for switching between tournament-related pages.

---

## Features

- Displays the current tournament name in a sticky header
- Responsive layout using Tailwind CSS utility classes
- Main content area for nested routes via `<RouterView />`
- Persistent bottom navigation bar with icons for:
  - Dashboard
  - Games
  - Teams
  - Settings

---

## Imports

| Import             | Description                                 |
|--------------------|---------------------------------------------|
| `useTournamentStore` | Pinia store for tournament state           |
| `IconHome`         | Icon for the dashboard navigation           |
| `IconTournTree`    | Icon for the games navigation               |
| `IconTeam`         | Icon for the teams navigation               |
| `IconSettings`     | Icon for the settings navigation            |
| `RouterView`       | Vue Router component for nested routes      |
| `RouterLink`       | Vue Router component for navigation links   |

---

## Template Structure

- **Header:**  
  - Sticky, displays the tournament name from the store.
- **Main Content:**  
  - `<RouterView />` for displaying nested tournament views (dashboard, games, teams, settings, etc.).
- **Bottom Navigation Bar:**  
  - Sticky, contains navigation buttons with icons for main tournament sections.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`RouterView`, `RouterLink`)
- Icon components

---

## Example Usage

This component is typically used as the parent layout for all `/tournament-home/*` routes.

---

## Notes

- The layout is fully responsive and adapts to different screen sizes.
- All navigation is handled via Vue Router.
- The tournament name is dynamically displayed from the
