## API Documentation

  * Server
    * database
    * max_calls
    * time_window
    * time_diff
    * last_created
    * create_tournament
    * get_tournaments
    * get_games_from_field
    * get_game_score
    * set_game_score
    * get_tournament_details
    * generate_unique_string

[ built with pdoc![pdoc
logo](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20role%3D%22img%22%20aria-
label%3D%22pdoc%20logo%22%20width%3D%22300%22%20height%3D%22150%22%20viewBox%3D%22-1%200%2060%2030%22%3E%3Ctitle%3Epdoc%3C/title%3E%3Cpath%20d%3D%22M29.621%2021.293c-.011-.273-.214-.475-.511-.481a.5.5%200%200%200-.489.503l-.044%201.393c-.097.551-.695%201.215-1.566%201.704-.577.428-1.306.486-2.193.182-1.426-.617-2.467-1.654-3.304-2.487l-.173-.172a3.43%203.43%200%200%200-.365-.306.49.49%200%200%200-.286-.196c-1.718-1.06-4.931-1.47-7.353.191l-.219.15c-1.707%201.187-3.413%202.131-4.328%201.03-.02-.027-.49-.685-.141-1.763.233-.721.546-2.408.772-4.076.042-.09.067-.187.046-.288.166-1.347.277-2.625.241-3.351%201.378-1.008%202.271-2.586%202.271-4.362%200-.976-.272-1.935-.788-2.774-.057-.094-.122-.18-.184-.268.033-.167.052-.339.052-.516%200-1.477-1.202-2.679-2.679-2.679-.791%200-1.496.352-1.987.9a6.3%206.3%200%200%200-1.001.029c-.492-.564-1.207-.929-2.012-.929-1.477%200-2.679%201.202-2.679%202.679A2.65%202.65%200%200%200%20.97%206.554c-.383.747-.595%201.572-.595%202.41%200%202.311%201.507%204.29%203.635%205.107-.037.699-.147%202.27-.423%203.294l-.137.461c-.622%202.042-2.515%208.257%201.727%2010.643%201.614.908%203.06%201.248%204.317%201.248%202.665%200%204.492-1.524%205.322-2.401%201.476-1.559%202.886-1.854%206.491.82%201.877%201.393%203.514%201.753%204.861%201.068%202.223-1.713%202.811-3.867%203.399-6.374.077-.846.056-1.469.054-1.537zm-4.835%204.313c-.054.305-.156.586-.242.629-.034-.007-.131-.022-.307-.157-.145-.111-.314-.478-.456-.908.221.121.432.25.675.355.115.039.219.051.33.081zm-2.251-1.238c-.05.33-.158.648-.252.694-.022.001-.125-.018-.307-.157-.217-.166-.488-.906-.639-1.573.358.344.754.693%201.198%201.036zm-3.887-2.337c-.006-.116-.018-.231-.041-.342.635.145%201.189.368%201.599.625.097.231.166.481.174.642-.03.049-.055.101-.067.158-.046.013-.128.026-.298.004-.278-.037-.901-.57-1.367-1.087zm-1.127-.497c.116.306.176.625.12.71-.019.014-.117.045-.345.016-.206-.027-.604-.332-.986-.695.41-.051.816-.056%201.211-.031zm-4.535%201.535c.209.22.379.47.358.598-.006.041-.088.138-.351.234-.144.055-.539-.063-.979-.259a11.66%2011.66%200%200%200%20.972-.573zm.983-.664c.359-.237.738-.418%201.126-.554.25.237.479.548.457.694-.006.042-.087.138-.351.235-.174.064-.694-.105-1.232-.375zm-3.381%201.794c-.022.145-.061.29-.149.401-.133.166-.358.248-.69.251h-.002c-.133%200-.306-.26-.45-.621.417.091.854.07%201.291-.031zm-2.066-8.077a4.78%204.78%200%200%201-.775-.584c.172-.115.505-.254.88-.378l-.105.962zm-.331%202.302a10.32%2010.32%200%200%201-.828-.502c.202-.143.576-.328.984-.49l-.156.992zm-.45%202.157l-.701-.403c.214-.115.536-.249.891-.376a11.57%2011.57%200%200%201-.19.779zm-.181%201.716c.064.398.194.702.298.893-.194-.051-.435-.162-.736-.398.061-.119.224-.3.438-.495zM8.87%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zm-.735-.389a1.15%201.15%200%200%200-.314.783%201.16%201.16%200%200%200%201.162%201.162c.457%200%20.842-.27%201.032-.653.026.117.042.238.042.362a1.68%201.68%200%200%201-1.679%201.679%201.68%201.68%200%200%201-1.679-1.679c0-.843.626-1.535%201.436-1.654zM5.059%205.406A1.68%201.68%200%200%201%203.38%207.085a1.68%201.68%200%200%201-1.679-1.679c0-.037.009-.072.011-.109.21.3.541.508.935.508a1.16%201.16%200%200%200%201.162-1.162%201.14%201.14%200%200%200-.474-.912c.015%200%20.03-.005.045-.005.926.001%201.679.754%201.679%201.68zM3.198%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zM1.375%208.964c0-.52.103-1.035.288-1.52.466.394%201.06.64%201.717.64%201.144%200%202.116-.725%202.499-1.738.383%201.012%201.355%201.738%202.499%201.738.867%200%201.631-.421%202.121-1.062.307.605.478%201.267.478%201.942%200%202.486-2.153%204.51-4.801%204.51s-4.801-2.023-4.801-4.51zm24.342%2019.349c-.985.498-2.267.168-3.813-.979-3.073-2.281-5.453-3.199-7.813-.705-1.315%201.391-4.163%203.365-8.423.97-3.174-1.786-2.239-6.266-1.261-9.479l.146-.492c.276-1.02.395-2.457.444-3.268a6.11%206.11%200%200%200%201.18.115%206.01%206.01%200%200%200%202.536-.562l-.006.175c-.802.215-1.848.612-2.021%201.25-.079.295.021.601.274.837.219.203.415.364.598.501-.667.304-1.243.698-1.311%201.179-.02.144-.022.507.393.787.213.144.395.26.564.365-1.285.521-1.361.96-1.381%201.126-.018.142-.011.496.427.746l.854.489c-.473.389-.971.914-.999%201.429-.018.278.095.532.316.713.675.556%201.231.721%201.653.721.059%200%20.104-.014.158-.02.207.707.641%201.64%201.513%201.64h.013c.8-.008%201.236-.345%201.462-.626.173-.216.268-.457.325-.692.424.195.93.374%201.372.374.151%200%20.294-.021.423-.068.732-.27.944-.704.993-1.021.009-.061.003-.119.002-.179.266.086.538.147.789.147.15%200%20.294-.021.423-.069.542-.2.797-.489.914-.754.237.147.478.258.704.288.106.014.205.021.296.021.356%200%20.595-.101.767-.229.438.435%201.094.992%201.656%201.067.106.014.205.021.296.021a1.56%201.56%200%200%200%20.323-.035c.17.575.453%201.289.866%201.605.358.273.665.362.914.362a.99.99%200%200%200%20.421-.093%201.03%201.03%200%200%200%20.245-.164c.168.428.39.846.68%201.068.358.273.665.362.913.362a.99.99%200%200%200%20.421-.093c.317-.148.512-.448.639-.762.251.157.495.257.726.257.127%200%20.25-.024.37-.071.427-.17.706-.617.841-1.314.022-.015.047-.022.068-.038.067-.051.133-.104.196-.159-.443%201.486-1.107%202.761-2.086%203.257zM8.66%209.925a.5.5%200%201%200-1%200c0%20.653-.818%201.205-1.787%201.205s-1.787-.552-1.787-1.205a.5.5%200%201%200-1%200c0%201.216%201.25%202.205%202.787%202.205s2.787-.989%202.787-2.205zm4.4%2015.965l-.208.097c-2.661%201.258-4.708%201.436-6.086.527-1.542-1.017-1.88-3.19-1.844-4.198a.4.4%200%200%200-.385-.414c-.242-.029-.406.164-.414.385-.046%201.249.367%203.686%202.202%204.896.708.467%201.547.7%202.51.7%201.248%200%202.706-.392%204.362-1.174l.185-.086a.4.4%200%200%200%20.205-.527c-.089-.204-.326-.291-.527-.206zM9.547%202.292c.093.077.205.114.317.114a.5.5%200%200%200%20.318-.886L8.817.397a.5.5%200%200%200-.703.068.5.5%200%200%200%20.069.703l1.364%201.124zm-7.661-.065c.086%200%20.173-.022.253-.068l1.523-.893a.5.5%200%200%200-.506-.863l-1.523.892a.5.5%200%200%200-.179.685c.094.158.261.247.432.247z%22%20transform%3D%22matrix%28-1%200%200%201%2058%200%29%22%20fill%3D%22%233bb300%22/%3E%3Cpath%20d%3D%22M.3%2021.86V10.18q0-.46.02-.68.04-.22.18-.5.28-.54%201.34-.54%201.06%200%201.42.28.38.26.44.78.76-1.04%202.38-1.04%201.64%200%203.1%201.54%201.46%201.54%201.46%203.58%200%202.04-1.46%203.58-1.44%201.54-3.08%201.54-1.64%200-2.38-.92v4.04q0%20.46-.04.68-.02.22-.18.5-.14.3-.5.42-.36.12-.98.12-.62%200-1-.12-.36-.12-.52-.4-.14-.28-.18-.5-.02-.22-.02-.68zm3.96-9.42q-.46.54-.46%201.18%200%20.64.46%201.18.48.52%201.2.52.74%200%201.24-.52.52-.52.52-1.18%200-.66-.48-1.18-.48-.54-1.26-.54-.76%200-1.22.54zm14.741-8.36q.16-.3.54-.42.38-.12%201-.12.64%200%201.02.12.38.12.52.42.16.3.18.54.04.22.04.68v11.94q0%20.46-.04.7-.02.22-.18.5-.3.54-1.7.54-1.38%200-1.54-.98-.84.96-2.34.96-1.8%200-3.28-1.56-1.48-1.58-1.48-3.66%200-2.1%201.48-3.68%201.5-1.58%203.28-1.58%201.48%200%202.3%201v-4.2q0-.46.02-.68.04-.24.18-.52zm-3.24%2010.86q.52.54%201.26.54.74%200%201.22-.54.5-.54.5-1.18%200-.66-.48-1.22-.46-.56-1.26-.56-.8%200-1.28.56-.48.54-.48%201.2%200%20.66.52%201.2zm7.833-1.2q0-2.4%201.68-3.96%201.68-1.56%203.84-1.56%202.16%200%203.82%201.56%201.66%201.54%201.66%203.94%200%201.66-.86%202.96-.86%201.28-2.1%201.9-1.22.6-2.54.6-1.32%200-2.56-.64-1.24-.66-2.1-1.92-.84-1.28-.84-2.88zm4.18%201.44q.64.48%201.3.48.66%200%201.32-.5.66-.5.66-1.48%200-.98-.62-1.46-.62-.48-1.34-.48-.72%200-1.34.5-.62.5-.62%201.48%200%20.96.64%201.46zm11.412-1.44q0%20.84.56%201.32.56.46%201.18.46.64%200%201.18-.36.56-.38.9-.38.6%200%201.46%201.06.46.58.46%201.04%200%20.76-1.1%201.42-1.14.8-2.8.8-1.86%200-3.58-1.34-.82-.64-1.34-1.7-.52-1.08-.52-2.36%200-1.3.52-2.34.52-1.06%201.34-1.7%201.66-1.32%203.54-1.32.76%200%201.48.22.72.2%201.06.4l.32.2q.36.24.56.38.52.4.52.92%200%20.5-.42%201.14-.72%201.1-1.38%201.1-.38%200-1.08-.44-.36-.34-1.04-.34-.66%200-1.24.48-.58.48-.58%201.34z%22%20fill%3D%22green%22/%3E%3C/svg%3E)
](https://pdoc.dev "pdoc: Python API documentation generator")

#  server

View Source

    
    
      1import os
      2import string
      3import secrets
      4import datetime
      5from database import Database
      6from typing import Union, Dict, List, Optional, Any
      7import data.utils as utils
      8
      9
     10class Server:
     11    def __init__(self):
     12        self.database = Database()
     13        self.max_calls = 5
     14        self.time_window = 60  # seconds
     15        self.time_diff = self.time_window/self.max_calls
     16        self.last_created = 0.0
     17
     18        utils.LOGGER.info("Created server")
     19
     20    def _check_database_result(self, result, error_message, log_message=None):
     21        """Helper method to check database results and return appropriate Error objects"""
     22        if result is None or (isinstance(result, list) and len(result) == 0):
     23            if log_message:
     24                utils.LOGGER.error(log_message)
     25            return utils.Error(400, error_message)
     26        return None
     27
     28    def _check_rate_limit(self) -> utils.Error | None:
     29        """Check if requests are coming too fast and apply rate limiting"""
     30        current_time = datetime.datetime.now().timestamp()
     31        if current_time - self.last_created <= self.time_diff:
     32            utils.LOGGER.warning("Creating tournaments too fast.")
     33            return utils.Error(400, "You are creating tournaments too fast.")
     34
     35        self.last_created = current_time
     36        return None
     37
     38    def create_tournament(self, name: str, date: str, teams: dict, games: dict, matchpoint: int) -> Union[str, utils.Error]:
     39        """
     40        Creates a new tournament and stores it in a database. A new tournament can only be created every 12 seconds to prevent spamming the database.
     41
     42        Args:
     43            name (str): The name of the tournament.
     44            date (str): The date of the tournament.
     45            teams (dict): A dictionary representing the groups of teams.
     46                Keys are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number of teams in each group.
     47            games (dict): A dictionary representing the game schedule.
     48                Keys are field IDs, and values are dictionaries where each key is a game ID and the value is a list with match details: [team1_id, team2_id, referee_team_id, game_time].
     49            matchpoint (int): The number of points a team needs to win a match.
     50
     51        Returns:
     52            str: The unique identifier (UUID) of the newly created tournament if successful.
     53            Error: An Error object if the tournament creation fails at any step.
     54
     55        Raises:
     56            Error: If:
     57            - A unique ID could not be generated.
     58            - Database file creation fails.
     59            - Team data preparation encounters an issue.
     60            - Game data preparation encounters an issue.
     61            - Tournament database insertion fails.
     62        """
     63
     64        # Timeout requests that are to fast
     65        current_time = datetime.datetime.now().timestamp()
     66
     67        # Return an error when function was called in timeout interval
     68        if current_time - self.last_created <= self.time_diff:
     69            utils.LOGGER.warning("Creating tournaments to fast.")
     70            return utils.Error(400, "You are creating tournaments too fast.")
     71
     72        self.last_created = current_time
     73
     74        uuid = self.generate_unique_string()
     75
     76        if type(uuid) is not str:
     77            return utils.Error(500, "Could not create new unique ID in maximal iterations. Possibly all tournament ID slots are filled with content.")
     78
     79        # Create the tournament database file
     80        try:
     81            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
     82            open(os.path.join(utils.DATABASE_PATH, f"{uuid}.db"), "w+")
     83        except Exception:
     84            utils.LOGGER.error("Error while creating new database file.")
     85            return utils.Error(500, "An error occurred while creating a new tournament database file.")
     86
     87        # Prepare game fields
     88        fields = {}
     89        for field in games:
     90            fields[str(field)] = f"Feld {field}"
     91
     92        # Prepare group data
     93        group_count = len(teams)
     94        group_data = {"1": "Fun"}
     95        if group_count != 1:
     96            group_data["2"] = "Schwitzer"
     97
     98        # Prepare team data
     99        try:
    100            team_count = sum(teams.values())
    101            team_data = {}
    102            for i in range(team_count):
    103                team_id = str(i + 1)
    104                if group_count == 1 or i < teams["1"]:
    105                    team_data[team_id] = [f"Fun {team_id}", 1]
    106                else:
    107                    schwitzer_id = int(team_id) - teams["1"]
    108                    team_data[team_id] = [f"Schwitzer {schwitzer_id}", 2]
    109        except Exception:
    110            utils.LOGGER.error("Error while preparing team data.")
    111            return utils.Error(500, "An error occurred while preparing team data.")
    112
    113        # Prepare playing games data
    114        try:
    115            playing_games = {}
    116            for field in games:
    117                for game in games[str(field)]:
    118                    playing_games[game] = [
    119                        field,
    120                        games[field][game][0],
    121                        games[field][game][1],
    122                        games[field][game][2],
    123                        games[field][game][3],
    124                        0,
    125                        0
    126                    ]
    127        except Exception:
    128            utils.LOGGER.error("Error while preparing playing games data.")
    129            return utils.Error(500, "An error occurred while preparing playing games data.")
    130
    131        # Save tournament to database
    132        result = self.database.create_tournament(uuid, name, date, len(
    133            fields), team_count, group_count, fields, team_data, group_data, playing_games, matchpoint)
    134
    135        if result is None:
    136            return utils.Error(500, "An error occurred while saving the tournament to the database.")
    137
    138        return uuid
    139
    140    def get_tournaments(self) -> Union[List, utils.Error]:
    141        """
    142        Retrieves the configuration data for all tournaments stored in the database path.
    143
    144        Returns:
    145            (list): A list of dictionaries containing:
    146            - "id": The UUID of the tournament.
    147            - "name": The name of the tournament.
    148            - "date": The date of the tournament.
    149        """
    150
    151        return_data = []
    152
    153        try:
    154            # List all files in the database path
    155            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    156            for file in os.listdir(utils.DATABASE_PATH):
    157
    158                # Check if the file is a valid database file (ends with .db and has 8-character UUID)
    159                if file.endswith(".db") and len(file) == 11:
    160                    uuid = file[:-3]  # Remove the ".db" extension
    161                    config_data = self.database.get_config(uuid)
    162
    163                    # Only add to the list if config data is valid and not empty
    164                    if config_data is not None and isinstance(config_data, list):
    165                        data = config_data[0]
    166                        return_data.append({
    167                            "id": data[0],
    168                            "name": data[1],
    169                            "date": data[2]
    170                        })
    171
    172        except Exception:
    173            utils.LOGGER.error("Error while retrieving tournament data.")
    174            return utils.Error(500, "An error occurred while retrieving tournament data.")
    175
    176        return return_data
    177
    178    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List[Dict[str, Any]], utils.Error]:
    179        """
    180        Retrieves all games associated with a specific field.
    181
    182        Args:
    183            tournament_id (str): The unique ID of the tournament.
    184            field_id (str): The ID of the field from which to retrieve games.
    185
    186        Returns:
    187            (list): A list of dictionaries, each containing:
    188                - "id": The game ID.
    189                - "score": A list of scores for the game [team1_score, team2_score].
    190                - "time": The start time of the game.
    191        """
    192
    193        return_data = []
    194
    195        try:
    196            # Fetch the games associated with the specified field from the database
    197            field_data = self.database.get_games_from_field(
    198                tournament_id, field_id)
    199
    200            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    201                return utils.Error(400, "There are no games associated with this field.")
    202
    203            # Loop through each game and collect the required information
    204            for game in field_data:
    205                return_data.append({
    206                    "id": game[0],
    207                    "time": game[5],
    208                    "score": [game[6], game[7]]
    209                })
    210
    211        except Exception:
    212            utils.LOGGER.error("Error while retrieving field data.")
    213            return utils.Error(500, "An error occurred while retrieving field data.")
    214
    215        return return_data
    216
    217    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List[int], utils.Error]:
    218        """
    219        Retrieves the score from the specified game.
    220
    221        Args:
    222            tournament_id (str): The unique ID of the tournament.
    223            game_id (str): The ID of the game from which to retrieve the score.
    224
    225        Returns:
    226            (list): A list of scores for the game [team1_score, team2_score].
    227        """
    228
    229        return_data = []
    230
    231        try:
    232            # Fetch the games associated with the specified field from the database
    233            score_data = self.database.get_game_score(tournament_id, game_id)
    234
    235            if not isinstance(score_data, list) or score_data is None or len(score_data) == 0:
    236                return utils.Error(400, "Cannot get a score from the specified game.")
    237
    238            data = score_data[0]
    239            return_data = [*data]
    240
    241        except Exception:
    242            utils.LOGGER.error("Error while retrieving game score.")
    243            return utils.Error(500, "An error occurred while retrieving the game score.")
    244
    245        return return_data
    246
    247    def set_game_score(self, tournament_id: str, game_id: str, score: list) -> Union[bool, utils.Error]:
    248        """
    249        Sets the score for a specific game in a tournament.
    250
    251        Args:
    252            tournament_id (str): The unique ID of the tournament.
    253            game_id (str): The ID of the game whose score is to be updated.
    254            score (list): A list of scores for the game [team1_score, team2_score].
    255
    256        Returns:
    257            bool: True if the score was successfully updated, False otherwise.
    258        """
    259
    260        try:
    261            # Attempt to update the score in the database
    262            result = self.database.set_game_score(
    263                tournament_id, game_id, score)
    264            if not result:
    265                return utils.Error(400, "Cannot set new score for the specified game.")
    266
    267        except Exception:
    268            utils.LOGGER.error("Error while setting new game score.")
    269            return utils.Error(500, "Cannot set new score for the specified game.")
    270
    271        return True
    272
    273    def get_tournament_details(self, tournament_id: str) -> Union[Dict[str, Any], utils.Error]:
    274        """
    275        Retrieves the detailed information of a specified tournament.
    276
    277        Args:
    278            tournament_id (str): The unique ID of the tournament.
    279
    280        Returns:
    281            dict: A dictionary containing:
    282                - "name": The name of the tournament.
    283                - "date": The date of the tournament.
    284                - "teams": A list of teams participating in the tournament.
    285                - "games": A list of games scheduled in the tournament.
    286        """
    287
    288        try:
    289            # Fetch config data from the database
    290            config_data = self.database.get_config(tournament_id)
    291            if not isinstance(config_data, list) or config_data is None or len(config_data) == 0:
    292                return utils.Error(400, "Cannot fetch information from this tournament.")
    293
    294            data = config_data[0]
    295            name = data[1]
    296            date = data[2]
    297            matchpoint = data[6]
    298
    299            # Fetch all groups with their team sizes
    300            team_data = self.database.get_teams(tournament_id)
    301            if not isinstance(team_data, list) or team_data is None or len(team_data) == 0:
    302                return utils.Error(400, "Cannot fetch team information from this tournament.")
    303
    304            teams = {}
    305            for i, team_id in enumerate(team_data):
    306                teams[team_id[0]] = team_data[i][1]
    307
    308            # Fetch all fields
    309            field_data = self.database.get_fields(tournament_id)
    310            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    311                return utils.Error(400, "Cannot fetch game information from this tournament.")
    312
    313            games = {}
    314            for field_id in field_data:
    315                field_id = field_id[0]
    316                games[field_id] = {}
    317
    318                # Fetch all games for every field
    319                game_data = self.database.get_games_from_field(
    320                    tournament_id, field_id)
    321                if not isinstance(game_data, list) or game_data is None or len(game_data) == 0:
    322                    return utils.Error(400, "Cannot fetch game information from fields for this tournament.")
    323
    324                # Created return structure for games
    325                for game in game_data:
    326                    games[field_id][game[0]] = [game[2], game[3],
    327                                                game[4], game[5], [game[6], game[7]]]
    328
    329        except Exception:
    330            utils.LOGGER.error("Error while retrieving tournament details.")
    331            return utils.Error(500, "Error while retrieving tournament details.")
    332
    333        return {
    334            "name": name,
    335            "date": date,
    336            "teams": teams,
    337            "games": games,
    338            "matchpoint": matchpoint
    339        }
    340
    341    def generate_unique_string(self) -> Optional[str]:
    342        """Generate a unique 8-character numeric string for tournament IDs"""
    343        length = 8
    344        characters = string.digits
    345        max_attempts = 100  # Reasonable limit to prevent infinite loops
    346
    347        # Get existing UUIDs
    348        used_uuids = set()
    349        try:
    350            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    351            for file in os.listdir(utils.DATABASE_PATH):
    352                if file.endswith(".db") and len(file) == length+3:
    353                    used_uuids.add(file[:-3])
    354        except Exception:
    355            utils.LOGGER.error("Error while getting already used uuids.")
    356            return None
    357
    358        # Try to generate unique UUID with reasonable attempts
    359        for _ in range(max_attempts):
    360            new_uuid = ''.join(secrets.choice(characters)
    361                               for _ in range(length))
    362            if new_uuid not in used_uuids:
    363                return new_uuid
    364
    365        utils.LOGGER.error(
    366            "Failed to generate unique ID after maximum attempts.")
    367        return None
    

