# Server Class

This class implements the core logic behind tournament creation, score management, and data retrieval. It links the api with the databases.

## Attributes

* `database`: Path to the tournament database.
* `max_calls`: Max allowed calls to prevent spamming.
* `time_window`: Time window for rate-limiting.
* `time_diff`: Time since the last creation.
* `last_created`: Timestamp of the last tournament creation.

## Function: `create_tournament`

```python
def create_tournament(self, name: str, date: str, teams: dict, games: dict, matchpoint: int) -> Union[str, data.utils.Error]:
```

Creates and stores a new tournament.

* **Args**:

  * `name` (`str`): Name of the tournament.
  * `date` (`str`): Tournament date.
  * `teams` (`dict`): Groups and number of teams.
  * `games` (`dict`): Game schedule and match details.
  * `matchpoint` (`int`): Points required to win a match.
* **Returns**:

  * `str`: UUID of the new tournament.
  * `Error`: If creation fails.
* **Raises**:

  * Unique ID generation failure
  * File or database errors
  * Team/game preparation errors

## Method: `get_tournaments`

```python
def get_tournaments(self) -> Union[List, data.utils.Error]:
```

Fetches metadata for all tournaments.

* **Returns**:

  * `list`: Each dict contains `id`, `name`, and `date`.

## Method: `get_games_from_field`

```python
def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List[Dict[str, Any]], data.utils.Error]:
```

Returns all games on a specific field.

* **Args**:

  * `tournament_id` (`str`): Tournament UUID.
  * `field_id` (`str`): Field identifier.
* **Returns**:

  * `list`: Each dict includes game `id`, `score`, and `time`.

## Method: `get_game_score`

```python
def get_game_score(self, tournament_id: str, game_id: str) -> Union[List[int], data.utils.Error]:
```

Fetches score of a specific game.

* **Args**:

  * `tournament_id` (`str`): Tournament UUID.
  * `game_id` (`str`): Game ID.
* **Returns**:

  * `list`: Score format is `[team1_score, team2_score]`.

## Method: `set_game_score`

```python
def set_game_score(self, tournament_id: str, game_id: str, score: list) -> Union[bool, data.utils.Error]:
```

Updates the score of a specific game.

* **Args**:

  * `tournament_id` (`str`): Tournament UUID.
  * `game_id` (`str`): Game ID.
  * `score` (`list`): Format `[team1_score, team2_score]`.
* **Returns**:

  * `bool`: Success status.

## Method: `get_tournament_details`

```python
def get_tournament_details(self, tournament_id: str) -> Union[Dict[str, Any], data.utils.Error]:
```

Fetches full details of a tournament.

* **Args**:

  * `tournament_id` (`str`): Tournament UUID.
* **Returns**:

  * `dict`: Includes `name`, `date`, `teams`, `games`.

## Method: `generate_unique_string`

```python
def generate_unique_string(self) -> Optional[str]:
```

Generates a unique 8-digit numeric string as a tournament ID.