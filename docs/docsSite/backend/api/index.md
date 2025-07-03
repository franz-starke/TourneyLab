# API Documentation

1. [Create a Tournament](#create-a-tournament)
2. [Get old Tournaments](#get-old-tournaments)
3. [Get game scores for a field](#get-game-scores-for-a-field)
4. [Get a game score](#get-a-game-score)
5. [Edit a game score](#edit-a-game-score)
6. [Get tournament details](#get-tournament-details)

## Create a tournament

`POST htw-turnier.de/api/create`

Creates a new tournament to be played.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| name | String | The name of the new tournament.
| date | String | The date of the tournament, formatted using the `"yyyy-MM-dd"` pattern.
| teams | Object | An object containing all groups with their sizes.
| teams.{`groupid`} | Integer | The individual team sizes.
| games | Object | An object specifying all games to be played.
| games.{`fieldid`} | Object | Contains all games played on this specific field.
| games.{`fieldid`}.{`gameid`} | Array (4) | An array containing game data: teams, referee, and time.
| games.{`fieldid`}.{`gameid`}[`0`] | Integer | ID of the first playing team.
| games.{`fieldid`}.{`gameid`}[`1`] | Integer | ID of the second playing team.
| games.{`fieldid`}.{`gameid`}[`2`] | Integer | ID of the referee team.
| games.{`fieldid`}.{`gameid`}[`3`] | String | Time the game is scheduled, e.g., `"16:10"`.

Repalce `groupid`, `fieldid`, `gameid` with the corresponding IDs specific to the tournament.

### Example request data

```json
{
    "name":"Sommer Turnier 2025",
    "date":"2025-06-15",
    "teams": {
        "1":6,
        "2":6
    },
    "games": {
        "1": {
            "1": [1, 2, 5, "10:00"],
            "2": [2, 1, 5, "10:30"],
            "3": [5, 6, 1, "11:00"],
            "4": [6, 5, 1, "11:30"],
            "5": [1, 3, 6, "12:00"],
            "6": [3, 1, 6, "12:30"],
            "7": [3, 5, 2, "13:00"],
            "8": [5, 3, 2, "13:30"],
            "9": [1, 6, 3, "14:00"],
            "10": [6, 1, 3, "14:30"],
            "11": [2, 6, 4, "15:00"],
            "12": [6, 2, 4, "15:30"],
            "13": [1, 5, 4, "16:00"],
            "14": [5, 1, 4, "16:30"],
            "15": [4, 6, 1, "17:00"],
            "16": [6, 4, 1, "17:30"],
            "17": [2, 5, 1, "18:00"],
            "18": [5, 2, 1, "18:30"],
            "19": [1, 4, 2, "19:00"],
            "20": [4, 1, 2, "19:30"]
        },
        "2": {
            "21": [3, 4, 6, "10:00"],
            "22": [4, 3, 6, "10:30"],
            "23": [11, 12, 7, "11:00"],
            "24": [12, 11, 7, "11:30"],
            "25": [2, 4, 5, "12:00"],
            "26": [4, 2, 5, "12:30"],
            "27": [9, 11, 12, "13:00"],
            "28": [11, 9, 12, "13:30"],
            "29": [4, 5, 2, "14:00"],
            "30": [5, 4, 2, "14:30"],
            "31": [8, 12, 9, "15:00"],
            "32": [12, 8, 9, "15:30"],
            "33": [2, 3, 6, "16:00"],
            "34": [3, 2, 6, "16:30"],
            "35": [10, 12, 11, "17:00"],
            "36": [12, 10, 11, "17:30"],
            "37": [3, 6, 4, "18:00"],
            "38": [6, 3, 4, "18:30"],
            "39": [7, 10, 8, "19:00"],
            "40": [10, 7, 8, "19:30"]
        },
        "3": {
            "41": [7, 8, 10, "10:00"],
            "42": [8, 7, 10, "10:30"],
            "43": [9, 10, 8, "11:00"],
            "44": [10, 9, 8, "11:30"],
            "45": [7, 9, 10, "12:00"],
            "46": [9, 7, 10, "12:30"],
            "47": [8, 10, 7, "13:00"],
            "48": [10, 8, 7, "13:30"],
            "49": [7, 12, 9, "14:00"],
            "50": [12, 7, 9, "14:30"],
            "51": [10, 11, 7, "15:00"],
            "52": [11, 10, 7, "15:30"],
            "53": [7, 11, 12, "16:00"],
            "54": [11, 7, 12, "16:30"],
            "55": [8, 9, 7, "17:00"],
            "56": [9, 8, 7, "17:30"],
            "57": [8, 11, 9, "18:00"],
            "58": [11, 8, 9, "18:30"],
            "59": [9, 12, 11, "19:00"],
            "60": [12, 9, 11, "19:30"]
        }
    }
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
  "tournament_id":"123"
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
    {"id":"123","name":"Sommer Turnier 2025","date":"2025-06-20"},
    {"id":"456","name":"Nikolaus Turnier 2025","date":"2025-12-06"},
    {"id":"789","name":"Winter Turnier 2025","date":"2025-02-15"},
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
        {"id":"1","score":[0,12],"time":"10:00"},
        {"id":"2","score":[3,14],"time":"10:30"},
        {"id":"3","score":[12,3],"time":"11:00"},
        {"id":"4","score":[5,22],"time":"11:30"},
        {"id":"5","score":[18,7],"time":"12:00"},
        {"id":"6","score":[3,13],"time":"12:30"},
        {"id":"7","score":[9,11],"time":"13:00"},
        {"id":"8","score":[8,17],"time":"13:30"},
        {"id":"9","score":[21,3],"time":"14:00"},
        {"id":"10","score":[0,0],"time":"14:30"},
        {"id":"11","score":[0,0],"time":"15:00"},
        {"id":"12","score":[0,0],"time":"15:30"},
        {"id":"13","score":[0,0],"time":"16:00"},
        {"id":"14","score":[0,0],"time":"16:30"},
        {"id":"15","score":[0,0],"time":"17:00"},
        {"id":"16","score":[0,0],"time":"17:30"},
        {"id":"17","score":[0,0],"time":"18:00"},
        {"id":"18","score":[0,0],"time":"18:30"},
        {"id":"19","score":[0,0],"time":"19:00"},
        {"id":"20","score":[0,0],"time":"19:30"}
    ]
}
```

The api will respond with an `array` composed of `objects`.

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| games | Object | An array composed of objects with game scores for a game.
| games[i].id | String | The id of the game.
| games[i].score | Array (2) | An array composed of 2 integer as the game score.
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
| score | Array (2) | An array composed of 2 integers.

### Possible errors

400 Bad Request

403 Forbidden

405 Method Not Allowed

422 Unprocessable Entity

500 Internal Server Error

503 Service Unavailable

## Edit a game score

`PUT htw-turnier.de/api/{tournamentID}/game/{gameID}`

Edit a specific game score.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| score | Array (2) | An array for the new game score.

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
{
    "status_code": 200,
    "detail": "Updated game score"
}
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
    "name":"Sommer Turnier 2025",
    "date":"2025-06-15",
    "teams": {
        "1":6,
        "2":6
    },
    "games": {
        "1": {
            "1": [1, 2, 5, "10:00", [5,13]],
            "2": [2, 1, 5, "10:30", [13,2]],
            "3": [5, 6, 1, "11:00", [7,12]],
            "4": [6, 5, 1, "11:30", [2,16]],
            "5": [1, 3, 6, "12:00", [14,6]],
            "6": [3, 1, 6, "12:30", [16,9]],
            "7": [3, 5, 2, "13:00", [18,3]],
            "8": [5, 3, 2, "13:30", [4,14]],
            "9": [1, 6, 3, "14:00", [9,16]],
            "10": [6, 1, 3, "14:30", [3,20]],
            "11": [2, 6, 4, "15:00", [7,14]],
            "12": [6, 2, 4, "15:30", [9,17]],
            "13": [1, 5, 4, "16:00", [2,11]],
            "14": [5, 1, 4, "16:30", [5,19]],
            "15": [4, 6, 1, "17:00", [19,7]],
            "16": [6, 4, 1, "17:30", [15,6]],
            "17": [2, 5, 1, "18:00", [7,14]],
            "18": [5, 2, 1, "18:30", [13,2]],
            "19": [1, 4, 2, "19:00", [16,1]],
            "20": [4, 1, 2, "19:30", [9,19]]
        },
        "2": {
            "21": [3, 4, 6, "10:00", [14,12]],
            "22": [4, 3, 6, "10:30", [17,15]],
            "23": [11, 12, 7, "11:00", [8,5]],
            "24": [12, 11, 7, "11:30", [8,8]],
            "25": [2, 4, 5, "12:00", [21,15]],
            "26": [4, 2, 5, "12:30", [16,11]],
            "27": [9, 11, 12, "13:00", [5,1]],
            "28": [11, 9, 12, "13:30", [3,8]],
            "29": [4, 5, 2, "14:00", [12,20]],
            "30": [5, 4, 2, "14:30", [21,11]],
            "31": [8, 12, 9, "15:00", [20,5]],
            "32": [12, 8, 9, "15:30", [2,13]],
            "33": [2, 3, 6, "16:00", [14,16]],
            "34": [3, 2, 6, "16:30", [11,10]],
            "35": [10, 12, 11, "17:00", [1,0]],
            "36": [12, 10, 11, "17:30", [9,6]],
            "37": [3, 6, 4, "18:00", [18,20]],
            "38": [6, 3, 4, "18:30", [19,19]],
            "39": [7, 10, 8, "19:00", [17,2]],
            "40": [10, 7, 8, "19:30", [14,4]]
        },
        "3": {
            "41": [7, 8, 10, "10:00", [1,11]],
            "42": [8, 7, 10, "10:30", [6,15]],
            "43": [9, 10, 8, "11:00", [12,1]],
            "44": [10, 9, 8, "11:30", [4,10]],
            "45": [7, 9, 10, "12:00", [15,8]],
            "46": [9, 7, 10, "12:30", [14,4]],
            "47": [8, 10, 7, "13:00", [17,3]],
            "48": [10, 8, 7, "13:30", [19,5]],
            "49": [7, 12, 9, "14:00", [9,20]],
            "50": [12, 7, 9, "14:30", [5,12]],
            "51": [10, 11, 7, "15:00", [1,1]],
            "52": [11, 10, 7, "15:30", [9,5]],
            "53": [7, 11, 12, "16:00", [5,2]],
            "54": [11, 7, 12, "16:30", [7,8]],
            "55": [8, 9, 7, "17:00", [20,20]],
            "56": [9, 8, 7, "17:30", [10,10]],
            "57": [8, 11, 9, "18:00", [10,6]],
            "58": [11, 8, 9, "18:30", [2,20]],
            "59": [9, 12, 11, "19:00", [6,7]],
            "60": [12, 9, 11, "19:30", [1,8]]
        }
    }
}
```

### Response fields

| Field	| Type | Description |
| :---: | :--: | :---------: |
| name | String | The name of the new tournament.
| date | String | The date of the tournament, formatted using the `"yyyy-MM-dd"` pattern.
| teams | Object | An object containing all groups with their sizes.
| teams.{`groupid`} | Integer | The individual team sizes.
| games | Object | An object specifying all games to be played.
| games.{`fieldid`} | Object | Contains all games played on this specific field.
| games.{`fieldid`}.{`gameid`} | Array (5) | An array containing game data: teams, referee, and time.
| games.{`fieldid`}.{`gameid`}[`0`] | Integer | ID of the first playing team.
| games.{`fieldid`}.{`gameid`}[`1`] | Integer | ID of the second playing team.
| games.{`fieldid`}.{`gameid`}[`2`] | Integer | ID of the referee team.
| games.{`fieldid`}.{`gameid`}[`3`] | Array (2) | Score of the game.
| games.{`fieldid`}.{`gameid`}[`4`] | String | Time the game is scheduled, e.g., `"16:10"`.

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