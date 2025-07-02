# Settings.vue Documentation

## Overview

`Settings.vue` is a Vue 3 component that provides a user interface for adjusting application settings. Users can change the app language, toggle between light and dark themes, select an accent color, leave the current tournament, and view the imprint.

---

## Features

- Change application language via a language selection button
- Toggle between light and dark themes
- Select an accent color (green, blue, red, purple)
- Leave the current tournament and return to the landing page
- Navigate to the imprint/legal information page
- Responsive and scrollable layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useRouter`           | Vue Router for navigation                   |
| `useThemeStore`       | Pinia store for theme and accent color      |
| `LanguageSelectBtn`   | Component for language selection            |
| `IconMoon`            | Icon for dark mode                          |
| `IconSun`             | Icon for light mode                         |
| `IconLeave`           | Icon for leave tournament button            |

---

## State & Methods

| Variable/Method       | Description                                      |
|-----------------------|--------------------------------------------------|
| `settings`            | Pinia theme store instance                       |
| `exitTournament()`    | Navigates to the landing page                    |

---

## Template Structure

- **Language Section:**  
  - Label and `LanguageSelectBtn` for changing app language
- **Appearance Section:**  
  - Toggle buttons for light and dark themes with icons
- **Accent Color Section:**  
  - Selectable accent color options with visual feedback
- **Leave Tournament Section:**  
  - Prominent button to leave the current tournament
- **Imprint Link:**  
  - Link to the imprint/legal information page

---

## Dependencies

- Pinia store (`useThemeStore`)
- Vue Router (`useRouter`, `RouterLink`)
- UI components: `LanguageSelectBtn`, `IconMoon`, `IconSun`, `IconLeave`

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/settings`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- Accent color and theme changes are reflected throughout the
