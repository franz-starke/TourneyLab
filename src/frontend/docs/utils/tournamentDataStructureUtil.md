## Functions

<dl>
<dt><a href="#getRounds">getRounds(games)</a> ⇒ <code>Array.&lt;Array.&lt;Array.&lt;string, Array.&lt;string, string, string&gt;&gt;&gt;&gt;</code></dt>
<dd><p>convert the game data structure to rounds of games</p>
</dd>
<dt><a href="#availableRefsForGame">availableRefsForGame()</a> ⇒</dt>
<dd></dd>
<dt><a href="#someGameInGamesHasNoRef">someGameInGamesHasNoRef(games)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Brief description of the function here.</p>
</dd>
</dl>

<a name="getRounds"></a>

## getRounds(games) ⇒ <code>Array.&lt;Array.&lt;Array.&lt;string, Array.&lt;string, string, string&gt;&gt;&gt;&gt;</code>
convert the game data structure to rounds of games

**Kind**: global function  
**Returns**: <code>Array.&lt;Array.&lt;Array.&lt;string, Array.&lt;string, string, string&gt;&gt;&gt;&gt;</code> - Returns an array of rounds. Each round is an array of tuples:
[gameId, [team1, team2, referee]].  

| Param | Type | Description |
| --- | --- | --- |
| games | <code>Object.&lt;string, Object.&lt;string, Array.&lt;string, string, string&gt;&gt;&gt;</code> | An object where keys are field IDs, and values are objects mapping game IDs to game arrays ([team1, team2, referee]). |

<a name="availableRefsForGame"></a>

## availableRefsForGame() ⇒
**Kind**: global function  
**Returns**: Array of available Referee Teams for game with gameId  
<a name="someGameInGamesHasNoRef"></a>

## someGameInGamesHasNoRef(games) ⇒ <code>Boolean</code>
Brief description of the function here.

**Kind**: global function  
**Returns**: <code>Boolean</code> - true if some game in games has no referee, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| games | <code>Object</code> | Object of Fields with Games |
| games.fieldId | <code>Object</code> | Object of Games with gameId as key and Array of Game-Arrays as value |
| games.fieldId.gameId | <code>Array</code> | game Array with [team1, team2, referee] |