class Server: View Source

    
    
     11class Server:
     12    def __init__(self):
     13        self.database = Database()
     14        self.max_calls = 5
     15        self.time_window = 60  # seconds
     16        self.time_diff = self.time_window/self.max_calls
     17        self.last_created = 0.0
     18
     19        utils.LOGGER.info("Created server")
     20
     21    def _check_database_result(self, result, error_message, log_message=None):
     22        """Helper method to check database results and return appropriate Error objects"""
     23        if result is None or (isinstance(result, list) and len(result) == 0):
     24            if log_message:
     25                utils.LOGGER.error(log_message)
     26            return utils.Error(400, error_message)
     27        return None
     28
     29    def _check_rate_limit(self) -> utils.Error | None:
     30        """Check if requests are coming too fast and apply rate limiting"""
     31        current_time = datetime.datetime.now().timestamp()
     32        if current_time - self.last_created <= self.time_diff:
     33            utils.LOGGER.warning("Creating tournaments too fast.")
     34            return utils.Error(400, "You are creating tournaments too fast.")
     35
     36        self.last_created = current_time
     37        return None
     38
     39    def create_tournament(self, name: str, date: str, teams: dict, games: dict, matchpoint: int) -> Union[str, utils.Error]:
     40        """
     41        Creates a new tournament and stores it in a database. A new tournament can only be created every 12 seconds to prevent spamming the database.
     42
     43        Args:
     44            name (str): The name of the tournament.
     45            date (str): The date of the tournament.
     46            teams (dict): A dictionary representing the groups of teams.
     47                Keys are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number of teams in each group.
     48            games (dict): A dictionary representing the game schedule.
     49                Keys are field IDs, and values are dictionaries where each key is a game ID and the value is a list with match details: [team1_id, team2_id, referee_team_id, game_time].
     50            matchpoint (int): The number of points a team needs to win a match.
     51
     52        Returns:
     53            str: The unique identifier (UUID) of the newly created tournament if successful.
     54            Error: An Error object if the tournament creation fails at any step.
     55
     56        Raises:
     57            Error: If:
     58            - A unique ID could not be generated.
     59            - Database file creation fails.
     60            - Team data preparation encounters an issue.
     61            - Game data preparation encounters an issue.
     62            - Tournament database insertion fails.
     63        """
     64
     65        # Timeout requests that are to fast
     66        current_time = datetime.datetime.now().timestamp()
     67
     68        # Return an error when function was called in timeout interval
     69        if current_time - self.last_created <= self.time_diff:
     70            utils.LOGGER.warning("Creating tournaments to fast.")
     71            return utils.Error(400, "You are creating tournaments too fast.")
     72
     73        self.last_created = current_time
     74
     75        uuid = self.generate_unique_string()
     76
     77        if type(uuid) is not str:
     78            return utils.Error(500, "Could not create new unique ID in maximal iterations. Possibly all tournament ID slots are filled with content.")
     79
     80        # Create the tournament database file
     81        try:
     82            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
     83            open(os.path.join(utils.DATABASE_PATH, f"{uuid}.db"), "w+")
     84        except Exception:
     85            utils.LOGGER.error("Error while creating new database file.")
     86            return utils.Error(500, "An error occurred while creating a new tournament database file.")
     87
     88        # Prepare game fields
     89        fields = {}
     90        for field in games:
     91            fields[str(field)] = f"Feld {field}"
     92
     93        # Prepare group data
     94        group_count = len(teams)
     95        group_data = {"1": "Fun"}
     96        if group_count != 1:
     97            group_data["2"] = "Schwitzer"
     98
     99        # Prepare team data
    100        try:
    101            team_count = sum(teams.values())
    102            team_data = {}
    103            for i in range(team_count):
    104                team_id = str(i + 1)
    105                if group_count == 1 or i < teams["1"]:
    106                    team_data[team_id] = [f"Fun {team_id}", 1]
    107                else:
    108                    schwitzer_id = int(team_id) - teams["1"]
    109                    team_data[team_id] = [f"Schwitzer {schwitzer_id}", 2]
    110        except Exception:
    111            utils.LOGGER.error("Error while preparing team data.")
    112            return utils.Error(500, "An error occurred while preparing team data.")
    113
    114        # Prepare playing games data
    115        try:
    116            playing_games = {}
    117            for field in games:
    118                for game in games[str(field)]:
    119                    playing_games[game] = [
    120                        field,
    121                        games[field][game][0],
    122                        games[field][game][1],
    123                        games[field][game][2],
    124                        games[field][game][3],
    125                        0,
    126                        0
    127                    ]
    128        except Exception:
    129            utils.LOGGER.error("Error while preparing playing games data.")
    130            return utils.Error(500, "An error occurred while preparing playing games data.")
    131
    132        # Save tournament to database
    133        result = self.database.create_tournament(uuid, name, date, len(
    134            fields), team_count, group_count, fields, team_data, group_data, playing_games, matchpoint)
    135
    136        if result is None:
    137            return utils.Error(500, "An error occurred while saving the tournament to the database.")
    138
    139        return uuid
    140
    141    def get_tournaments(self) -> Union[List, utils.Error]:
    142        """
    143        Retrieves the configuration data for all tournaments stored in the database path.
    144
    145        Returns:
    146            (list): A list of dictionaries containing:
    147            - "id": The UUID of the tournament.
    148            - "name": The name of the tournament.
    149            - "date": The date of the tournament.
    150        """
    151
    152        return_data = []
    153
    154        try:
    155            # List all files in the database path
    156            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    157            for file in os.listdir(utils.DATABASE_PATH):
    158
    159                # Check if the file is a valid database file (ends with .db and has 8-character UUID)
    160                if file.endswith(".db") and len(file) == 11:
    161                    uuid = file[:-3]  # Remove the ".db" extension
    162                    config_data = self.database.get_config(uuid)
    163
    164                    # Only add to the list if config data is valid and not empty
    165                    if config_data is not None and isinstance(config_data, list):
    166                        data = config_data[0]
    167                        return_data.append({
    168                            "id": data[0],
    169                            "name": data[1],
    170                            "date": data[2]
    171                        })
    172
    173        except Exception:
    174            utils.LOGGER.error("Error while retrieving tournament data.")
    175            return utils.Error(500, "An error occurred while retrieving tournament data.")
    176
    177        return return_data
    178
    179    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List[Dict[str, Any]], utils.Error]:
    180        """
    181        Retrieves all games associated with a specific field.
    182
    183        Args:
    184            tournament_id (str): The unique ID of the tournament.
    185            field_id (str): The ID of the field from which to retrieve games.
    186
    187        Returns:
    188            (list): A list of dictionaries, each containing:
    189                - "id": The game ID.
    190                - "score": A list of scores for the game [team1_score, team2_score].
    191                - "time": The start time of the game.
    192        """
    193
    194        return_data = []
    195
    196        try:
    197            # Fetch the games associated with the specified field from the database
    198            field_data = self.database.get_games_from_field(
    199                tournament_id, field_id)
    200
    201            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    202                return utils.Error(400, "There are no games associated with this field.")
    203
    204            # Loop through each game and collect the required information
    205            for game in field_data:
    206                return_data.append({
    207                    "id": game[0],
    208                    "time": game[5],
    209                    "score": [game[6], game[7]]
    210                })
    211
    212        except Exception:
    213            utils.LOGGER.error("Error while retrieving field data.")
    214            return utils.Error(500, "An error occurred while retrieving field data.")
    215
    216        return return_data
    217
    218    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List[int], utils.Error]:
    219        """
    220        Retrieves the score from the specified game.
    221
    222        Args:
    223            tournament_id (str): The unique ID of the tournament.
    224            game_id (str): The ID of the game from which to retrieve the score.
    225
    226        Returns:
    227            (list): A list of scores for the game [team1_score, team2_score].
    228        """
    229
    230        return_data = []
    231
    232        try:
    233            # Fetch the games associated with the specified field from the database
    234            score_data = self.database.get_game_score(tournament_id, game_id)
    235
    236            if not isinstance(score_data, list) or score_data is None or len(score_data) == 0:
    237                return utils.Error(400, "Cannot get a score from the specified game.")
    238
    239            data = score_data[0]
    240            return_data = [*data]
    241
    242        except Exception:
    243            utils.LOGGER.error("Error while retrieving game score.")
    244            return utils.Error(500, "An error occurred while retrieving the game score.")
    245
    246        return return_data
    247
    248    def set_game_score(self, tournament_id: str, game_id: str, score: list) -> Union[bool, utils.Error]:
    249        """
    250        Sets the score for a specific game in a tournament.
    251
    252        Args:
    253            tournament_id (str): The unique ID of the tournament.
    254            game_id (str): The ID of the game whose score is to be updated.
    255            score (list): A list of scores for the game [team1_score, team2_score].
    256
    257        Returns:
    258            bool: True if the score was successfully updated, False otherwise.
    259        """
    260
    261        try:
    262            # Attempt to update the score in the database
    263            result = self.database.set_game_score(
    264                tournament_id, game_id, score)
    265            if not result:
    266                return utils.Error(400, "Cannot set new score for the specified game.")
    267
    268        except Exception:
    269            utils.LOGGER.error("Error while setting new game score.")
    270            return utils.Error(500, "Cannot set new score for the specified game.")
    271
    272        return True
    273
    274    def get_tournament_details(self, tournament_id: str) -> Union[Dict[str, Any], utils.Error]:
    275        """
    276        Retrieves the detailed information of a specified tournament.
    277
    278        Args:
    279            tournament_id (str): The unique ID of the tournament.
    280
    281        Returns:
    282            dict: A dictionary containing:
    283                - "name": The name of the tournament.
    284                - "date": The date of the tournament.
    285                - "teams": A list of teams participating in the tournament.
    286                - "games": A list of games scheduled in the tournament.
    287        """
    288
    289        try:
    290            # Fetch config data from the database
    291            config_data = self.database.get_config(tournament_id)
    292            if not isinstance(config_data, list) or config_data is None or len(config_data) == 0:
    293                return utils.Error(400, "Cannot fetch information from this tournament.")
    294
    295            data = config_data[0]
    296            name = data[1]
    297            date = data[2]
    298            matchpoint = data[6]
    299
    300            # Fetch all groups with their team sizes
    301            team_data = self.database.get_teams(tournament_id)
    302            if not isinstance(team_data, list) or team_data is None or len(team_data) == 0:
    303                return utils.Error(400, "Cannot fetch team information from this tournament.")
    304
    305            teams = {}
    306            for i, team_id in enumerate(team_data):
    307                teams[team_id[0]] = team_data[i][1]
    308
    309            # Fetch all fields
    310            field_data = self.database.get_fields(tournament_id)
    311            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    312                return utils.Error(400, "Cannot fetch game information from this tournament.")
    313
    314            games = {}
    315            for field_id in field_data:
    316                field_id = field_id[0]
    317                games[field_id] = {}
    318
    319                # Fetch all games for every field
    320                game_data = self.database.get_games_from_field(
    321                    tournament_id, field_id)
    322                if not isinstance(game_data, list) or game_data is None or len(game_data) == 0:
    323                    return utils.Error(400, "Cannot fetch game information from fields for this tournament.")
    324
    325                # Created return structure for games
    326                for game in game_data:
    327                    games[field_id][game[0]] = [game[2], game[3],
    328                                                game[4], game[5], [game[6], game[7]]]
    329
    330        except Exception:
    331            utils.LOGGER.error("Error while retrieving tournament details.")
    332            return utils.Error(500, "Error while retrieving tournament details.")
    333
    334        return {
    335            "name": name,
    336            "date": date,
    337            "teams": teams,
    338            "games": games,
    339            "matchpoint": matchpoint
    340        }
    341
    342    def generate_unique_string(self) -> Optional[str]:
    343        """Generate a unique 8-character numeric string for tournament IDs"""
    344        length = 8
    345        characters = string.digits
    346        max_attempts = 100  # Reasonable limit to prevent infinite loops
    347
    348        # Get existing UUIDs
    349        used_uuids = set()
    350        try:
    351            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    352            for file in os.listdir(utils.DATABASE_PATH):
    353                if file.endswith(".db") and len(file) == length+3:
    354                    used_uuids.add(file[:-3])
    355        except Exception:
    356            utils.LOGGER.error("Error while getting already used uuids.")
    357            return None
    358
    359        # Try to generate unique UUID with reasonable attempts
    360        for _ in range(max_attempts):
    361            new_uuid = ''.join(secrets.choice(characters)
    362                               for _ in range(length))
    363            if new_uuid not in used_uuids:
    364                return new_uuid
    365
    366        utils.LOGGER.error(
    367            "Failed to generate unique ID after maximum attempts.")
    368        return None
    

