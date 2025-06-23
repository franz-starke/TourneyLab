# Pinia Store Documentation

This document describes the main Pinia stores used in the frontend: `tournamentStore` and `userTheme`.

---

## `tournamentStore`

**File:** `src/stores/tournamentStore.js`

### Purpose

Manages the tournament state, including games, name, id, groups, and date. Uses local storage for persistence.

### State

- **tournament** (from `useLocalStorage`):  
  An object with the following structure:
  - `games`: `{ [field]: { [gameId]: gameObject } }`
  - `name`: `string`
  - `id`: `string`
  - `groups`: `object`
  - `date`: `string`

### Actions

- **getGameById(gameId):**  
  Returns the game object for the given `gameId`, searching all fields.

- **setGameById(gameId, updatedGame):**  
  Updates the game with `gameId` to `updatedGame` in the correct field.

### Example Usage

```js
const store = useTournamentStore();
const game = store.getGameById(42);
store.setGameById(42, { ...game, score: 10 });
```

---

## `userTheme` (Theme Settings Store)

**File:** `src/stores/userTheme.js`

### Purpose

Manages user interface settings: accent color, theme (light/dark), and language. Persists settings in local storage and applies them to the document.

### State

- **accentColor:**  
  Current accent color (`string`, default: `'green'`).

- **appTheme:**  
  Current theme (`'light'` or `'dark'`, default: `'light'`).

- **language:**  
  Current language code (`string`, default: `'de'`).

### Actions

- **setAccentColor(color):**  
  Sets and applies the accent color.

- **toggleAppTheme():**  
  Toggles between light and dark themes.

- **setAppTheme(theme):**  
  Sets and applies the theme.

- **setLanguage(language):**  
  Sets and applies the language (updates i18n).

- **applyAccentColor():**  
  Applies the current accent color to the document.

- **applyAppTheme():**  
  Applies the current theme to the document.

- **applyLanguage():**  
  Applies the current language to i18n.

### Example Usage

```js
const themeStore = useThemeStore();
themeStore.setAccentColor('blue');
themeStore.toggleAppTheme();
themeStore.setLanguage('en');
```

---

## Notes

- Both stores use local storage for persistence.
- `userTheme` directly manipulates CSS variables for theming.
- `tournamentStore` is designed for tournament data structure with nested games.
