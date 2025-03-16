import os
import fastapi
import sqlite3
from data.apiobjects.objects import *
from fastapi.middleware.cors import CORSMiddleware

class Server:
    def __init__(self):
        self.init_database()
        # self.query("INSERT INTO scores (team1,team2,score1,score2) VALUES (?,?,?,?)",["TEAM 3","TEAM 4",11,22])

    def init_database(self):
        try:
            with sqlite3.connect(os.path.join("data","database.db")) as connection:
                cursor = connection.cursor()
                cursor.execute("""CREATE TABLE IF NOT EXISTS scores (
                               id       INTEGER PRIMARY KEY AUTOINCREMENT,
                               team1    varchar,
                               team2    varchar,
                               score1   INTEGER,
                               score2   INTEGER)
                               """)

        except Exception as e:
            print(f"Error initializing database: {e}")

    def query(self,query="",attributes=[]):
        try:
            with sqlite3.connect(os.path.join("data","database.db")) as connection:
                cursor = connection.cursor()
                cursor.execute(query,attributes)
                data = cursor.fetchall()
                return data

        except Exception as e:
            print(f"Error executing query: {e}")

server = Server()
api = fastapi.FastAPI()

origins = [
    "*"
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@api.get("/")
def get_main():
    data = server.query("SELECT * FROM scores")
    if data != None and len(data) !=  0:
        return {"data":data}
    else:
        return fastapi.HTTPException(status_code=404,detail="Error while fetching main data")

@api.put("/scores/{score_id}")
def set_score(score_id:str,score:ScoreChange):
    data = server.query("UPDATE scores SET score1=? ,score2=? WHERE id=?",[score.score1,score.score2,int(score_id)])
    if data != None:
        print("Updated new score to database")
        return fastapi.HTTPException(status_code=200,detail="OK")
    else:
        return fastapi.HTTPException(status_code=404,detail="Error while changing data")

@api.post("/scores")
def set_score(score:Score):
    data = server.query("INSERT INTO scores (team1,team2,score1,score2) VALUES (?,?,?,?)",[score.team1,score.team2,score.score1,score.score2])
    if data != None:
        print("Added new score to database")
        return fastapi.HTTPException(status_code=200,detail="OK")
    else:
        return fastapi.HTTPException(status_code=404,detail="Error while inserting new data")
    