database

max_calls

time_window

time_diff

last_created

def create_tournament( self, name: str, date: str, teams: dict, games: dict,
matchpoint: int) -> Union[str, data.utils.Error]: View Source

    
    
     39    def create_tournament(self, name: str, date: str, teams: dict, games: dict, matchpoint: int) -> Union[str, utils.Error]:
     40        """
     41        Creates a new tournament and stores it in a database. A new tournament can only be created every 12 seconds to prevent spamming the database.
     42
     43        Args:
     44            name (str): The name of the tournament.
     45            date (str): The date of the tournament.
     46            teams (dict): A dictionary representing the groups of teams.
     47                Keys are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number of teams in each group.
     48            games (dict): A dictionary representing the game schedule.
     49                Keys are field IDs, and values are dictionaries where each key is a game ID and the value is a list with match details: [team1_id, team2_id, referee_team_id, game_time].
     50            matchpoint (int): The number of points a team needs to win a match.
     51
     52        Returns:
     53            str: The unique identifier (UUID) of the newly created tournament if successful.
     54            Error: An Error object if the tournament creation fails at any step.
     55
     56        Raises:
     57            Error: If:
     58            - A unique ID could not be generated.
     59            - Database file creation fails.
     60            - Team data preparation encounters an issue.
     61            - Game data preparation encounters an issue.
     62            - Tournament database insertion fails.
     63        """
     64
     65        # Timeout requests that are to fast
     66        current_time = datetime.datetime.now().timestamp()
     67
     68        # Return an error when function was called in timeout interval
     69        if current_time - self.last_created <= self.time_diff:
     70            utils.LOGGER.warning("Creating tournaments to fast.")
     71            return utils.Error(400, "You are creating tournaments too fast.")
     72
     73        self.last_created = current_time
     74
     75        uuid = self.generate_unique_string()
     76
     77        if type(uuid) is not str:
     78            return utils.Error(500, "Could not create new unique ID in maximal iterations. Possibly all tournament ID slots are filled with content.")
     79
     80        # Create the tournament database file
     81        try:
     82            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
     83            open(os.path.join(utils.DATABASE_PATH, f"{uuid}.db"), "w+")
     84        except Exception:
     85            utils.LOGGER.error("Error while creating new database file.")
     86            return utils.Error(500, "An error occurred while creating a new tournament database file.")
     87
     88        # Prepare game fields
     89        fields = {}
     90        for field in games:
     91            fields[str(field)] = f"Feld {field}"
     92
     93        # Prepare group data
     94        group_count = len(teams)
     95        group_data = {"1": "Fun"}
     96        if group_count != 1:
     97            group_data["2"] = "Schwitzer"
     98
     99        # Prepare team data
    100        try:
    101            team_count = sum(teams.values())
    102            team_data = {}
    103            for i in range(team_count):
    104                team_id = str(i + 1)
    105                if group_count == 1 or i < teams["1"]:
    106                    team_data[team_id] = [f"Fun {team_id}", 1]
    107                else:
    108                    schwitzer_id = int(team_id) - teams["1"]
    109                    team_data[team_id] = [f"Schwitzer {schwitzer_id}", 2]
    110        except Exception:
    111            utils.LOGGER.error("Error while preparing team data.")
    112            return utils.Error(500, "An error occurred while preparing team data.")
    113
    114        # Prepare playing games data
    115        try:
    116            playing_games = {}
    117            for field in games:
    118                for game in games[str(field)]:
    119                    playing_games[game] = [
    120                        field,
    121                        games[field][game][0],
    122                        games[field][game][1],
    123                        games[field][game][2],
    124                        games[field][game][3],
    125                        0,
    126                        0
    127                    ]
    128        except Exception:
    129            utils.LOGGER.error("Error while preparing playing games data.")
    130            return utils.Error(500, "An error occurred while preparing playing games data.")
    131
    132        # Save tournament to database
    133        result = self.database.create_tournament(uuid, name, date, len(
    134            fields), team_count, group_count, fields, team_data, group_data, playing_games, matchpoint)
    135
    136        if result is None:
    137            return utils.Error(500, "An error occurred while saving the tournament to the database.")
    138
    139        return uuid
    

