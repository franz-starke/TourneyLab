## Functions

<dl>
<dt><a href="#checkTournamentParams">checkTournamentParams(amountFields, amountGroups, amountTeams1, amountTeams2, withReturnGame)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if the tournement parameters are supported by the algorithm.</p>
</dd>
<dt><a href="#impossibleRefAssigning">impossibleRefAssigning(games, rounds, rounds[roundIndex, rounds[roundIndex][gameIndex)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if it is impossible to assign refrees to games in a tournament.</p>
</dd>
</dl>

<a name="checkTournamentParams"></a>

## checkTournamentParams(amountFields, amountGroups, amountTeams1, amountTeams2, withReturnGame) ⇒ <code>Boolean</code>
Check if the tournement parameters are supported by the algorithm.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if the parameters are supported, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| amountFields | <code>Number</code> | Amount of Fields |
| amountGroups | <code>Number</code> | Amount of Groups |
| amountTeams1 | <code>Number</code> | Amount of Teams in Group 1 |
| amountTeams2 | <code>Number</code> | Amount of Teams in Group 2 |
| withReturnGame | <code>Boolean</code> | If the tournament has return games |

<a name="impossibleRefAssigning"></a>

## impossibleRefAssigning(games, rounds, rounds[roundIndex, rounds[roundIndex][gameIndex) ⇒ <code>Boolean</code>
Check if it is impossible to assign refrees to games in a tournament.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if it is impossible to assign referees, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| games | <code>Object</code> | Object of Fields with Games |
| games.fieldId | <code>Object</code> | Object of Games with gameId as key and Array of Game-Arrays as value |
| games.fieldId.gameId | <code>Array</code> | game Array with [team1, team2, referee] |
| rounds | <code>Array</code> | Array of Rounds, where each Round is an Array of Games |
| rounds[roundIndex | <code>Array</code> | Array of Games in that Round |
| rounds[roundIndex][gameIndex | <code>Array</code> | game Array with [gameId, [team1, team2, referee]] |

