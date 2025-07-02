# LanguageSelectBtn.vue Documentation

## Overview

`LanguageSelectBtn.vue` is a Vue 3 component that allows users to switch the application language between German and English. It displays flag icons for each language and visually highlights the currently selected language.

---

## Features

- Displays German and US flag icons as language selectors
- Highlights the currently active language with a ring and rounded border
- Allows users to switch the app language by clicking a flag
- Responsive and accessible layout

---

## Imports

| Import                | Description                                 |
|-----------------------|---------------------------------------------|
| `useThemeStore`       | Pinia store for user theme and language     |
| `IconFlagGerman`      | German flag icon component                  |
| `IconFlagUSA`         | US flag icon component                      |

---

## State & Methods

| Variable/Method       | Description                                      |
|-----------------------|--------------------------------------------------|
| `settings`            | Pinia theme store instance                       |
| `settings.language`   | Currently selected language (`'de'` or `'en'`)   |
| `settings.setLanguage(lang)` | Sets the application language             |

---

## Template Structure

- **Flag Icons:**  
  - German flag (`IconFlagGerman`):  
    - Highlighted if `settings.language === 'de'`
    - Click to set language to German
  - US flag (`IconFlagUSA`):  
    - Highlighted if `settings.language === 'en'`
    - Click to set language to English

---

## Dependencies

- Pinia store (`useThemeStore`)
- UI components: `IconFlagGerman`, `IconFlagUSA`

---

## Example Usage

This component is typically used in headers or settings pages to allow users to change the app language.

---

## Notes

- The currently selected language is visually indicated with a ring and rounded border.
- The layout is responsive and adapts to different screen