Creates a new tournament and stores it in a database. A new tournament can
only be created every 12 seconds to prevent spamming the database.

Args: name (str): The name of the tournament. date (str): The date of the
tournament. teams (dict): A dictionary representing the groups of teams. Keys
are group IDs ("1" for "Fun", "2" for "Schwitzer") and values are the number
of teams in each group. games (dict): A dictionary representing the game
schedule. Keys are field IDs, and values are dictionaries where each key is a
game ID and the value is a list with match details: [team1_id, team2_id,
referee_team_id, game_time]. matchpoint (int): The number of points a team
needs to win a match.

Returns: str: The unique identifier (UUID) of the newly created tournament if
successful. Error: An Error object if the tournament creation fails at any
step.

Raises: Error: If: \- A unique ID could not be generated. \- Database file
creation fails. \- Team data preparation encounters an issue. \- Game data
preparation encounters an issue. \- Tournament database insertion fails.

def get_tournaments(self) -> Union[List, data.utils.Error]: View Source

    
    
    141    def get_tournaments(self) -> Union[List, utils.Error]:
    142        """
    143        Retrieves the configuration data for all tournaments stored in the database path.
    144
    145        Returns:
    146            (list): A list of dictionaries containing:
    147            - "id": The UUID of the tournament.
    148            - "name": The name of the tournament.
    149            - "date": The date of the tournament.
    150        """
    151
    152        return_data = []
    153
    154        try:
    155            # List all files in the database path
    156            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    157            for file in os.listdir(utils.DATABASE_PATH):
    158
    159                # Check if the file is a valid database file (ends with .db and has 8-character UUID)
    160                if file.endswith(".db") and len(file) == 11:
    161                    uuid = file[:-3]  # Remove the ".db" extension
    162                    config_data = self.database.get_config(uuid)
    163
    164                    # Only add to the list if config data is valid and not empty
    165                    if config_data is not None and isinstance(config_data, list):
    166                        data = config_data[0]
    167                        return_data.append({
    168                            "id": data[0],
    169                            "name": data[1],
    170                            "date": data[2]
    171                        })
    172
    173        except Exception:
    174            utils.LOGGER.error("Error while retrieving tournament data.")
    175            return utils.Error(500, "An error occurred while retrieving tournament data.")
    176
    177        return return_data
    

