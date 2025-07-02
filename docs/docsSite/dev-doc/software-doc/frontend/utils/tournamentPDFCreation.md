# tournamentPDFCreation.js Documentation

## Overview

`tournamentPDFCreation.js` provides a utility function to generate a styled PDF document containing tournament results. It uses the [pdf-lib](https://pdf-lib.js.org/) library to create and download a PDF with group standings, team stats, and tournament metadata.

---

## Function

### `generatePdfBrowser(result)`

**Description:**  
Generates and downloads a PDF file with the tournament results, including group standings and team statistics.

**Parameters:**
- `result` (`Object`): The output of `evaluateTournamentData()`, containing tournament name, date, and group/team results.

**How it works:**
1. Creates a new PDF document and adds a page.
2. Writes the tournament name and date at the top.
3. For each group, writes the group label and a table with headers:
   - Rank, Team, Games, Wins, Draws, Losses, Points, Score Difference
4. Fills in the table with each team's stats.
5. Handles page breaks if the content exceeds the page height.
6. Triggers a download of the generated PDF file.

**Usage Example:**
```js
import { generatePdfBrowser } from '@/util/tournamentPDFCreation.js';

await generatePdfBrowser(result);
