# generatePdfBrowser.js

> Function for generating a styled tournament result PDF in the browser using [pdf-lib](https://pdf-lib.js.org/).

---

## Function: `generatePdfBrowser`

### Description

The `generatePdfBrowser` function creates a visually formatted PDF file in the browser from tournament ranking data, such as the output of `evaluateTournamentData()`. It supports multi-group tournaments, includes custom group labels, paginates automatically, and initiates download of the generated PDF.

---

### Input Format

```js
{
  name: string,      // Tournament name
  date: string,      // Tournament date
  groups: [          // Array of groups with team rankings
    {
      groupId: string,
      teams: [
        {
          id: string,            // Team name or ID
          games_played: number,  // Number of matches played
          wins: number,          // Wins
          draws: number,         // Draws
          losses: number,        // Losses
          points: number,        // Points
          score_diff: number,    // Score differential
          rank: number           // Rank in group
        }
      ]
    }
  ]
}
```

-   This input matches the output structure of evaluateTournamentData().
-   Group labels default to "Fun" and "Schwitzer" for the first two groups; otherwise, fallback labels like "Group 1", "Group 2", etc., are used.


### Features
-   PDF Styling: Tournament title and date as header, group names as subheadings, team rankings in table format.
-   Automatic Pagination: Adds new pages if the content overflows (simple bottom margin check).
-   Group Labels: Uses "Fun" and "Schwitzer" as labels for the first two groups if present.   
-   Column Headers: Displays "Rang", "Team", "Spiele", "S", "U", "N", "Punkte", "Diff" (German abbreviations for: Rank, Team, Matches, Wins, Draws, Losses, Points, Differential).
-   Browser Download: The resulting PDF is automatically downloaded with a filename based on the tournament name.


### Output
-   Side Effect: Triggers a PDF download in the user's browser.
-   PDF Layout Example:

```python-repl
Turnier: Summer Cup
Datum: 2025-07-03

Fun
Rang   Team   Spiele  S  U  N  Punkte  Diff
1      TeamA  3       2  1  0  7       5
2      TeamB  3       1  1  1  4       1
...

Schwitzer
Rang   Team   Spiele  S  U  N  Punkte  Diff
...
```

### Example Usage

```js
import { generatePdfBrowser } from "@/utils/generatePdfBrowser";
import { evaluateTournamentData } from "@/utils/tournamentEvaluation";

// Assuming you have a tournament result object
const result = evaluateTournamentData(tournamentData);
generatePdfBrowser(result);
```

### Function Signature (TypeScript)

```ts
export async function generatePdfBrowser(
  result: {
    name: string,
    date: string,
    groups: Array<{
      groupId: string,
      teams: Array<{
        id: string,
        games_played: number,
        wins: number,
        draws: number,
        losses: number,
        points: number,
        score_diff: number,
        rank: number
      }>
    }>
  }
): Promise<void>
```