Retrieves the configuration data for all tournaments stored in the database
path.

Returns: (list): A list of dictionaries containing: \- "id": The UUID of the
tournament. \- "name": The name of the tournament. \- "date": The date of the
tournament.

def get_games_from_field( self, tournament_id: str, field_id: str) ->
Union[List[Dict[str, Any]], data.utils.Error]: View Source

    
    
    179    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List[Dict[str, Any]], utils.Error]:
    180        """
    181        Retrieves all games associated with a specific field.
    182
    183        Args:
    184            tournament_id (str): The unique ID of the tournament.
    185            field_id (str): The ID of the field from which to retrieve games.
    186
    187        Returns:
    188            (list): A list of dictionaries, each containing:
    189                - "id": The game ID.
    190                - "score": A list of scores for the game [team1_score, team2_score].
    191                - "time": The start time of the game.
    192        """
    193
    194        return_data = []
    195
    196        try:
    197            # Fetch the games associated with the specified field from the database
    198            field_data = self.database.get_games_from_field(
    199                tournament_id, field_id)
    200
    201            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    202                return utils.Error(400, "There are no games associated with this field.")
    203
    204            # Loop through each game and collect the required information
    205            for game in field_data:
    206                return_data.append({
    207                    "id": game[0],
    208                    "time": game[5],
    209                    "score": [game[6], game[7]]
    210                })
    211
    212        except Exception:
    213            utils.LOGGER.error("Error while retrieving field data.")
    214            return utils.Error(500, "An error occurred while retrieving field data.")
    215
    216        return return_data
    

