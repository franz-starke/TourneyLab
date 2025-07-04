## API Documentation

  * Database
    * query
    * create_tournament
    * get_config
    * get_games_from_field
    * get_game_score
    * set_game_score
    * get_teams
    * get_fields

[ built with pdoc![pdoc
logo](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20role%3D%22img%22%20aria-
label%3D%22pdoc%20logo%22%20width%3D%22300%22%20height%3D%22150%22%20viewBox%3D%22-1%200%2060%2030%22%3E%3Ctitle%3Epdoc%3C/title%3E%3Cpath%20d%3D%22M29.621%2021.293c-.011-.273-.214-.475-.511-.481a.5.5%200%200%200-.489.503l-.044%201.393c-.097.551-.695%201.215-1.566%201.704-.577.428-1.306.486-2.193.182-1.426-.617-2.467-1.654-3.304-2.487l-.173-.172a3.43%203.43%200%200%200-.365-.306.49.49%200%200%200-.286-.196c-1.718-1.06-4.931-1.47-7.353.191l-.219.15c-1.707%201.187-3.413%202.131-4.328%201.03-.02-.027-.49-.685-.141-1.763.233-.721.546-2.408.772-4.076.042-.09.067-.187.046-.288.166-1.347.277-2.625.241-3.351%201.378-1.008%202.271-2.586%202.271-4.362%200-.976-.272-1.935-.788-2.774-.057-.094-.122-.18-.184-.268.033-.167.052-.339.052-.516%200-1.477-1.202-2.679-2.679-2.679-.791%200-1.496.352-1.987.9a6.3%206.3%200%200%200-1.001.029c-.492-.564-1.207-.929-2.012-.929-1.477%200-2.679%201.202-2.679%202.679A2.65%202.65%200%200%200%20.97%206.554c-.383.747-.595%201.572-.595%202.41%200%202.311%201.507%204.29%203.635%205.107-.037.699-.147%202.27-.423%203.294l-.137.461c-.622%202.042-2.515%208.257%201.727%2010.643%201.614.908%203.06%201.248%204.317%201.248%202.665%200%204.492-1.524%205.322-2.401%201.476-1.559%202.886-1.854%206.491.82%201.877%201.393%203.514%201.753%204.861%201.068%202.223-1.713%202.811-3.867%203.399-6.374.077-.846.056-1.469.054-1.537zm-4.835%204.313c-.054.305-.156.586-.242.629-.034-.007-.131-.022-.307-.157-.145-.111-.314-.478-.456-.908.221.121.432.25.675.355.115.039.219.051.33.081zm-2.251-1.238c-.05.33-.158.648-.252.694-.022.001-.125-.018-.307-.157-.217-.166-.488-.906-.639-1.573.358.344.754.693%201.198%201.036zm-3.887-2.337c-.006-.116-.018-.231-.041-.342.635.145%201.189.368%201.599.625.097.231.166.481.174.642-.03.049-.055.101-.067.158-.046.013-.128.026-.298.004-.278-.037-.901-.57-1.367-1.087zm-1.127-.497c.116.306.176.625.12.71-.019.014-.117.045-.345.016-.206-.027-.604-.332-.986-.695.41-.051.816-.056%201.211-.031zm-4.535%201.535c.209.22.379.47.358.598-.006.041-.088.138-.351.234-.144.055-.539-.063-.979-.259a11.66%2011.66%200%200%200%20.972-.573zm.983-.664c.359-.237.738-.418%201.126-.554.25.237.479.548.457.694-.006.042-.087.138-.351.235-.174.064-.694-.105-1.232-.375zm-3.381%201.794c-.022.145-.061.29-.149.401-.133.166-.358.248-.69.251h-.002c-.133%200-.306-.26-.45-.621.417.091.854.07%201.291-.031zm-2.066-8.077a4.78%204.78%200%200%201-.775-.584c.172-.115.505-.254.88-.378l-.105.962zm-.331%202.302a10.32%2010.32%200%200%201-.828-.502c.202-.143.576-.328.984-.49l-.156.992zm-.45%202.157l-.701-.403c.214-.115.536-.249.891-.376a11.57%2011.57%200%200%201-.19.779zm-.181%201.716c.064.398.194.702.298.893-.194-.051-.435-.162-.736-.398.061-.119.224-.3.438-.495zM8.87%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zm-.735-.389a1.15%201.15%200%200%200-.314.783%201.16%201.16%200%200%200%201.162%201.162c.457%200%20.842-.27%201.032-.653.026.117.042.238.042.362a1.68%201.68%200%200%201-1.679%201.679%201.68%201.68%200%200%201-1.679-1.679c0-.843.626-1.535%201.436-1.654zM5.059%205.406A1.68%201.68%200%200%201%203.38%207.085a1.68%201.68%200%200%201-1.679-1.679c0-.037.009-.072.011-.109.21.3.541.508.935.508a1.16%201.16%200%200%200%201.162-1.162%201.14%201.14%200%200%200-.474-.912c.015%200%20.03-.005.045-.005.926.001%201.679.754%201.679%201.68zM3.198%204.141c0%20.152-.123.276-.276.276s-.275-.124-.275-.276.123-.276.276-.276.275.124.275.276zM1.375%208.964c0-.52.103-1.035.288-1.52.466.394%201.06.64%201.717.64%201.144%200%202.116-.725%202.499-1.738.383%201.012%201.355%201.738%202.499%201.738.867%200%201.631-.421%202.121-1.062.307.605.478%201.267.478%201.942%200%202.486-2.153%204.51-4.801%204.51s-4.801-2.023-4.801-4.51zm24.342%2019.349c-.985.498-2.267.168-3.813-.979-3.073-2.281-5.453-3.199-7.813-.705-1.315%201.391-4.163%203.365-8.423.97-3.174-1.786-2.239-6.266-1.261-9.479l.146-.492c.276-1.02.395-2.457.444-3.268a6.11%206.11%200%200%200%201.18.115%206.01%206.01%200%200%200%202.536-.562l-.006.175c-.802.215-1.848.612-2.021%201.25-.079.295.021.601.274.837.219.203.415.364.598.501-.667.304-1.243.698-1.311%201.179-.02.144-.022.507.393.787.213.144.395.26.564.365-1.285.521-1.361.96-1.381%201.126-.018.142-.011.496.427.746l.854.489c-.473.389-.971.914-.999%201.429-.018.278.095.532.316.713.675.556%201.231.721%201.653.721.059%200%20.104-.014.158-.02.207.707.641%201.64%201.513%201.64h.013c.8-.008%201.236-.345%201.462-.626.173-.216.268-.457.325-.692.424.195.93.374%201.372.374.151%200%20.294-.021.423-.068.732-.27.944-.704.993-1.021.009-.061.003-.119.002-.179.266.086.538.147.789.147.15%200%20.294-.021.423-.069.542-.2.797-.489.914-.754.237.147.478.258.704.288.106.014.205.021.296.021.356%200%20.595-.101.767-.229.438.435%201.094.992%201.656%201.067.106.014.205.021.296.021a1.56%201.56%200%200%200%20.323-.035c.17.575.453%201.289.866%201.605.358.273.665.362.914.362a.99.99%200%200%200%20.421-.093%201.03%201.03%200%200%200%20.245-.164c.168.428.39.846.68%201.068.358.273.665.362.913.362a.99.99%200%200%200%20.421-.093c.317-.148.512-.448.639-.762.251.157.495.257.726.257.127%200%20.25-.024.37-.071.427-.17.706-.617.841-1.314.022-.015.047-.022.068-.038.067-.051.133-.104.196-.159-.443%201.486-1.107%202.761-2.086%203.257zM8.66%209.925a.5.5%200%201%200-1%200c0%20.653-.818%201.205-1.787%201.205s-1.787-.552-1.787-1.205a.5.5%200%201%200-1%200c0%201.216%201.25%202.205%202.787%202.205s2.787-.989%202.787-2.205zm4.4%2015.965l-.208.097c-2.661%201.258-4.708%201.436-6.086.527-1.542-1.017-1.88-3.19-1.844-4.198a.4.4%200%200%200-.385-.414c-.242-.029-.406.164-.414.385-.046%201.249.367%203.686%202.202%204.896.708.467%201.547.7%202.51.7%201.248%200%202.706-.392%204.362-1.174l.185-.086a.4.4%200%200%200%20.205-.527c-.089-.204-.326-.291-.527-.206zM9.547%202.292c.093.077.205.114.317.114a.5.5%200%200%200%20.318-.886L8.817.397a.5.5%200%200%200-.703.068.5.5%200%200%200%20.069.703l1.364%201.124zm-7.661-.065c.086%200%20.173-.022.253-.068l1.523-.893a.5.5%200%200%200-.506-.863l-1.523.892a.5.5%200%200%200-.179.685c.094.158.261.247.432.247z%22%20transform%3D%22matrix%28-1%200%200%201%2058%200%29%22%20fill%3D%22%233bb300%22/%3E%3Cpath%20d%3D%22M.3%2021.86V10.18q0-.46.02-.68.04-.22.18-.5.28-.54%201.34-.54%201.06%200%201.42.28.38.26.44.78.76-1.04%202.38-1.04%201.64%200%203.1%201.54%201.46%201.54%201.46%203.58%200%202.04-1.46%203.58-1.44%201.54-3.08%201.54-1.64%200-2.38-.92v4.04q0%20.46-.04.68-.02.22-.18.5-.14.3-.5.42-.36.12-.98.12-.62%200-1-.12-.36-.12-.52-.4-.14-.28-.18-.5-.02-.22-.02-.68zm3.96-9.42q-.46.54-.46%201.18%200%20.64.46%201.18.48.52%201.2.52.74%200%201.24-.52.52-.52.52-1.18%200-.66-.48-1.18-.48-.54-1.26-.54-.76%200-1.22.54zm14.741-8.36q.16-.3.54-.42.38-.12%201-.12.64%200%201.02.12.38.12.52.42.16.3.18.54.04.22.04.68v11.94q0%20.46-.04.7-.02.22-.18.5-.3.54-1.7.54-1.38%200-1.54-.98-.84.96-2.34.96-1.8%200-3.28-1.56-1.48-1.58-1.48-3.66%200-2.1%201.48-3.68%201.5-1.58%203.28-1.58%201.48%200%202.3%201v-4.2q0-.46.02-.68.04-.24.18-.52zm-3.24%2010.86q.52.54%201.26.54.74%200%201.22-.54.5-.54.5-1.18%200-.66-.48-1.22-.46-.56-1.26-.56-.8%200-1.28.56-.48.54-.48%201.2%200%20.66.52%201.2zm7.833-1.2q0-2.4%201.68-3.96%201.68-1.56%203.84-1.56%202.16%200%203.82%201.56%201.66%201.54%201.66%203.94%200%201.66-.86%202.96-.86%201.28-2.1%201.9-1.22.6-2.54.6-1.32%200-2.56-.64-1.24-.66-2.1-1.92-.84-1.28-.84-2.88zm4.18%201.44q.64.48%201.3.48.66%200%201.32-.5.66-.5.66-1.48%200-.98-.62-1.46-.62-.48-1.34-.48-.72%200-1.34.5-.62.5-.62%201.48%200%20.96.64%201.46zm11.412-1.44q0%20.84.56%201.32.56.46%201.18.46.64%200%201.18-.36.56-.38.9-.38.6%200%201.46%201.06.46.58.46%201.04%200%20.76-1.1%201.42-1.14.8-2.8.8-1.86%200-3.58-1.34-.82-.64-1.34-1.7-.52-1.08-.52-2.36%200-1.3.52-2.34.52-1.06%201.34-1.7%201.66-1.32%203.54-1.32.76%200%201.48.22.72.2%201.06.4l.32.2q.36.24.56.38.52.4.52.92%200%20.5-.42%201.14-.72%201.1-1.38%201.1-.38%200-1.08-.44-.36-.34-1.04-.34-.66%200-1.24.48-.58.48-.58%201.34z%22%20fill%3D%22green%22/%3E%3C/svg%3E)
](https://pdoc.dev "pdoc: Python API documentation generator")

#  database

View Source

    
    
      1import os
      2import sqlite3
      3import data.utils as utils
      4from typing import Union, List, Dict
      5
      6class Database:
      7    def query(self, tournament_id="", query="", attributes=[]) -> Union[List, bool, None]:
      8        """
      9        Executes a SQL query on the tournaments database.
     10
     11        Args:
     12            tournament_id (str): ID of the tournament (used to locate db file).
     13            query (str): SQL query to be executed.
     14            attributes (list): Parameters for the SQL query.
     15
     16        Returns:
     17            List: If SELECT query succeeds.
     18            bool: True for successful CREATE/INSERT/UPDATE.
     19            None: On failure or no rows affected.
     20        """
     21
     22        try:
     23            if not os.path.exists(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")):
     24                return None
     25
     26            with sqlite3.connect(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")) as connection:
     27                cursor = connection.cursor()
     28                cursor.execute(query, attributes)
     29
     30                query_type = query.strip().split()[0].upper()
     31
     32                if query_type == "SELECT":
     33                    data = cursor.fetchall()
     34                    return data if data else None
     35
     36                elif query_type == "CREATE":
     37                    return cursor.rowcount == -1
     38
     39                elif query_type in {"INSERT", "UPDATE"}:
     40                    return cursor.rowcount > 0
     41
     42                return None
     43
     44        except Exception:
     45            utils.LOGGER.error(f"Cannot process query: {tournament_id}, {query}, {attributes}.")
     46            return None
     47
     48
     49    def create_tournament(
     50        self,
     51        tournament_id: str,
     52        name: str,
     53        date: str,
     54        field_count: int,
     55        team_count: int,
     56        group_count: int,
     57        fields: Dict[str, str],
     58        teams: Dict[str, List[Union[str, int]]],
     59        groups: Dict[str, str],
     60        games: Dict[str, List[Union[str, int]]],
     61        matchpoint: int
     62        ) -> Union[bool, None]:
     63
     64        """
     65        Initializes the database for a new tournament and inserts the provided data.
     66
     67        Args:
     68            tournament_id (str): Unique identifier for the tournament.
     69            name (str): Tournament name.
     70            date (str): Tournament date.
     71            field_count (int): Number of fields.
     72            team_count (int): Number of teams.
     73            group_count (int): Number of groups.
     74            fields (dict): Field ID to name mapping.
     75            teams (dict): Team ID to [name, group_id] mapping.
     76            groups (dict): Group ID to name mapping.
     77            games (dict): Game ID to [field_id, team1, team2, ref, time, score1, score2].
     78            matchpoint (int): Match point value.
     79
     80        Returns:
     81            bool: True if setup is successful.
     82        """
     83
     84        result = []
     85
     86        result.append(self.query(tournament_id, """
     87            CREATE TABLE IF NOT EXISTS config (
     88            id           TEXT PRIMARY KEY,
     89            name         TEXT,
     90            date         TEXT,
     91            field_count  INTEGER,
     92            team_count   INTEGER,
     93            group_count  INTEGER,
     94            matchpoint	 INTEGER)"""))
     95
     96        result.append(self.query(tournament_id, """
     97            INSERT INTO config
     98            (id, name, date, field_count, team_count, group_count, matchpoint)
     99            VALUES (?, ?, ?, ?, ?, ?, ?)""",
    100            [tournament_id, name, date, field_count, team_count, group_count, matchpoint]))
    101
    102        result.append(self.query(tournament_id, """
    103            CREATE TABLE IF NOT EXISTS groups (
    104            id   TEXT PRIMARY KEY,
    105            name TEXT)"""))
    106
    107        for group_id, group_name in groups.items():
    108            result.append(self.query(tournament_id, """INSERT INTO groups (id, name) VALUES (?, ?)""",
    109                [group_id, group_name]))
    110
    111        result.append(self.query(tournament_id, """
    112            CREATE TABLE IF NOT EXISTS teams (
    113            id       TEXT PRIMARY KEY,
    114            name     TEXT,
    115            group_id TEXT)"""))
    116
    117        for team_id, (team_name, group_id) in teams.items():
    118            result.append(self.query(tournament_id, """INSERT INTO teams (id, name, group_id) VALUES (?, ?, ?)""",
    119                [team_id, team_name, group_id]))
    120
    121        result.append(self.query(tournament_id, """
    122            CREATE TABLE IF NOT EXISTS fields (
    123            id   TEXT PRIMARY KEY,
    124            name TEXT)"""))
    125
    126        for field_id, field_name in fields.items():
    127            result.append(self.query(tournament_id, """INSERT INTO fields (id, name) VALUES (?, ?)""",
    128                [field_id, field_name]))
    129
    130        result.append(self.query(tournament_id, """CREATE TABLE IF NOT EXISTS games (
    131            id       TEXT PRIMARY KEY,
    132            field_id TEXT,
    133            team1    TEXT,
    134            team2    TEXT,
    135            ref      TEXT,
    136            time     TEXT,
    137            score1   INTEGER,
    138            score2   INTEGER)"""))
    139
    140        for game_id, game_data in games.items():
    141            result.append(self.query(tournament_id, """
    142                INSERT INTO games
    143                (id, field_id, team1, team2, ref, time, score1, score2)
    144                VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
    145                [game_id, *game_data]))
    146
    147        for variable in result:
    148            if variable is None:
    149                return None
    150
    151        return True
    152
    153    def get_config(self, tournament_id: str) -> Union[List, bool, None]:
    154        """Returns the config of a tournament."""
    155
    156        return self.query(tournament_id, "SELECT * FROM config")
    157
    158
    159    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List, bool, None]:
    160        """Returns games for a specific field."""
    161
    162        return self.query(tournament_id, "SELECT * FROM games WHERE field_id IS ?", [field_id])
    163
    164
    165    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List, bool, None]:
    166        """Returns the score for a specific game."""
    167
    168        return self.query(tournament_id, "SELECT score1, score2 FROM games WHERE id IS ?", [game_id])
    169
    170
    171    def set_game_score(self, tournament_id: str, game_id: str, score: list[int]) -> bool:
    172        """Updates the score of a game and returns whether it was successful."""
    173
    174        return self.query(tournament_id, "UPDATE games SET score1 = ?, score2 = ? WHERE id = ?", [score[0], score[1], game_id]) is True
    175
    176
    177    def get_teams(self, tournament_id: str) -> Union[List, bool, None]:
    178        """Returns number of teams per group."""
    179
    180        return self.query(tournament_id, "SELECT group_id, COUNT(*) AS team_count FROM teams GROUP BY group_id")
    181
    182
    183    def get_fields(self, tournament_id: str) -> Union[List, bool, None]:
    184        """Returns all unique field IDs."""
    185
    186        return self.query(tournament_id, "SELECT DISTINCT field_id FROM games")
    

class Database: View Source

    
    
      7class Database:
      8    def query(self, tournament_id="", query="", attributes=[]) -> Union[List, bool, None]:
      9        """
     10        Executes a SQL query on the tournaments database.
     11
     12        Args:
     13            tournament_id (str): ID of the tournament (used to locate db file).
     14            query (str): SQL query to be executed.
     15            attributes (list): Parameters for the SQL query.
     16
     17        Returns:
     18            List: If SELECT query succeeds.
     19            bool: True for successful CREATE/INSERT/UPDATE.
     20            None: On failure or no rows affected.
     21        """
     22
     23        try:
     24            if not os.path.exists(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")):
     25                return None
     26
     27            with sqlite3.connect(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")) as connection:
     28                cursor = connection.cursor()
     29                cursor.execute(query, attributes)
     30
     31                query_type = query.strip().split()[0].upper()
     32
     33                if query_type == "SELECT":
     34                    data = cursor.fetchall()
     35                    return data if data else None
     36
     37                elif query_type == "CREATE":
     38                    return cursor.rowcount == -1
     39
     40                elif query_type in {"INSERT", "UPDATE"}:
     41                    return cursor.rowcount > 0
     42
     43                return None
     44
     45        except Exception:
     46            utils.LOGGER.error(f"Cannot process query: {tournament_id}, {query}, {attributes}.")
     47            return None
     48
     49
     50    def create_tournament(
     51        self,
     52        tournament_id: str,
     53        name: str,
     54        date: str,
     55        field_count: int,
     56        team_count: int,
     57        group_count: int,
     58        fields: Dict[str, str],
     59        teams: Dict[str, List[Union[str, int]]],
     60        groups: Dict[str, str],
     61        games: Dict[str, List[Union[str, int]]],
     62        matchpoint: int
     63        ) -> Union[bool, None]:
     64
     65        """
     66        Initializes the database for a new tournament and inserts the provided data.
     67
     68        Args:
     69            tournament_id (str): Unique identifier for the tournament.
     70            name (str): Tournament name.
     71            date (str): Tournament date.
     72            field_count (int): Number of fields.
     73            team_count (int): Number of teams.
     74            group_count (int): Number of groups.
     75            fields (dict): Field ID to name mapping.
     76            teams (dict): Team ID to [name, group_id] mapping.
     77            groups (dict): Group ID to name mapping.
     78            games (dict): Game ID to [field_id, team1, team2, ref, time, score1, score2].
     79            matchpoint (int): Match point value.
     80
     81        Returns:
     82            bool: True if setup is successful.
     83        """
     84
     85        result = []
     86
     87        result.append(self.query(tournament_id, """
     88            CREATE TABLE IF NOT EXISTS config (
     89            id           TEXT PRIMARY KEY,
     90            name         TEXT,
     91            date         TEXT,
     92            field_count  INTEGER,
     93            team_count   INTEGER,
     94            group_count  INTEGER,
     95            matchpoint	 INTEGER)"""))
     96
     97        result.append(self.query(tournament_id, """
     98            INSERT INTO config
     99            (id, name, date, field_count, team_count, group_count, matchpoint)
    100            VALUES (?, ?, ?, ?, ?, ?, ?)""",
    101            [tournament_id, name, date, field_count, team_count, group_count, matchpoint]))
    102
    103        result.append(self.query(tournament_id, """
    104            CREATE TABLE IF NOT EXISTS groups (
    105            id   TEXT PRIMARY KEY,
    106            name TEXT)"""))
    107
    108        for group_id, group_name in groups.items():
    109            result.append(self.query(tournament_id, """INSERT INTO groups (id, name) VALUES (?, ?)""",
    110                [group_id, group_name]))
    111
    112        result.append(self.query(tournament_id, """
    113            CREATE TABLE IF NOT EXISTS teams (
    114            id       TEXT PRIMARY KEY,
    115            name     TEXT,
    116            group_id TEXT)"""))
    117
    118        for team_id, (team_name, group_id) in teams.items():
    119            result.append(self.query(tournament_id, """INSERT INTO teams (id, name, group_id) VALUES (?, ?, ?)""",
    120                [team_id, team_name, group_id]))
    121
    122        result.append(self.query(tournament_id, """
    123            CREATE TABLE IF NOT EXISTS fields (
    124            id   TEXT PRIMARY KEY,
    125            name TEXT)"""))
    126
    127        for field_id, field_name in fields.items():
    128            result.append(self.query(tournament_id, """INSERT INTO fields (id, name) VALUES (?, ?)""",
    129                [field_id, field_name]))
    130
    131        result.append(self.query(tournament_id, """CREATE TABLE IF NOT EXISTS games (
    132            id       TEXT PRIMARY KEY,
    133            field_id TEXT,
    134            team1    TEXT,
    135            team2    TEXT,
    136            ref      TEXT,
    137            time     TEXT,
    138            score1   INTEGER,
    139            score2   INTEGER)"""))
    140
    141        for game_id, game_data in games.items():
    142            result.append(self.query(tournament_id, """
    143                INSERT INTO games
    144                (id, field_id, team1, team2, ref, time, score1, score2)
    145                VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
    146                [game_id, *game_data]))
    147
    148        for variable in result:
    149            if variable is None:
    150                return None
    151
    152        return True
    153
    154    def get_config(self, tournament_id: str) -> Union[List, bool, None]:
    155        """Returns the config of a tournament."""
    156
    157        return self.query(tournament_id, "SELECT * FROM config")
    158
    159
    160    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List, bool, None]:
    161        """Returns games for a specific field."""
    162
    163        return self.query(tournament_id, "SELECT * FROM games WHERE field_id IS ?", [field_id])
    164
    165
    166    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List, bool, None]:
    167        """Returns the score for a specific game."""
    168
    169        return self.query(tournament_id, "SELECT score1, score2 FROM games WHERE id IS ?", [game_id])
    170
    171
    172    def set_game_score(self, tournament_id: str, game_id: str, score: list[int]) -> bool:
    173        """Updates the score of a game and returns whether it was successful."""
    174
    175        return self.query(tournament_id, "UPDATE games SET score1 = ?, score2 = ? WHERE id = ?", [score[0], score[1], game_id]) is True
    176
    177
    178    def get_teams(self, tournament_id: str) -> Union[List, bool, None]:
    179        """Returns number of teams per group."""
    180
    181        return self.query(tournament_id, "SELECT group_id, COUNT(*) AS team_count FROM teams GROUP BY group_id")
    182
    183
    184    def get_fields(self, tournament_id: str) -> Union[List, bool, None]:
    185        """Returns all unique field IDs."""
    186
    187        return self.query(tournament_id, "SELECT DISTINCT field_id FROM games")
    

def query( self, tournament_id='', query='', attributes=[]) -> Union[List,
bool, NoneType]: View Source

    
    
     8    def query(self, tournament_id="", query="", attributes=[]) -> Union[List, bool, None]:
     9        """
    10        Executes a SQL query on the tournaments database.
    11
    12        Args:
    13            tournament_id (str): ID of the tournament (used to locate db file).
    14            query (str): SQL query to be executed.
    15            attributes (list): Parameters for the SQL query.
    16
    17        Returns:
    18            List: If SELECT query succeeds.
    19            bool: True for successful CREATE/INSERT/UPDATE.
    20            None: On failure or no rows affected.
    21        """
    22
    23        try:
    24            if not os.path.exists(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")):
    25                return None
    26
    27            with sqlite3.connect(os.path.join(utils.DATABASE_PATH, f"{tournament_id}.db")) as connection:
    28                cursor = connection.cursor()
    29                cursor.execute(query, attributes)
    30
    31                query_type = query.strip().split()[0].upper()
    32
    33                if query_type == "SELECT":
    34                    data = cursor.fetchall()
    35                    return data if data else None
    36
    37                elif query_type == "CREATE":
    38                    return cursor.rowcount == -1
    39
    40                elif query_type in {"INSERT", "UPDATE"}:
    41                    return cursor.rowcount > 0
    42
    43                return None
    44
    45        except Exception:
    46            utils.LOGGER.error(f"Cannot process query: {tournament_id}, {query}, {attributes}.")
    47            return None
    

Executes a SQL query on the tournaments database.

Args: tournament_id (str): ID of the tournament (used to locate db file).
query (str): SQL query to be executed. attributes (list): Parameters for the
SQL query.

Returns: List: If SELECT query succeeds. bool: True for successful
CREATE/INSERT/UPDATE. None: On failure or no rows affected.

def create_tournament( self, tournament_id: str, name: str, date: str,
field_count: int, team_count: int, group_count: int, fields: Dict[str, str],
teams: Dict[str, List[Union[str, int]]], groups: Dict[str, str], games:
Dict[str, List[Union[str, int]]], matchpoint: int) -> Optional[bool]: View
Source

    
    
     50    def create_tournament(
     51        self,
     52        tournament_id: str,
     53        name: str,
     54        date: str,
     55        field_count: int,
     56        team_count: int,
     57        group_count: int,
     58        fields: Dict[str, str],
     59        teams: Dict[str, List[Union[str, int]]],
     60        groups: Dict[str, str],
     61        games: Dict[str, List[Union[str, int]]],
     62        matchpoint: int
     63        ) -> Union[bool, None]:
     64
     65        """
     66        Initializes the database for a new tournament and inserts the provided data.
     67
     68        Args:
     69            tournament_id (str): Unique identifier for the tournament.
     70            name (str): Tournament name.
     71            date (str): Tournament date.
     72            field_count (int): Number of fields.
     73            team_count (int): Number of teams.
     74            group_count (int): Number of groups.
     75            fields (dict): Field ID to name mapping.
     76            teams (dict): Team ID to [name, group_id] mapping.
     77            groups (dict): Group ID to name mapping.
     78            games (dict): Game ID to [field_id, team1, team2, ref, time, score1, score2].
     79            matchpoint (int): Match point value.
     80
     81        Returns:
     82            bool: True if setup is successful.
     83        """
     84
     85        result = []
     86
     87        result.append(self.query(tournament_id, """
     88            CREATE TABLE IF NOT EXISTS config (
     89            id           TEXT PRIMARY KEY,
     90            name         TEXT,
     91            date         TEXT,
     92            field_count  INTEGER,
     93            team_count   INTEGER,
     94            group_count  INTEGER,
     95            matchpoint	 INTEGER)"""))
     96
     97        result.append(self.query(tournament_id, """
     98            INSERT INTO config
     99            (id, name, date, field_count, team_count, group_count, matchpoint)
    100            VALUES (?, ?, ?, ?, ?, ?, ?)""",
    101            [tournament_id, name, date, field_count, team_count, group_count, matchpoint]))
    102
    103        result.append(self.query(tournament_id, """
    104            CREATE TABLE IF NOT EXISTS groups (
    105            id   TEXT PRIMARY KEY,
    106            name TEXT)"""))
    107
    108        for group_id, group_name in groups.items():
    109            result.append(self.query(tournament_id, """INSERT INTO groups (id, name) VALUES (?, ?)""",
    110                [group_id, group_name]))
    111
    112        result.append(self.query(tournament_id, """
    113            CREATE TABLE IF NOT EXISTS teams (
    114            id       TEXT PRIMARY KEY,
    115            name     TEXT,
    116            group_id TEXT)"""))
    117
    118        for team_id, (team_name, group_id) in teams.items():
    119            result.append(self.query(tournament_id, """INSERT INTO teams (id, name, group_id) VALUES (?, ?, ?)""",
    120                [team_id, team_name, group_id]))
    121
    122        result.append(self.query(tournament_id, """
    123            CREATE TABLE IF NOT EXISTS fields (
    124            id   TEXT PRIMARY KEY,
    125            name TEXT)"""))
    126
    127        for field_id, field_name in fields.items():
    128            result.append(self.query(tournament_id, """INSERT INTO fields (id, name) VALUES (?, ?)""",
    129                [field_id, field_name]))
    130
    131        result.append(self.query(tournament_id, """CREATE TABLE IF NOT EXISTS games (
    132            id       TEXT PRIMARY KEY,
    133            field_id TEXT,
    134            team1    TEXT,
    135            team2    TEXT,
    136            ref      TEXT,
    137            time     TEXT,
    138            score1   INTEGER,
    139            score2   INTEGER)"""))
    140
    141        for game_id, game_data in games.items():
    142            result.append(self.query(tournament_id, """
    143                INSERT INTO games
    144                (id, field_id, team1, team2, ref, time, score1, score2)
    145                VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
    146                [game_id, *game_data]))
    147
    148        for variable in result:
    149            if variable is None:
    150                return None
    151
    152        return True
    

Initializes the database for a new tournament and inserts the provided data.

Args: tournament_id (str): Unique identifier for the tournament. name (str):
Tournament name. date (str): Tournament date. field_count (int): Number of
fields. team_count (int): Number of teams. group_count (int): Number of
groups. fields (dict): Field ID to name mapping. teams (dict): Team ID to
[name, group_id] mapping. groups (dict): Group ID to name mapping. games
(dict): Game ID to [field_id, team1, team2, ref, time, score1, score2].
matchpoint (int): Match point value.

Returns: bool: True if setup is successful.

def get_config(self, tournament_id: str) -> Union[List, bool, NoneType]: View
Source

    
    
    154    def get_config(self, tournament_id: str) -> Union[List, bool, None]:
    155        """Returns the config of a tournament."""
    156
    157        return self.query(tournament_id, "SELECT * FROM config")
    

Returns the config of a tournament.

def get_games_from_field(self, tournament_id: str, field_id: str) ->
Union[List, bool, NoneType]: View Source

    
    
    160    def get_games_from_field(self, tournament_id: str, field_id: str) -> Union[List, bool, None]:
    161        """Returns games for a specific field."""
    162
    163        return self.query(tournament_id, "SELECT * FROM games WHERE field_id IS ?", [field_id])
    

Returns games for a specific field.

def get_game_score(self, tournament_id: str, game_id: str) -> Union[List,
bool, NoneType]: View Source

    
    
    166    def get_game_score(self, tournament_id: str, game_id: str) -> Union[List, bool, None]:
    167        """Returns the score for a specific game."""
    168
    169        return self.query(tournament_id, "SELECT score1, score2 FROM games WHERE id IS ?", [game_id])
    

Returns the score for a specific game.

def set_game_score(self, tournament_id: str, game_id: str, score: list[int])
-> bool: View Source

    
    
    172    def set_game_score(self, tournament_id: str, game_id: str, score: list[int]) -> bool:
    173        """Updates the score of a game and returns whether it was successful."""
    174
    175        return self.query(tournament_id, "UPDATE games SET score1 = ?, score2 = ? WHERE id = ?", [score[0], score[1], game_id]) is True
    

Updates the score of a game and returns whether it was successful.

def get_teams(self, tournament_id: str) -> Union[List, bool, NoneType]: View
Source

    
    
    178    def get_teams(self, tournament_id: str) -> Union[List, bool, None]:
    179        """Returns number of teams per group."""
    180
    181        return self.query(tournament_id, "SELECT group_id, COUNT(*) AS team_count FROM teams GROUP BY group_id")
    

Returns number of teams per group.

def get_fields(self, tournament_id: str) -> Union[List, bool, NoneType]: View
Source

    
    
    184    def get_fields(self, tournament_id: str) -> Union[List, bool, None]:
    185        """Returns all unique field IDs."""
    186
    187        return self.query(tournament_id, "SELECT DISTINCT field_id FROM games")
    

Returns all unique field IDs.

