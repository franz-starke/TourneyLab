import os
import sqlite3
import data.utils as utils

class Database:
    def query(self, tournament_id="", query="", attributes=[]) -> list|bool|None:
        """
        Executes a SQL query on the tournaments database.

        Args:
            tournament_id (str): ID of the tournament (used to locate db file).
            query (str): SQL query to be executed.
            attributes (list): Parameters for the SQL query.

        Returns:
            List: If SELECT query succeeds.
            bool: True for successful CREATE/INSERT/UPDATE.
            None: On failure or no rows affected.
        """

        try:
            with sqlite3.connect(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")) as connection:
                cursor = connection.cursor()
                cursor.execute(query, attributes)

                query_type = query.strip().split()[0].upper()

                if query_type == "SELECT":
                    data = cursor.fetchall()
                    return data if data else None

                elif query_type == "CREATE":
                    return cursor.rowcount == -1

                elif query_type in {"INSERT", "UPDATE"}:
                    return cursor.rowcount > 0

                return None

        except Exception:
            utils.LOGGER.error(f"Cannot process query: {tournament_id}, {query}, {attributes}")
            return None

    def create_tournament(
        self,
        tournament_id: str,
        name: str,
        date: str,
        field_count: int,
        team_count: int,
        group_count: int,
        fields: dict[str, str],
        teams: dict[str, list[str|int]],
        groups: dict[str, str],
        games: dict) -> bool:

        """
        Initializes the database for a new tournament and inserts the provided data.

        Args:
            tournament_id (str): Unique identifier for the tournament.
            name (str): Tournament name.
            date (str): Tournament date.
            field_count (int): Number of fields.
            team_count (int): Number of teams.
            group_count (int): Number of groups.
            fields (dict): Field ID to name mapping.
            teams (dict): Team ID to [name, group_id] mapping.
            groups (dict): Group ID to name mapping.
            games (dict): Game ID to [field_id, team1, team2, ref, time, score1, score2].

        Returns:
            bool: True if setup is successful.
        """

        self.query(tournament_id, """
            CREATE TABLE IF NOT EXISTS config (
            id           TEXT PRIMARY KEY,
            name         TEXT,
            date         TEXT,
            field_count  INTEGER,
            team_count   INTEGER,
            group_count  INTEGER)""")

        self.query(tournament_id, """
            INSERT INTO config 
            (id, name, date, field_count, team_count, group_count)
            VALUES (?, ?, ?, ?, ?, ?)""", 
            [tournament_id, name, date, field_count, team_count, group_count])

        self.query(tournament_id, """
            CREATE TABLE IF NOT EXISTS groups (
            id   TEXT PRIMARY KEY,
            name TEXT)""")

        for group_id, group_name in groups.items():
            self.query(tournament_id, """INSERT INTO groups (id, name) VALUES (?, ?)""", 
                [group_id, group_name])

        self.query(tournament_id, """
            CREATE TABLE IF NOT EXISTS teams (
            id       TEXT PRIMARY KEY,
            name     TEXT,
            group_id TEXT)""")

        for team_id, (team_name, group_id) in teams.items():
            self.query(tournament_id, """INSERT INTO teams (id, name, group_id) VALUES (?, ?, ?)""",
                [team_id, team_name, group_id])

        self.query(tournament_id, """
            CREATE TABLE IF NOT EXISTS fields (
            id   TEXT PRIMARY KEY,
            name TEXT)""")

        for field_id, field_name in fields.items():
            self.query(tournament_id, """INSERT INTO fields (id, name) VALUES (?, ?)""",
                [field_id, field_name])

        self.query(tournament_id, """CREATE TABLE IF NOT EXISTS games (
            id       TEXT PRIMARY KEY,
            field_id TEXT,
            team1    TEXT,
            team2    TEXT,
            ref      TEXT,
            time     TEXT,
            score1   INTEGER,
            score2   INTEGER)""")

        for game_id, game_data in games.items():
            self.query(tournament_id, """
                INSERT INTO games 
                (id, field_id, team1, team2, ref, time, score1, score2)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)""", 
                [game_id, *game_data])

        return True

    def get_config(self, tournament_id: str) -> list|bool|None:
        """Returns the config of a tournament."""

        return self.query(tournament_id, "SELECT * FROM config")

    def get_games_from_field(self, tournament_id: str, field_id: str) -> list|bool|None:
        """Returns games for a specific field."""

        return self.query(tournament_id, "SELECT * FROM games WHERE field_id IS ?", [field_id])

    def get_game_score(self, tournament_id: str, game_id: str) -> list|bool|None:
        """Returns the score for a specific game."""
        
        return self.query(tournament_id, "SELECT score1, score2 FROM games WHERE id IS ?", [game_id])

    def set_game_score(self, tournament_id: str, game_id: str, score: list[int]) -> bool:
        """Updates the score of a game and returns whether it was successful."""

        return self.query(tournament_id, "UPDATE games SET score1 = ?, score2 = ? WHERE id = ?", [score[0], score[1], game_id]) is True

    def get_teams(self, tournament_id: str) -> list|bool|None:
        """Returns number of teams per group."""

        return self.query(tournament_id, "SELECT group_id, COUNT(*) AS team_count FROM teams GROUP BY group_id")

    def get_fields(self, tournament_id: str) -> list|bool|None:
        """Returns all unique field IDs."""

        return self.query(tournament_id, "SELECT DISTINCT field_id FROM games")