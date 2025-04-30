import os
import string
import sqlite3
import secrets
import datetime
from database import *

class Server:
    def __init__(self):
        self.database = Database()

    def query(self,tournament_id="",query="",attributes=[]):
        try:
            with sqlite3.connect(os.path.join("data",f"{tournament_id}.db")) as connection:
                cursor = connection.cursor()
                cursor.execute(query,attributes)
                data = cursor.fetchall()
                return data

        except Exception as e:
            print(f"Error executing query: {e}")

    def create_tournaments(self):
        pass

    def get_tournaments(self):
        pass

    def get_field_games(self):
        pass

    def get_game_points(self):
        pass

    def update_game_points(self):
        pass

    def get_groups(self):
        pass

    def get_group_teams(self):
        pass

    def get_team_info(self):
        pass