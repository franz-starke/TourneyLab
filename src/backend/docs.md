# API Plan

## Error Codes
- 200 OK
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Endpunkte
### "Endpunkt api.htw-turnier.de/create"
#### Typ:
- post 
#### Eingaben:
- Turniername: String
- Anzahl der Felder: Integer
- Anzahl der Teams: Integer
- Anzahl der Leistungsgruppen: Integer
- Hin-Rückspiel: Boolean
#### Ausgaben:
- TurnierID

### "Endpunkt api.htw-turnier.de/turnaments"
#### Typ:
- get
#### Ausgaben:
- Turniere: Liste
  - Turniername: String
  - Start Datum: Timestamp
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