# LandingPage.vue

> The main landing page component for the application. Provides navigation to enter, create, or view old tournaments, and includes controls for language and theme selection.

---

## Component: `LandingPage`

### Description

The `LandingPage` component serves as the entry point for users. It offers navigation to enter an existing tournament, create a new one, or view previous tournaments. The header includes controls for language and theme selection.

---

### Example Usage

```vue
<LandingPage />
```

---

### Imports

- **LanguageSelectBtn**  
  Button for selecting application language.

- **ThemeChangeBtn**  
  Button for toggling application theme.

- **IconEnter**  
  Icon used for the "Enter Tournament" button.

---

### Dependencies

- **Vue Router's RouterLink**  
  Used for navigation between pages.

- **i18n**  
  Used for translations via `$t`.

---

### Features

- Responsive layout with Tailwind CSS utility classes.
- Navigation to:
  - Enter a tournament
  - Create a tournament
  - View old tournaments
- Language and theme selection controls in the header.

---

### Template Structure

- **Header:**  
  Contains `LanguageSelectBtn` and `ThemeChangeBtn`.

- **Main Section:**  
  - App title (visible on large screens)
  - "Enter Tournament" button with `IconEnter`
  - "Create Tournament" and "Old Tournament" buttons

---

### File Location

`src/components/LandingPage.vue`

---

### JSDoc Block

```js
/**
 * @file LandingPage.vue
 * @description The main landing page component for the application. Provides navigation to enter, create, or view old tournaments, and includes controls for language and theme selection.
 *
 * @component
 * @name LandingPage
 *
 * @example
 * <LandingPage />
 *
 * @imports
 * - LanguageSelectBtn: Button for selecting application language.
 * - ThemeChangeBtn: Button for toggling application theme.
 * - IconEnter: Icon used for the "Enter Tournament" button.
 *
 * @dependencies
 * - Vue Router's RouterLink for navigation.
 * - i18n for translations via $t.
 *
 * @features
 * - Responsive layout with Tailwind CSS utility classes.
 * - Navigation to enter, create, or view old tournaments.
 * - Language and theme selection controls in the header.
 */
```