Retrieves all games associated with a specific field.

Args: tournament_id (str): The unique ID of the tournament. field_id (str):
The ID of the field from which to retrieve games.

Returns: (list): A list of dictionaries, each containing: \- "id": The game
ID. \- "score": A list of scores for the game [team1_score, team2_score]. \-
"time": The start time of the game.

def get_game_score( self, tournament_id: str, game_id: str) ->
Union[List[int], data.utils.Error]: View Source

    
    
    218    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List[int], utils.Error]:
    219        """
    220        Retrieves the score from the specified game.
    221
    222        Args:
    223            tournament_id (str): The unique ID of the tournament.
    224            game_id (str): The ID of the game from which to retrieve the score.
    225
    226        Returns:
    227            (list): A list of scores for the game [team1_score, team2_score].
    228        """
    229
    230        return_data = []
    231
    232        try:
    233            # Fetch the games associated with the specified field from the database
    234            score_data = self.database.get_game_score(tournament_id, game_id)
    235
    236            if not isinstance(score_data, list) or score_data is None or len(score_data) == 0:
    237                return utils.Error(400, "Cannot get a score from the specified game.")
    238
    239            data = score_data[0]
    240            return_data = [*data]
    241
    242        except Exception:
    243            utils.LOGGER.error("Error while retrieving game score.")
    244            return utils.Error(500, "An error occurred while retrieving the game score.")
    245
    246        return return_data
    

