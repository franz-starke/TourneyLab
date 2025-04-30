import os
import sqlite3
from data.constances import *

class Database:
    def __init__(self):
        pass

    def query(self,tournament_id="",query="",attributes=[]):
        try:
            with sqlite3.connect(os.path.join(DATABASE_PATH,f"{tournament_id}.db")) as connection:
                cursor = connection.cursor()
                cursor.execute(query,attributes)
                data = cursor.fetchall()
                return data
        except Exception as e:
            print(f"Error executing query: {e}")

