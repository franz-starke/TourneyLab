import os
import string
import secrets
import datetime
from database import *
from data.utils import *

class Server:
    def __init__(self):
        self.database = Database()
        self.max_calls = 5
        self.time_window = 60 # seconds
        self.time_diff = self.time_window/self.max_calls
        self.last_created = 0.0

    def create_tournament(self, name: str, date: str, teams: dict, games: dict) -> str|Error:
        """
        Creates a new tournament and stores it in a database. A new tournament can only be created every 12 seconds to prevent spamming the database.

        Args:
            name (str): The name of the tournament. 
            date (str): The date of the tournament.
            teams (dict): A dictionary representing the groups of teams. 
                Keys are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number of teams in each group.
            games (dict): A dictionary representing the game schedule. 
                Keys are field IDs, and values are dictionaries where each key is a game ID and the value is a list with match details: [team1_id, team2_id, referee_team_id, game_time].

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

        # Timeout requests that are to fast
        current_time = datetime.datetime.now().timestamp()

        # Return an error when function was called in timeout interval
        if current_time - self.last_created <= self.time_diff:
            return Error(400, "You are creating tournaments too fast.")

        self.last_created = current_time

        uuid = self.generate_unique_string()

        if type(uuid) != str:
            return Error(500, "Could not create new unique ID in maximal iterations. Possibly all tournament ID slots are filled with content.")

        # Create the tournament database file
        try:
            open(os.path.join(DATABASE_PATH, f"{uuid}.db"), "w+")
        except Exception as e:
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
        except Exception as e:
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
                        games[field][game][3],
                        0,
                        0
                    ]
        except Exception as e:
            return Error(500, "An error occurred while preparing playing games data.")
        
        # Save tournament to database
        result = self.database.create_tournament(uuid, name, date, len(fields), team_count, group_count, fields, team_data, group_data, playing_games)

        if result == None:
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
                    if config_data != None and type(config_data) == list:
                        data = config_data[0]
                        return_data.append({
                            "id": data[0],
                            "name": data[1],
                            "date": data[2]
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

            if type(field_data) != list or field_data == None or len(field_data) == 0:
                return Error(400, "There are no games associated with this field.")

            # Loop through each game and collect the required information
            for game in field_data:
                return_data.append({
                    "id": game[0],
                    "time": game[5],
                    "score": [game[6], game[7]]
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

            if type(score_data) != list or score_data == None or len(score_data) == 0:
                return Error(400, "Cannot get a score from the specified game.")

            data = score_data[0]
            return_data = [*data]

        except Exception as e:
            return Error(500, "An error occurred while retrieving the game score.")

        return return_data


    def set_game_score(self, tournament_id: str, game_id: str, score: list) -> bool|Error:
        """
        Sets the score for a specific game in a tournament.

        Args:
            tournament_id (str): The unique ID of the tournament.
            game_id (str): The ID of the game whose score is to be updated.
            score (list): A list of scores for the game [team1_score, team2_score].

        Returns:
            bool: True if the score was successfully updated, False otherwise.
        """

        try:
            # Attempt to update the score in the database
            result = self.database.set_game_score(tournament_id, game_id, score)
            if not result:
                return Error(400, "Cannot set new score for the specified game.")

        except Exception as e:
            return Error(500, "Cannot set new score for the specified game.")

        return True


    def get_tournament_details(self, tournament_id: str) -> dict|Error:
        """
        Retrieves the detailed information of a specified tournament.

        Args:
            tournament_id (str): The unique ID of the tournament.

        Returns:
            dict: A dictionary containing:
                - "name": The name of the tournament.
                - "teams": A list of teams participating in the tournament.
                - "games": A list of games scheduled in the tournament.
                - "date": The date of the tournament.
        """

        try:
            # Fetch config data from the database
            config_data = self.database.get_config(tournament_id)
            if type(config_data) != list or config_data == None or len(config_data) == 0:
                return Error(400, "Cannot fetch information from this tournament.")

            data = config_data[0]
            name = data[1]
            date = data[5]

            # Fetch all groups with their team sizes
            team_data = self.database.get_teams(tournament_id)
            if type(team_data) != list or team_data == None or len(team_data) == 0:
                return Error(400, "Cannot fetch team information from this tournament.")
            
            teams = {}
            for i,team_id in enumerate(team_data):
                teams[team_id[0]] = team_data[i][1]
            
            # Fetch all fields with their games
            game_data = self.database.get_games(tournament_id)
            if type(game_data) != list or game_data == None or len(game_data) == 0:
                return Error(400, "Cannot fetch game information from this tournament.")
                
        except Exception as e:
            return Error(500, "Error while retrieving tournament details.")

        return {
            "name": name,
            "date": date,
            "teams": teams,
            "games": game_data
        }


    def generate_unique_string(self) -> str|None:
        """
        Generates a unique 8-character alphanumeric string that is not currently used as a filename in the specified database path.

        Returns:
            str: A unique 8-character string if successfully generated.
            None: If all possible unique IDs are exhausted.
        """

        length = 8
        characters = string.ascii_letters + string.digits
        max_iterations = len(characters) ** length
        iteration = 0
        used_uuids = set()

        # Get all existing UUIDs from database files
        try:
            files = os.listdir(DATABASE_PATH)
            for file in files:
                if file.endswith(".db") and len(file) == length+3:
                    used_uuids.add(file[:-3])  # Remove the ".db" extension
        except Exception as e:
            return None

        # Generate unique UUID
        while iteration < max_iterations:
            new_uuid = ""
            for i in range(length):
                new_uuid += secrets.choice(characters)

            if new_uuid not in used_uuids:
                return new_uuid
            
            iteration += 1

        # If all possible iterations are exhausted
        return None