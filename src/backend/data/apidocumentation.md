# API Documentation

1. [Create a Tournament](#create-a-tournament)
2. [Get old Tournaments](#get-old-tournaments)
3. [Get game scores for a field](#get-game-scores-for-a-field)
4. [Get a game score](#get-a-game-score)
5. [Edit a game score](#edit-a-game-score)
6. [get an old tournament details](#get-old-tournament-details)

## Create a tournament

`POST htw-turnier.de/api/create`

Creates a new tournament to be played.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| name | String | The name of the new tournament.
| teams | Object | An object containing all groups with their sizes.
| teams.{`groupid`} | Integer | The individual team sizes.
| games | Object | An object specifying all games to be played.
| games.{`fieldid`} | Object | Contains all games played on this specific field.
| games.{`fieldid`}.{`gameid`} | Array (4) | An array containing game data: teams, referee, and time.
| games.{`fieldid`}.{`gameid`}[`0`] | Integer | ID of the first playing team.
| games.{`fieldid`}.{`gameid`}[`1`] | Integer | ID of the second playing team.
| games.{`fieldid`}.{`gameid`}[`2`] | Integer | ID of the referee team.
| games.{`fieldid`}.{`gameid`}[`3`] | String | Time the game is scheduled, e.g., `"16:10"`.
| date | String | The date of the tournament, formatted using the `"yyyy-MM-dd"` pattern.

Repalce `groupid`, `fieldid`, `gameid` with the corresponding IDs specific to the tournament.

### Example request data

```json
{
	"name":"Sommer Turnier 2025",
    "teams":{
		"1":3,
		"2":3
	},
  	"games":{
		"1":{
			"1":[1,2,3,"16:10"],
      		"2":[1,2,4,"16:35"]
		},
		"2":{
			"3":[1,2,3,"16:10"],
      		"4":[1,2,4,"16:35"]
		}
    },
	"date":"2025-06-15"
}
```

### Explanation

The purpose of the `create` endpoint is to allow users to define a custom tournament, as long as the submitted data follows the required structure. There can only be 5 tournaments created per minute to prevent spamming the server with data.

In the `teams` section:
- The keys represent group IDs (e.g., `"1"` for "Fun", `"2"` for "Schwitzer").
- Each value defines the number of teams in that group.
- Each group must have at least one team, and team size must be greater than 0.

In the `games` section: 
- The top-level keys represent field IDs (e.g., `"1"`, `"2"`), which should be incremental.
- Each field must contain one or more games.
- Each game is defined by a unique game ID and an array of four values:
 	1. ID of the first team
 	2. ID of the second team
 	3. ID of the referee team
 	4. Start time (formatted as a string, e.g., `"16:10"`)

All fields must at least provide one game and none should be empty.

#### Time format

- The time must be a string in `24-hour` format, using the `HH:mm` pattern (e.g., `"16:30"`).
- Hours must be between `0` and `23`, and minutes between `0` and `59`.
- The date must be a string, using the `yyyy-MM-dd` pattern (e.g., `"2025-06-15"`).
- Timezones are not handled by the API; clients must account for the local timezone of the tournament.

#### Validation rules

- All IDs (group, team, field, game) must be:
	- Numeric
	- Unique within their category
	- Between `0` and `9999` (inclusive)
- The teams object:
	- Must contain **at least one** and **at most two** entries
- The games object:
	- Must contain at least one field
	- Each field must contain at least one game

### Response

```json
{
  "tournament_id":"XYZ"
}
```

The api will respond with a unique tournament id, that can be used to make api requests to  this specific tournament.

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| tournament_id | String | The unique id for the newly created tournament.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Get old tournaments

`GET htw-turnier.de/api/tournaments`

Get all old tournaments, that have been created.

### Explanation

This endpoint does not need any parameters and is meant to return a list of all tournaments that have been played before by any player. It includes the important ID of each already played tournament for further requests.

### Response

```json
{
  "tournaments":[
	{"id":"XYZ","name":"Sommer Turnier 2025","date":"2025-06-20"},
	{"id":"ABC","name":"Nikolaus Turnier 2025","date":"2025-12-06"},
	{"id":"KLM","name":"Winter Turnier 2025","date":"2025-02-15"},
  ]
}
```
The api will respond with an `array` composed of `objects`.

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| tournaments | Array | An array composed of objects with previous tournaments.
| tournaments[`i`].id | String | The unique id of the already played tournament.
| tournaments[`i`].name | String | The name of the already played tournament.
| tournaments[`i`].date | String | The date when the tournament was played. Its formatted using the `"yyyy-MM-dd"` pattern.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Get game scores for a field

`GET htw-turnier.de/api/{tournamentID}/fields/{fieldID}`

Get all games from a field.

### Explanation

This endpoint does not need any parameters and is meant to return a list of scores from the played games on a specific field.

### Response

```json
{
	"games":[
		{"id":"0","score":[0,2],"time":"16:10"},
		{"id":"1","score":[3,4],"time":"16:35"},
		{"id":"2","score":[12,3],"time":"16:50"}
  	]
}
```

The api will respond with an `array` composed of `objects`.

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| games | Object | An array composed of objects with game scores for a game.
| games[i].id | String | The id of the game.
| games[i].score | Array (1-2) | An array composed of 2 integer as the game score.
| games[i].time | String | Time the game is scheduled, e.g., `"16:10"`.

The game score `array` describes the score for team 1 in the index `[0]` and the index `[1]` is the score for team 2.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Get a game score

`GET htw-turnier.de/api/{tournamentID}/game/{gameID}`

Gets the current score for a game.

#### Explanation

This endpoint does not need any parameters and is meant to return an array with 2 entries which is the score for the requested game.

#### Response

```json
{
  "score":[5,2]
}
```
The api will respond with an `array` composed of 2 `integers`. The first index of the array `[0]` are the points for the team in the first field of the game and the second index `[1]` are the points for the team in the other field of the game.

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| score | Array (1-2) | An array composed of 2 integers.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Edit a game score

`PUT htw-turnier.de/api/{tournamentID}/games/{gameID}`

Edit a specific game score.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| score | Array (1-2) | An array for the new game score.

### Example request data

```json
{
	"score":[1,4]
}
```

### Explanation

The `score` field is a required entry with 2 `integer`, which represent the games score. The first index of the array `[0]` are the points for the team in the first field of the game and the second index `[1]` are the points for the team in the other field of the game.

### Response

```json
HTTP/1.1 200 OK
```

The api will respond with a status code, dependent on the correctness of the change.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Get tournament details

`GET /api/{tournament_id}/details`

Gets the details of a tournament.

#### Explanation

This endpoint does not need any parameters and is meant to return the details for the requested tournament.

### Response

```json
{
  "name": ["Niklaus Turnier"],

  "teams":{
		"1":1,
		"2":1,
		"3":1,
		"4":1
	},

  "games": {
		"1":{
			"1":[1,2,3,[5,7],"16:10"],
      		"2":[1,2,4,[3,9],"16:35"]
		},
		"2":{
			"3":[1,2,3,[23,9],"16:10"],
      		"4":[1,2,4,[24,15],"16:35"]
		}
  },
  "date":"2025-06-15"
  
}
```

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| name | String | The name of the new tournament.
| teams | Object | An object containing all groups with their sizes.
| teams.{`groupid`} | Integer | The individual team sizes.
| games | Object | An object specifying all games to be played.
| games.{`fieldid`} | Object | Contains all games played on this specific field.
| games.{`fieldid`}.{`gameid`} | Array (5) | An array containing game data: teams, referee, and time.
| games.{`fieldid`}.{`gameid`}[`0`] | Integer | ID of the first playing team.
| games.{`fieldid`}.{`gameid`}[`1`] | Integer | ID of the second playing team.
| games.{`fieldid`}.{`gameid`}[`2`] | Integer | ID of the referee team.
| games.{`fieldid`}.{`gameid`}[`3`] | Integer | Score of the game.
| games.{`fieldid`}.{`gameid`}[`4`] | String | Time the game is scheduled, e.g., `"16:10"`.
| date | String | The date of the tournament, formatted using the `"yyyy-MM-dd"` pattern.

### Explanation

In the `teams` section:
- The keys represent group IDs (e.g., `"1"` for "Fun", `"2"` for "Schwitzer").
- Each value defines the number of teams in that group.
- There is at least one group with one team.

In the `games` section: 
- The top-level keys represent field IDs (e.g., `"1"`, `"2"`), which is incremental.
- Each field has at least one game.
- Each game is defined by a unique game ID and an array of five values:
- The game score `array` describes the score for team 1 in the index `[0]` and the index `[1]` is the score for team 2.
 	1. ID of the first team
 	2. ID of the second team
 	3. ID of the referee team
    4. Score of the game
 	5. Start time (formatted as a `24h` string, e.g., `"16:10"`)

#### Time format

- The time is a string in `24-hour` format, using the `HH:mm` pattern (e.g., `"16:30"`).
- The date is a string, using the `yyyy-MM-dd` format (e.g., `"2025-06-15"`).
- Timezones are not handled by the API; clients must account for the local timezone of the tournament.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable