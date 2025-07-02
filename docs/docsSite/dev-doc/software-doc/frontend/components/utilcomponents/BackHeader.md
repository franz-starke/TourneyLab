# BackHeader.vue Documentation

## Overview

`BackHeader.vue` is a reusable Vue 3 component that provides a header with a back navigation button and a theme change button. It is designed to be used at the top of pages where users may want to return to the previous view.

---

## Features

- Back button that navigates to the previous route using Vue Router
- Theme change button for toggling between light and dark modes
- Responsive and accessible header layout

---

## Imports

| Import           | Description                                 |
|------------------|---------------------------------------------|
| `useRouter`      | Vue Router composition API for navigation   |
| `ThemeChangeBtn` | Button component for toggling app theme     |

---

## State & Methods

| Variable/Method  | Description                                      |
|------------------|--------------------------------------------------|
| `router`         | Vue Router instance for navigation               |
| `router.back()`  | Navigates to the previous route in history       |

---

## Template Structure

- **Header:**  
  - Left: Circular back button with an SVG arrow icon  
  - Right: `ThemeChangeBtn` for toggling the app theme

---

## Dependencies

- Vue Router (`useRouter`)
- UI component: `ThemeChangeBtn`

---

## Example Usage

This component is typically used at the top of pages that require a back navigation option, such as forms or detail views.

---

## Notes

- The back button uses `router.back()` to navigate to the previous page in the browser history.
- The layout is responsive and adapts to different
