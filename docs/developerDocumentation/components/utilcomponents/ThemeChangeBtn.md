# ThemeChangeBtn.vue Documentation

## Overview

`ThemeChangeBtn.vue` is a Vue 3 component that allows users to toggle the application's theme between light and dark modes. It displays a sun or moon icon depending on the current theme.

---

## Features

- Displays a sun icon for light mode and a moon icon for dark mode
- Clicking the icon toggles between light and dark themes
- Responsive and accessible layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useThemeStore`       | Pinia store for user theme and accent color |
| `IconMoon`            | Moon icon component for dark mode           |
| `IconSun`             | Sun icon component for light mode           |

---

## State & Methods

| Variable/Method           | Description                                      |
|---------------------------|--------------------------------------------------|
| `settings`                | Pinia theme store instance                       |
| `settings.appTheme`       | Current theme (`'light'` or `'dark'`)            |
| `settings.toggleAppTheme()` | Toggles the application theme                  |

---

## Template Structure

- **Theme Icon:**  
  - Displays `IconMoon` if the theme is not dark  
  - Displays `IconSun` if the theme is not light  
  - Clicking the icon toggles the theme

---

## Dependencies

- Pinia store (`useThemeStore`)
- UI components: `IconMoon`, `IconSun`

---

## Example Usage

This component is typically used in headers or settings pages to allow users to toggle the app theme.

---

## Notes

- Only one icon is visible at a time, depending on the current theme.
- The layout is responsive and adapts to different screen
