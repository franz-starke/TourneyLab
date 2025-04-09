# API Plan
## Endpunkte

### Create a tournament

```POST htw-turnier.de/api/create```

Creates a new Tournament with empty games.

#### Parameters

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

#### Example request data

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

#### Explanation
The ```refs``` field is required for the because the creation algorithm creates games with no refs when no ref is available. In this case the user can decide which team should be a referee. This must be send over the api so it can be stored in the database.

In the ```teamgroups``` required field, a custom team amount of a performance group can be defined, so it can be stored in the database. 

Also the ```games``` field is required, that all created games from the frontend are send to the database, so the backend can store point entries in the correct dataset.

#### Response
```
HTTP/1.1 200 OK
{
  "tid":"XYZ"
}
```
The api will respond with a unique tournament id, that can be used to make api requests to  this specific tournament.

#### Possible errors
400 Bad Request

403 Forbidden

503 Service Unavailable


### "Endpunkt api.htw-turnier.de/tournaments"
#### Typ:
- get
#### Ausgaben:
- Turniere: Liste
  - Turniername: String
  - Start Datum: Integer
  - TurnierID: String

### "Endpunkt api.htw-turnier.de/{turnierID}/fields/{feldID}"
#### Typ:
- get
#### Ausgaben:
- games: Liste
  - SpielID: String
  - Anfang: Timestamp
  - Ende: Timestamp
  - Team1: Liste
    - TeamID: String
    - Team Name: String
  - Team2: Liste
    - TeamID: String
    - Team Name: String
  - Schiri: String
  - Punkte: Liste
    - Punkte Team1: Integer
    - Punkte Team2: Integer

### "Endpunkt api.htw-turnier.de/{turnierID}/game/{spielID}"
#### Typ:
- get
#### Ausgaben:
- Punkte: Liste
  - Punkte Team1: Integer
  - Punkte Team2: Integer

### "Endpunkt api.htw-turnier.de/{turnierID}/game/{spielID}"
#### Typ:
- put
#### Eingabe:
- Punkte: Liste
    - Punkte Team1: Integer
    - Punkte Team2: Integer

### "Endpunkt api.htw-turnier.de/{turnierID}/performancegroups"
#### Typ:
- get
#### Ausgabe:
- Gruppen: Liste
  - Name: String
  - GruppenID: String

### "Endpunkt api.htw-turnier.de/{turnierID}/performancegroups/{groupID}"
#### Typ:
- get
#### Ausgabe:
- Teams: Liste
  - Name: String
  - Spielpunkten: Integer

### "Endpunkt api.htw-turnier.de/{turnierID}/team/{teamID}"
#### Typ:
- get
#### Info
- Wenn Team1 == "" und Team2 == "", dann ist Team Schiedsrichter
#### Ausgabe:
- Team1: String
- Team2: String
- Anfang: Timestamp
- Ende: Timestamp
- Feld: Integer
- Punkte: Liste
  - Punkte Team1: Integer
  - Punkte Team2: Integer