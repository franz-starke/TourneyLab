
# API Class Documentation

**File:** `src/api/api.js`

This module provides a class for interacting with the backend API endpoints using Axios. It supports creating tournaments, retrieving tournaments and games, and editing game scores.

---

## Usage

Import and use the singleton instance:

```js
import api from '@/api/api';

const tournaments = await api.getOldTournaments();
```

---

## Server Configuration

- **Server addresses:**  
  - `localhost`: `127.0.0.1:8000`
  - `serverDomain`: `htw-turnier.de`
- **Protocol:**  
  - Always uses `http://` at the moment lol

---

## Methods
The methods correspond to the available api endpoints as specified in [the backend documentation](https://github.com/franz-starke/TourneyLab/blob/main/src/backend/data/apidocumentation.md)
