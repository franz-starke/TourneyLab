<a name="evaluateTournamentData"></a>

## evaluateTournamentData(tournamentData) ⇒ <code>Object</code>
📊 Evaluates a tournament based on the played games and calculates team rankings.This function can accept either a plain object or a Vue `ref` containing the tournament data.--- Input format ---{  name: "Tournament Name",  date: "YYYY-MM-DD",  groups: {1:6, 2:6}, // Number of teams per group  games: {    "1": {      "1": [1, 2, 0, [5, 3], "10:00"], // [teamA, teamB, field, [scoreA, scoreB], time]      ...    },    "2": { ... }  }}--- Output format ---{  name: "Tournament Name",  date: "YYYY-MM-DD",  groups: [    {      groupId: "1",      teams: [        {          id: "1",          games_played: 5,          wins: 3,          draws: 1,          losses: 1,          points: 10,          score_diff: 8,          rank: 1        },        ...      ]    },    ...  ]}

**Kind**: global function  
**Returns**: <code>Object</code> - Structured tournament result with team statistics and rankings.  

| Param | Type | Description |
| --- | --- | --- |
| tournamentData | <code>Object</code> \| <code>Ref</code> | Tournament object or a Vue ref containing it. |

