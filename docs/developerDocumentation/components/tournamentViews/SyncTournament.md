# SyncTournament.vue Documentation

## Overview

`SyncTournament.vue` is a Vue 3 component that enables offline synchronization of tournament data between devices using QR codes. It allows users to export the current tournament state as a QR code and import tournament data by scanning a QR code from another device.

---

## Features

- Generates a QR code containing the compressed and encoded tournament data for offline sharing
- Allows scanning of a QR code to import tournament data from another device
- Automatically adjusts QR code size based on screen dimensions
- Displays the tournament code for reference
- Responsive and accessible layout

---

## Imports

| Import                        | Description                                         |
|-------------------------------|-----------------------------------------------------|
| `QrcodeVue`                   | Component for rendering QR codes                    |
| `QrcodeStream`                | Component for scanning QR codes                     |
| `IconCamera`                  | Camera icon shown before scanner activation         |
| `useTournamentStore`          | Pinia store for tournament state                    |
| `ref`, `onMounted`            | Vue composition API for state and lifecycle         |
| `gzip`, `ungzip` (from `pako`)| Utilities for compressing and decompressing data    |

---

## State & Refs

| Variable         | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| `qrSize`         | `ref`   | Size of the QR code, responsive to screen size   |
| `scannerActive`  | `ref`   | Controls activation of the QR code scanner       |
| `qrvalue`        | `ref`   | Base64-encoded, compressed tournament data       |
| `store`          | object  | Pinia tournament store instance                  |

---

## Methods

### QR Code Generation
1. Converts the tournament data to a JSON string.
2. Compresses the JSON string using GZIP.
3. Encodes the compressed data to Base64 for QR code compatibility.
4. Sets the result as the value for the QR code.

### `onDetect(detectedCodes)`
- Handles QR code detection.
- Decodes and decompresses the scanned QR code payload.
- Parses the tournament data and updates the Pinia store.

---

## Lifecycle Hooks

- `onMounted`:  
  - Calculates and sets the optimal QR code size based on the device's screen.
  - Activates the QR code scanner after a short delay.

---

## Template Structure

- **Header:**  
  - Instructions for offline synchronization.
- **QR Scanner:**  
  - Camera icon shown before activation.
  - QR code scanner for importing tournament data.
- **QR Code Display:**  
  - Shows the tournament code and a QR code for exporting the current tournament data.

---

## Dependencies

- Pinia store (`useTournamentStore`)
- QR code components (`qrcode.vue`, `vue-qrcode-reader`)
- Compression utilities (`pako`)
- UI component: `IconCamera`
- Vue composition API (`ref`, `onMounted`)

---

## Example Usage

This component is typically used as a nested route view for `/tournament-home/sync`.

---

## Notes

- All user-facing strings are internationalized via `$t`.
- The layout is responsive and adapts to different screen sizes.
- The QR code size is dynamically calculated for optimal display.
- The component supports both exporting and importing tournament data offline.
