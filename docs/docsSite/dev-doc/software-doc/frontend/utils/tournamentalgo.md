# tournamentalgo.js

> Algorithm for scheduling round-robin tournaments, field and referee assignment, conflict detection, and (optionally) double-legged games.

---

## Function: `createTournamentSchedule`

### Description

The `createTournamentSchedule` function generates a complete match schedule for a tournament, based on input parameters like teams, number of fields, referees, and group structure. It supports both single-leg and double-leg (home-and-away) round-robins, assigns referees, and detects common scheduling conflicts (e.g., a team or referee being scheduled for multiple matches at the same time).

---

### Input Format

```js
{
  teams: Array<string | number>,      // List of team IDs or names
  groupCount: number,                 // Number of groups (optional, default: 1)
  teamsPerGroup: number,              // Teams per group (required if multiple groups)
  fields: number,                     // Number of available playing fields
  referees: Array<string | number>,   // List of referee IDs or names (optional)
  doubleLegged: boolean,              // If true, schedule each match twice (home & away)
  startTime: string,                  // Tournament start time (e.g., "09:00")
  matchDuration: number,              // Match duration in minutes (default: 30)
  breakDuration: number,              // Break duration between matches in minutes (default: 0)
  customPairings: Array<[number, number]> // Optional: List of explicit pairings to schedule instead of round-robin
}
```


-   If groupCount and teamsPerGroup are specified, the algorithm divides teams into groups and creates a round-robin schedule for each group.

-   If customPairings is provided, only the listed matches will be scheduled.

-   If referees is specified, referees are assigned to matches in a way that avoids direct conflicts with their own teams' games.

### Features
-   Round-Robin Scheduling: Each team plays every other team in its group once (or twice if doubleLegged).
-   Field Allocation: Matches are distributed across available fields in each time slot.
-   Referee Assignment: Referees are rotated and not assigned to matches involving their own teams, if possible.   
-   Time Slot Calculation: Games are scheduled with optional breaks, starting from the specified startTime.
-   Conflict Detection: The schedule generator avoids overlapping matches for the same team or referee. Detected conflicts are flagged in the output.
-   Return-Leg Support: If doubleLegged is true, each match is scheduled twice, swapping home/away assignments.


### Output Format
```js
{
  schedule: Array<{
    group: string,                 // Group identifier
    round: number,                 // Round number (1-based)
    field: number,                 // Field number (1-based)
    time: string,                  // Start time (e.g., "09:00")
    teamA: string | number,        // Home team
    teamB: string | number,        // Away team
    referee: string | number,      // Assigned referee (optional)
    conflict: boolean,             // True if there is a conflict in this match
    conflictType: string | null    // Description of conflict, if any
  }>,
  conflicts: Array<{
    matchIndex: number,            // Index of the match in the schedule
    conflictType: string,          // Type of conflict detected
    details: string                // Human-readable description
  }>
}
```

### Notes
-   Teams and Referees: IDs or names are accepted, but must be unique within their respective arrays.
-   Conflict Examples:
    -   A team is scheduled for two games at the same time.
    -   A referee is scheduled for two matches in the same time slot.
    -   A referee is assigned to a match involving their own team.
-   Extensibility: The algorithm is designed to be modular, so you can plug in custom pairing logic or additional constraints as needed.
-   Edge Cases: The function attempts to schedule as fairly as possible, but certain edge cases (e.g., not enough referees or fields) may result in unavoidable -  conflicts, which are reported in the output.

### Example Usage
```js
import { createTournamentSchedule } from "@/utils/tournamentalgo";

// Basic round-robin tournament for 6 teams, 2 fields, 2 referees, no return leg:
const result = createTournamentSchedule({
  teams: [1, 2, 3, 4, 5, 6],
  fields: 2,
  referees: ["Ref A", "Ref B"],
  doubleLegged: false,
  startTime: "09:00",
  matchDuration: 30,
  breakDuration: 5
});

console.log(result.schedule);
console.log("Conflicts found:", result.conflicts);

// With groups and double leg:
const groupResult = createTournamentSchedule({
  teams: ["A", "B", "C", "D", "E", "F", "G", "H"],
  groupCount: 2,
  teamsPerGroup: 4,
  fields: 2,
  referees: ["Ref 1", "Ref 2", "Ref 3"],
  doubleLegged: true,
  startTime: "10:00",
  matchDuration: 25
});

console.log(groupResult.schedule);
```

### Return Type (TypeScript)

```ts
function createTournamentSchedule(params: {
  teams: (string | number)[],
  groupCount?: number,
  teamsPerGroup?: number,
  fields: number,
  referees?: (string | number)[],
  doubleLegged?: boolean,
  startTime: string,
  matchDuration?: number,
  breakDuration?: number,
  customPairings?: [number, number][]
}): {
  schedule: Array<{
    group: string,
    round: number,
    field: number,
    time: string,
    teamA: string | number,
    teamB: string | number,
    referee?: string | number,
    conflict: boolean,
    conflictType: string | null
  }>,
  conflicts: Array<{
    matchIndex: number,
    conflictType: string,
    details: string
  }>
}
```

