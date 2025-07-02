# Pinia Store Documentation

## tournamentStore.js

### Overview

`tournamentStore.js` defines the main Pinia store for managing tournament data in the TourneyLab application. It provides reactive state for the current tournament, utility methods for accessing and updating games, and a method to build a structured teams object for efficient lookup and display.

---
### State

| Variable      | Type   | Description                                                      |
|---------------|--------|------------------------------------------------------------------|
| `tournament`  | Ref    | Reactive object (persisted in localStorage) holding all tournament data. <br>**Entries:**<br>&nbsp;&nbsp;- `games`: Object containing all games, organized by field.<br>&nbsp;&nbsp;- `name`: String, the tournament name.<br>&nbsp;&nbsp;- `id`: String or number, unique tournament identifier.<br>&nbsp;&nbsp;- `groups`: object with groupId mapping to teamamount in group.<br>&nbsp;&nbsp;- `date`: String, tournament date.<br>&nbsp;&nbsp;- `matchpoint`: Number, game point at which a team can win. |
| `teams`       | Ref    | Computed object mapping group and team IDs to their games.<br>**Entries:**<br>&nbsp;&nbsp;- `[groupId]`: Object for each group.<br>&nbsp;&nbsp;- `[teamId]`: Array of games for the team (including as referee). |

---

### Methods

#### `getGameById(gameId)`
- **Returns:** The game array for the given `gameId`, or `undefined` if not found.
- **Description:** Iterates over all fields and games to find and return the game with the specified ID.

#### `setGameById(gameId, updatedGame)`
- **Returns:** `void`
- **Description:** Updates the game with the given `gameId` in the tournament's games object and ensures reactivity.

#### `buildTeams()`
- **Returns:** `void`
- **Description:** Constructs the `teams` object, mapping each group and team to their respective games (including games where the team is a referee). Handles both numeric and string team IDs for compatibility.

---

### Usage Example

```js
import { useTournamentStore } from '@/stores/tournamentStore.js';

const store = useTournamentStore();
store.buildTeams();
const teamGames = store.teams[groupId][teamId];
const game = store.getGameById(gameId);
store.setGameById(gameId, updatedGame);

```


## userTheme.js

### Overview

`userTheme.js` defines the Pinia store for managing user interface preferences in the TourneyLab application. It handles the application's theme (light/dark), accent color, and language settings. All preferences are persisted in `localStorage` and applied to the app using CSS variables and i18n.

---

### State

| Variable      | Type   | Description                                                      |
|---------------|--------|------------------------------------------------------------------|
| `accentColor` | String | The current accent color (default: `'green'`).                   |
| `appTheme`    | String | The current theme, `'light'` or `'dark'` (default: `'light'`).   |
| `language`    | String | The current language code (default: `'de'`).                     |

---

### Actions

#### `setAccentColor(color)`
- **Description:** Sets the accent color, updates `localStorage`, and applies the color to the CSS variable `--color-accent`.

#### `toggleAppTheme()`
- **Description:** Toggles between light and dark themes by calling `setAppTheme()`.

#### `setAppTheme(theme)`
- **Description:** Sets the theme, updates `localStorage`, and applies the corresponding CSS variables for background, elements, and text colors.

#### `setLanguage(language)`
- **Description:** Sets the language, updates `localStorage`, and updates the global i18n locale.

#### `applyAccentColor()`
- **Description:** Applies the currently stored accent color to the CSS variable.

#### `applyAppTheme()`
- **Description:** Applies the currently stored theme to the CSS variables.

#### `applyLanguage()`
- **Description:** Applies the currently stored language to the i18n instance.

---

### Usage Example

```js
import { useThemeStore } from '@/stores/userTheme.js';

const settings = useThemeStore();
settings.setAccentColor('blue');
settings.toggleAppTheme();
settings.setLanguage('en');
```

---

### Notes

- All preferences are persisted in `localStorage` for consistency across sessions.
- CSS variables are used for dynamic theming and accent color changes.
- The store is designed for use with the Vue Composition API and Pinia.
- Language changes are immediately reflected in the app