Retrieves the score from the specified game.

Args: tournament_id (str): The unique ID of the tournament. game_id (str): The
ID of the game from which to retrieve the score.

Returns: (list): A list of scores for the game [team1_score, team2_score].

def set_game_score( self, tournament_id: str, game_id: str, score: list) ->
Union[bool, data.utils.Error]: View Source

    
    
    248    def set_game_score(self, tournament_id: str, game_id: str, score: list) -> Union[bool, utils.Error]:
    249        """
    250        Sets the score for a specific game in a tournament.
    251
    252        Args:
    253            tournament_id (str): The unique ID of the tournament.
    254            game_id (str): The ID of the game whose score is to be updated.
    255            score (list): A list of scores for the game [team1_score, team2_score].
    256
    257        Returns:
    258            bool: True if the score was successfully updated, False otherwise.
    259        """
    260
    261        try:
    262            # Attempt to update the score in the database
    263            result = self.database.set_game_score(
    264                tournament_id, game_id, score)
    265            if not result:
    266                return utils.Error(400, "Cannot set new score for the specified game.")
    267
    268        except Exception:
    269            utils.LOGGER.error("Error while setting new game score.")
    270            return utils.Error(500, "Cannot set new score for the specified game.")
    271
    272        return True
    

Sets the score for a specific game in a tournament.

