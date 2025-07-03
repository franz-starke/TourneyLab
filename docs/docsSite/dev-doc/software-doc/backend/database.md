# Database-Class

This class handles all direct interactions with the SQLite database files representing each tournament.

## Class: `Database`

### Function: `query`

```python
def query(self, tournament_id='', query='', attributes=[]) -> Union[List, bool, None]:
```

Executes a SQL query on the tournament's database.

* **Args**:

  * `tournament_id` (`str`): ID of the tournament.
  * `query` (`str`): SQL statement to execute.
  * `attributes` (`list`): Parameters to bind to the SQL statement.
* **Returns**:

  * `List`: For successful SELECT queries.
  * `bool`: True for successful CREATE/INSERT/UPDATE.
  * `None`: On failure or no affected rows.

### Function: `create_tournament`

```python
def create_tournament(self, tournament_id: str, name: str, date: str, field_count: int, team_count: int, group_count: int, fields: Dict[str, str], teams: Dict[str, List[Union[str, int]]], groups: Dict[str, str], games: Dict[str, List[Union[str, int]]], matchpoint: int) -> Optional[bool]:
```

Initializes the database and inserts the provided tournament data.

* **Args**:

  * `tournament_id` (`str`): Unique tournament identifier.
  * `name` (`str`): Tournament name.
  * `date` (`str`): Tournament date.
  * `field_count` (`int`): Total number of fields.
  * `team_count` (`int`): Total number of teams.
  * `group_count` (`int`): Total number of groups.
  * `fields` (`dict`): Field ID to field name.
  * `teams` (`dict`): Team ID to `[name, group_id]`.
  * `groups` (`dict`): Group ID to group name.
  * `games` (`dict`): Game ID to `[field_id, team1, team2, ref, time, score1, score2]`.
  * `matchpoint` (`int`): Points required to win a match.
* **Returns**:
  `bool`: True if the operation was successful.

### Function: `get_config`

```python
def get_config(self, tournament_id: str) -> Union[List, bool, None]:
```

Retrieves the configuration of a given tournament.

### Function: `get_games_from_field`

```python
def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List, bool, None]:
```

Fetches all games associated with a specific field.

### Function: `get_game_score`

```python
def get_game_score(self, tournament_id: str, game_id: str) -> Union[List, bool, None]:
```

Returns the score of a specific game.

### Method: `set_game_score`

```python
def set_game_score(self, tournament_id: str, game_id: str, score: list[int]) -> bool:
```

Updates the score of a specified game.

* **Returns**:
  `bool`: True if the update was successful.

### Function: `get_teams`

```python
def get_teams(self, tournament_id: str) -> Union[List, bool, None]:
```

Retrieves team data grouped by group ID.

### Function: `get_fields`

```python
def get_fields(self, tournament_id: str) -> Union[List, bool, None]:
```

Returns all unique field IDs used in the tournament.