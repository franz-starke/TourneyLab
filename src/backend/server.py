import os
import string
import secrets
from database import *
from data.utils import *

class Server:
    def __init__(self):
        self.database = Database()


    def create_tournament(self, name: str, teams: dict, games: dict, date: str) -> str|Error:
        """
        Creates a new tournament and stores it in a database.

        Args:
            name (str): The name of the tournament. 
            teams (dict): A dictionary representing the groups of teams. 
                Keys are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number of teams in each group.
            games (dict): A dictionary representing the game schedule. 
                Keys are field IDs, and values are dictionaries where each key is a game ID and the value is a list with match details: [team1_id, team2_id, game_time].
            date (str): The date of the tournament.

        Returns:
            str: The unique identifier (UUID) of the newly created tournament if successful.
            Error: An Error object if the tournament creation fails at any step.

        Raises:
            Error: If:
            - A unique ID could not be generated.
            - Database file creation fails.
            - Team data preparation encounters an issue.
            - Game data preparation encounters an issue.
            - Tournament database insertion fails.
        """

        uuid = self.generate_unique_string()

        if type(uuid) != str:
            return Error(500, "Could not create new unique ID in maximal iterations. Possibly all tournament ID slots are filled with content.")

        # Create the tournament database file
        try:
            open(os.path.join(DATABASE_PATH, f"{uuid}.db"), "w+")
        except Exception:
            return Error(500, "An error occurred while creating a new tournament database file.")

        # Prepare game fields
        fields = {}
        for field in games:
            fields[str(field)] = f"Feld {field}"

        # Prepare group data
        group_count = len(teams)
        group_data = {"1": "Fun"}
        if group_count != 1:
            group_data["2"] = "Schwitzer"

        # Prepare team data
        try:
            team_count = sum(teams.values())
            team_data = {}
            for i in range(team_count):
                team_id = str(i + 1)
                if group_count != 1 and i < teams["1"]:
                    team_data[team_id] = [f"Fun {team_id}", 1]
                else:
                    schwitzer_id = int(team_id) - teams["1"]
                    team_data[team_id] = [f"Schwitzer {schwitzer_id}", 2]
        except Exception:
            return Error(500, "An error occurred while preparing team data.")

        # Prepare playing games data
        try:
            playing_games = {}
            for field in games:
                for game in games[str(field)]:
                    playing_games[game] = [
                        field,
                        games[field][game][0],
                        games[field][game][1],
                        games[field][game][2],
                        0,
                        0
                    ]
        except Exception:
            return Error(500, "An error occurred while preparing playing games data.")

        # Save tournament to database
        result = self.database.create_tournament(
            uuid, name, len(fields), team_count, group_count, fields, team_data, group_data, playing_games, date
        )

        if not result:
            return Error(500, "An error occurred while saving the tournament to the database.")

        return uuid


    def get_tournaments(self) -> list|Error:
        """
        Retrieves the configuration data for all tournaments stored in the database path.

        Returns:
            (list): A list of dictionaries containing:
            - "id": The UUID of the tournament.
            - "name": The name of the tournament.
            - "date": The date of the tournament.
        """

        return_data = []

        try:
            # List all files in the database path
            for file in os.listdir(DATABASE_PATH):

                # Check if the file is a valid database file (ends with .db and has 8-character UUID)
                if file.endswith(".db") and len(file) == 11:
                    uuid = file[:-3]  # Remove the ".db" extension
                    config_data = self.database.get_config(uuid)

                    # Only add to the list if config data is valid and not empty
                    if config_data:
                        data = config_data[0]
                        return_data.append({
                            "id": data[0],
                            "name": data[1],
                            "date": data[5]
                        })

        except Exception as e:
            return Error(500, "An error occurred while retrieving tournament data.")

        return return_data


    def get_games_from_field(self, tournament_id: str, field_id: str) -> list|Error:
        """
        Retrieves all games associated with a specific field.

        Args:
            tournament_id (str): The unique ID of the tournament.
            field_id (str): The ID of the field from which to retrieve games.

        Returns:
            (list): A list of dictionaries, each containing:
                - "id": The game ID.
                - "score": A list of scores for the game [team1_score, team2_score].
                - "time": The start time of the game.
        """
        
        return_data = []

        try:
            # Fetch the games associated with the specified field from the database
            field_data = self.database.get_games_from_field(tournament_id, field_id)

            if not field_data or not field_data[0]:
                return Error(400, "There are no games associated with this field.")

            # Loop through each game and collect the required information
            for game in field_data[0]:
                return_data.append({
                    "id": game[0],
                    "score": [game[5], game[6]],
                    "time": game[7]
                })

        except Exception as e:
            return Error(500, "An error occurred while retrieving field data.")

        return return_data


    def get_game_score(self,tournament_id: str, game_id: str) -> list|Error:
        """
        Retrieves the score from the specified game.

        Args:
            tournament_id (str): The unique ID of the tournament.
            game_id (str): The ID of the game from which to retrieve the score.

        Returns:
            (list): A list of scores for the game [team1_score, team2_score].
        """

        return_data = []

        try:
            # Fetch the games associated with the specified field from the database
            score_data = self.database.get_game_score(tournament_id,game_id)

            if not score_data or not score_data[0]:
                return Error(400, "Cannot get a score from the specified game.")

            data = score_data[0]
            return_data = [*data]

        except Exception as e:
            return Error(500, "An error occurred while retrieving the game score.")

        return return_data


        """
        Documentation here
        """

        data = self.database.set_game_score(tournament_id,game_id,score)
        return True

    def generate_unique_string(self):
        length = 8
        characters = string.ascii_letters + string.digits
        max_iterations = len(characters)**8
        iteration = 0
        used_uuids = []
        files = os.listdir(DATABASE_PATH)
        
        for file in files.copy():
            if file.endswith(".db") and len(file) == 11:
                used_uuids.append(file.replace(".db",""))
        
        while True:
            if iteration >= max_iterations:
                return
            
            new_uuid = ""
            for i in range(length):
                new_uuid += secrets.choice(characters)

            if new_uuid not in used_uuids:
                return new_uuid


    def get_tournament_details(self, tournament_id: str):
        teams = self.database.get_teams(tournament_id)
        date = self.database.get_date(tournament_id)
        games = self.database.get_games(tournament_id)
        name = self.database.get_tournament_name(tournament_id)
        return {
        "name": name,
        "teams": teams,
        "games": games,
        "date": date
    }