Args: tournament_id (str): The unique ID of the tournament. game_id (str): The
ID of the game whose score is to be updated. score (list): A list of scores
for the game [team1_score, team2_score].

Returns: bool: True if the score was successfully updated, False otherwise.

def get_tournament_details(self, tournament_id: str) -> Union[Dict[str, Any],
data.utils.Error]: View Source

    
    
    274    def get_tournament_details(self, tournament_id: str) -> Union[Dict[str, Any], utils.Error]:
    275        """
    276        Retrieves the detailed information of a specified tournament.
    277
    278        Args:
    279            tournament_id (str): The unique ID of the tournament.
    280
    281        Returns:
    282            dict: A dictionary containing:
    283                - "name": The name of the tournament.
    284                - "date": The date of the tournament.
    285                - "teams": A list of teams participating in the tournament.
    286                - "games": A list of games scheduled in the tournament.
    287        """
    288
    289        try:
    290            # Fetch config data from the database
    291            config_data = self.database.get_config(tournament_id)
    292            if not isinstance(config_data, list) or config_data is None or len(config_data) == 0:
    293                return utils.Error(400, "Cannot fetch information from this tournament.")
    294
    295            data = config_data[0]
    296            name = data[1]
    297            date = data[2]
    298            matchpoint = data[6]
    299
    300            # Fetch all groups with their team sizes
    301            team_data = self.database.get_teams(tournament_id)
    302            if not isinstance(team_data, list) or team_data is None or len(team_data) == 0:
    303                return utils.Error(400, "Cannot fetch team information from this tournament.")
    304
    305            teams = {}
    306            for i, team_id in enumerate(team_data):
    307                teams[team_id[0]] = team_data[i][1]
    308
    309            # Fetch all fields
    310            field_data = self.database.get_fields(tournament_id)
    311            if not isinstance(field_data, list) or field_data is None or len(field_data) == 0:
    312                return utils.Error(400, "Cannot fetch game information from this tournament.")
    313
    314            games = {}
    315            for field_id in field_data:
    316                field_id = field_id[0]
    317                games[field_id] = {}
    318
    319                # Fetch all games for every field
    320                game_data = self.database.get_games_from_field(
    321                    tournament_id, field_id)
    322                if not isinstance(game_data, list) or game_data is None or len(game_data) == 0:
    323                    return utils.Error(400, "Cannot fetch game information from fields for this tournament.")
    324
    325                # Created return structure for games
    326                for game in game_data:
    327                    games[field_id][game[0]] = [game[2], game[3],
    328                                                game[4], game[5], [game[6], game[7]]]
    329
    330        except Exception:
    331            utils.LOGGER.error("Error while retrieving tournament details.")
    332            return utils.Error(500, "Error while retrieving tournament details.")
    333
    334        return {
    335            "name": name,
    336            "date": date,
    337            "teams": teams,
    338            "games": games,
    339            "matchpoint": matchpoint
    340        }
    

Retrieves the detailed information of a specified tournament.

Args: tournament_id (str): The unique ID of the tournament.

Returns: dict: A dictionary containing: \- "name": The name of the tournament.
\- "date": The date of the tournament. \- "teams": A list of teams
participating in the tournament. \- "games": A list of games scheduled in the
tournament.

def generate_unique_string(self) -> Optional[str]: View Source

    
    
    342    def generate_unique_string(self) -> Optional[str]:
    343        """Generate a unique 8-character numeric string for tournament IDs"""
    344        length = 8
    345        characters = string.digits
    346        max_attempts = 100  # Reasonable limit to prevent infinite loops
    347
    348        # Get existing UUIDs
    349        used_uuids = set()
    350        try:
    351            utils.DATABASE_PATH.mkdir(parents=True, exist_ok=True)
    352            for file in os.listdir(utils.DATABASE_PATH):
    353                if file.endswith(".db") and len(file) == length+3:
    354                    used_uuids.add(file[:-3])
    355        except Exception:
    356            utils.LOGGER.error("Error while getting already used uuids.")
    357            return None
    358
    359        # Try to generate unique UUID with reasonable attempts
    360        for _ in range(max_attempts):
    361            new_uuid = ''.join(secrets.choice(characters)
    362                               for _ in range(length))
    363            if new_uuid not in used_uuids:
    364                return new_uuid
    365
    366        utils.LOGGER.error(
    367            "Failed to generate unique ID after maximum attempts.")
    368        return None
    

Generate a unique 8-character numeric string for tournament IDs

