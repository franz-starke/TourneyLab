# LandingPage.vue Documentation

## Overview

`LandingPage.vue` is the main landing page component for the application. It provides navigation to enter, create, or view old tournaments, and includes controls for language and theme selection.

---

## Features

- Responsive layout using Tailwind CSS utility classes
- Navigation to:
  - Enter a tournament
  - Create a new tournament
  - View old tournaments
- Language selection button
- Theme selection button

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `LanguageSelectBtn`   | Button for selecting application language   |
| `ThemeChangeBtn`      | Button for toggling application theme       |
| `IconEnter`           | Icon used for the "Enter Tournament" button |

---

## Dependencies

- Vue Router's `RouterLink` for navigation
- i18n for translations via `$t`

---

## Template Structure

- **Header:**  
  - `LanguageSelectBtn`
  - `ThemeChangeBtn`
- **Main Section:**  
  - App title (visible on large screens)
  - "Enter Tournament" button with icon
  - Buttons for "Create Tournament" and "View Old Tournaments"

---

## Example Usage

This component is typically used as the root or home route of the application.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is fully responsive and adapts to different
