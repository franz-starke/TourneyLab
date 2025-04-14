# API Documentation
1. [Create a Tournament](#create-a-tournament)
2. [Get old Tournaments](#get-old-tournaments)
3. [Get game scores for a field](#get-game-scores-for-a-field)
4. [Get a game score](#get-a-game-score)
5. [Edit a game score](#edit-a-game-score)

## Create a tournament

```POST htw-turnier.de/api/create```

Creates a new Tournament with empty games.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| name | String | The name of the new Tournament with max. 16 Alphanumeric characters.
| fields | Integer | The amount of individual fields.
| teams | Integer | The amount of the overall teams.
| groups | Integer | The amount of performance groups.
| return | Boolean | Defines if the teams have a returning game or rematch.
| refs | Object | For filling the remaining empty referee slots.
| teamgroups | Object | For setting a custom amount for teams in a performancegroup
| games | Object | All games that have to be played.

### Example request data

```
{
	"name":"Sommer Turnier 2025",
	"fields":2,
	"teams":2,
	"groups":1,
	"return":false,
	"refs":{
      	"1":2,
      	"2":2
    },
    "teamgroups":{
		"1":2,
		"2":3
	},
  	"games":{
      	"1":[1,2,null],
      	"2":[1,2,null]
    }
}
```

### Explanation
The ```refs``` field is required for the because the creation algorithm creates games with no refs when no ref is available. In this case the user can decide which team should be a referee. This must be send over the api so it can be stored in the database.

In the ```teamgroups``` required field, a custom team amount of a performance group can be defined, so it can be stored in the database. 

Also the ```games``` field is required, that all created games from the frontend are send to the database, so the backend can store point entries in the correct dataset.

### Response
```
HTTP/1.1 200 OK
{
  "tid":"XYZ"
}
```

The api will respond with a unique tournament id, that can be used to make api requests to  this specific tournament.

### Response fields
| Field	| Type | Description |
| :---: | :--: | :---------: |
| tid | String | The unique id for the newly created tournament.

### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable

## Get old tournaments

```GET htw-turnier.de/api/tournaments```

Get all old tournaments, that have been created.

### Explanation
This endpoint does not need any parameters and is meant to return a list of all tournaments that have been played before by any player.

### Response
```
HTTP/1.1 200 OK
{
  "tournaments":[
	{"id":"XYZ","name":"Sommer Turnier 2025","date":1748736000},
	{"id":"ABC","name":"Nikolaus Turnier 2025","date":1764979200},
	{"id":"KLM","name":"Winter Turnier 2025","date":1767139200},
  ]
}
```
The api will respond with an ```array``` composed of ```objects```, which contain:
- ```id``` as a unique tournament id
- ```name``` for the name of the tournament
- ```date``` as a timestamp for when the tournament was played.

### Response fields
| Field	| Type | Description |
| :---: | :--: | :---------: |
| tournaments | Array | An array composed of objects with previous tournaments.

### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable


## Get game scores for a field

```GET htw-turnier.de/{tournamentID}/fields/{fieldID}```

Get all games from a field.

### Explanation
This endpoint does not need any parameters and is meant to return a list of scores from the played games.

### Response
```
HTTP/1.1 200 OK
{
	"games":[
		{"id":"0","score":[0,2]},
		{"id":"1","score":[3,4]},
		{"id":"2","score":[12,3]}
  	]
}
```

The api will respond with an ```array``` composed of ```objects```, which contain:
- ```id``` as the unique game id
- ```score``` for the games score. This is an ```array``` of which the index [0] is the score for team 1 and the index [1] is the score for team 2.

### Response fields
| Field	| Type | Description |
| :---: | :--: | :---------: |
| games | Object | An array composed of objects with game scores for a game.

### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable

## Get a game score

```GET htw-turnier.de/api/{tournamentID}/game/{gameID}```

Gets the current score for a game.

#### Explanation
This endpoint does not need any parameters and is meant to return an array with 2 entries which is the score for the requested game.

#### Response
```
HTTP/1.1 200 OK
{
  "score":[5,2]
}
```
The api will respond with an ```array``` composed of 2 ```integers```. The first index of the array `[0]` are the points for the team in the first field of the game and the second index `[1]` are the points for the team in the other field of the game.

### Response fields
| Field	| Type | Description |
| :---: | :--: | :---------: |
| score | Array | An array composed of 2 integers.  .

### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable

## Edit a game score

```PUT htw-turnier.de/api/{tournamentID}/games/{gameID}```

Edit a specific game score.

### Parameters

| Field	| Type | Description |
| :---: | :--: | :---------: |
| score | Array | An array for the new game score.

### Example request data

```
{
	"score":[1,4]
}
```

### Explanation

The ```score``` field is a required entry with 2 ```integer```, which represent the games score. The first index of the array `[0]` are the points for the team in the first field of the game and the second index `[1]` are the points for the team in the other field of the game.

### Response

```
HTTP/1.1 200 OK
```

The api will respond with a status code, dependent on the correctness of the change.

### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable