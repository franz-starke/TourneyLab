# API-Class

This module defines the public API for managing tournaments. It is the main executing file that is started.

## Global Setup

```python
api = <fastapi.applications.FastAPI object>
server = <server.Server object>
origins = ['*']
# If deployed under strict rules change origins to desired origin
```

## Utility: `handle_error`

```python
def handle_error(result) -> dict | data.utils.Error:
```

Converts an `Error` object into an HTTPException.

* **Args**:

  * `result`: The result returned by a server method.
* **Returns**:
  The original result if it's not an `Error`.
* **Raises**:
  `HTTPException` if `result` is an instance of `utils.Error`.

## Endpoint: Create Tournament

```python
@api.post('/api/create')
def create_tournament(data: data.apiobjects.CreateTournament):
```

Creates a new tournament to be played.

* **Args**:

  * `data` (`CreateTournament`): Tournament creation data from the client.
* **Returns**:
  The unique ID of the newly created tournament.

## Endpoint: List Tournaments

```python
@api.get('/api/tournaments', summary='List all tournaments')
def get_tournaments():
```

Fetches all previously created tournaments.

* **Returns**:
  A list of all existing tournaments.

## Endpoint: Get Field Games

```python
@api.get('/api/{tournament_id}/fields/{field_id}')
def get_field_games(tournament_id: str, field_id: str):
```

Retrieves all games scheduled for a specific field.

* **Args**:

  * `tournament_id` (`str`): Unique ID of the tournament.
  * `field_id` (`str`): Identifier for the field.
* **Returns**:
  A list of all games associated with the field.

## Endpoint: Get Game Score

```python
@api.get('/api/{tournament_id}/game/{game_id}')
def get_game_score(tournament_id: str, game_id: str):
```

Retrieves the current score of a specific game.

* **Args**:

  * `tournament_id` (`str`): Unique ID of the tournament.
  * `game_id` (`str`): Unique ID of the game.
* **Returns**:
  The current score of the game.

## Endpoint: Update Game Score

```python
@api.put('/api/{tournament_id}/game/{game_id}')
def set_game_score(tournament_id: str, game_id: str, data: data.apiobjects.ScoreUpdate):
```

Updates the score of a specific game.

* **Args**:

  * `tournament_id` (`str`): Unique ID of the tournament.
  * `game_id` (`str`): Unique ID of the game.
  * `data` (`ScoreUpdate`): New score data to apply.
* **Returns**:
  A status response indicating success or failure.

## Endpoint: Get Tournament Details

```python
@api.get('/api/{tournament_id}/details')
def get_tournament_details(tournament_id: str):
```

Fetches all details about a tournament that has already been played.

* **Args**:

  * `tournament_id` (`str`): Unique ID of the tournament.
* **Returns**:
  Complete tournament data including all games and scores.