# EnterTournament.vue Documentation

## Overview

`EnterTournament.vue` is a Vue 3 component that allows users to join an existing tournament by scanning a QR code or entering a tournament code manually. It fetches tournament data from the backend or loads it from the QR code (for offline use), and stores it in the Pinia store before navigating to the tournament dashboard.

---

## Features

- Join tournament via QR code scan or manual code entry
- Online and offline support for tournament data
- Input validation and error handling
- Stores tournament data in Pinia store
- Redirects to tournament dashboard after joining

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `debugInfo`      | `ref`   | Debug information for QR code scanning           |
| `tournamentId`   | `ref`   | Tournament code entered or scanned               |
| `scannerActive`  | `ref`   | Controls activation of the QR code scanner       |

---

## Computed

| Variable   | Description                                  |
|------------|----------------------------------------------|
| `isOnline` | Returns `true` if the device is online       |

---

## Methods

### `enterTournament()`
- Validates the tournament code.
- Fetches tournament data from the backend using the code.
- Updates the Pinia store with the tournament data.
- Navigates to the tournament dashboard.
- Handles errors and displays alerts if fetching fails.

### `onDetect(detectedCodes)`
- Handles QR code detection.
- Decodes and decompresses the QR code payload.
- Parses the tournament data from the QR code.
- If online, fetches the latest data from the backend.
- If offline, updates the store directly with the scanned data.
- Navigates to the tournament dashboard.

---

## Lifecycle Hooks

- `onMounted`: Activates the QR code scanner after a short delay.

---

## Template Structure

- **Header:** Back navigation.
- **Main Section:**
  - Title and instructions.
  - QR code scanner area (with camera icon placeholder before activation).
  - Manual code entry input and join button (only if online).

---

## Dependencies

- Pinia store (`useTournamentStore`)
- Vue Router (`useRouter`)
- API module: `api.js`
- QR code components: `vue-qrcode-reader`
- Compression utilities: `pako`
- UI components: `BackHeader`, `IconCamera`

---

## Example Usage

This component is typically used as a route view for `/enter-tournament`.

---

## Notes

- The QR code scanner is activated 2 seconds after mounting.
- If the device is offline, tournament data is loaded directly from the QR code.
- All user-facing strings are internationalized
