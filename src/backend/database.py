import os
import sqlite3
from data.utils import *

class Database:
    def __init__(self):
        pass

    def query(self, tournament_id="", query="", attributes=[]) -> list|bool|None:
        try:
            with sqlite3.connect(os.path.join(DATABASE_PATH, f"{tournament_id}.db")) as connection:
                cursor = connection.cursor()
                cursor.execute(query, attributes)

                if query.strip().upper().startswith("SELECT"):
                    data = cursor.fetchall()
                    if len(data) > 0:
                        return data
                
                elif query.strip().upper().startswith("CREATE"):
                    if cursor.rowcount == -1:
                        return True
                
                elif query.strip().upper().startswith("INSERT") or query.strip().upper().startswith("UPDATE"):
                    if cursor.rowcount > 0:
                        return True
                
                return None
            
        except Exception as e:
            print(f"Error executing query: {e}")
            return None


    def create_tournament(self,
                          tournament_id:str,
                          name:str,
                          date:str,
                          field_count:int,
                          team_count:int,
                          group_count:int,
                          fields:dict[str,str],
                          teams:dict[str,list[str|int]],
                          groups:dict[str,str],
                          games:dict):
        
        # Tournament config
        self.query(tournament_id,"""CREATE TABLE IF NOT EXISTS config (
                                    id           VARCHAR PRIMARY KEY,
                                    name         VARCHAR,
                                    date         VARCHAR,
                                    field_count  INTEGER,
                                    team_count   INTEGER,
                                    group_count  INTEGER)""")
        
        self.query(tournament_id,"""INSERT INTO config 
                                    (id,name,date,field_count,team_count,group_count)
                                    VALUES (?,?,?,?,?,?)""",
                                [tournament_id,name,date,field_count,team_count,group_count])

        # Set groups
        self.query(tournament_id,"""CREATE TABLE IF NOT EXISTS groups (
                                    id           VARCHAR PRIMARY KEY,
                                    name         VARCHAR)""")
        
        for group in groups:
            self.query(tournament_id,"""INSERT INTO groups 
                                        (id,name)
                                        VALUES (?,?)""",
                                    [group,groups[group]])

        # Set teams
        self.query(tournament_id,"""CREATE TABLE IF NOT EXISTS teams (
                                    id           VARCHAR PRIMARY KEY,
                                    name         VARCHAR,
                                    group_id     VARCHAR)""")
        
        for team in teams:
            self.query(tournament_id,"""INSERT INTO teams 
                                        (id,name,group_id)
                                        VALUES (?,?,?)""",
                                    [team,teams[team][0],teams[team][1]])

        # Set fields
        self.query(tournament_id,"""CREATE TABLE IF NOT EXISTS fields (
                                    id           VARCHAR PRIMARY KEY,
                                    name         VARCHAR)""")
                
        for field in fields:
            self.query(tournament_id,"""INSERT INTO fields 
                                        (id,name)
                                        VALUES (?,?)""",
                                    [field,fields[field]])

        # Set games
        self.query(tournament_id,"""CREATE TABLE IF NOT EXISTS games (
                               id           VARCHAR PRIMARY KEY,
                               field_id     VARCHAR,
                               team1        VARCHAR,
                               team2        VARCHAR,
                               ref          VARCHAR,
                               time         VARCHAR,
                               score1       INTEGER,
                               score2       INTEGER)""")
        
        for game in games:
            self.query(tournament_id,"""INSERT INTO games 
                   (id,field_id,team1,team2,ref,time,score1,score2)
            VALUES (?,?,?,?,?,?,?,?)""",[game,*games[game]])

        return True

    def get_config(self,tournament_id:str):
        data = self.query(tournament_id,"""SELECT * FROM config""")
        return data
    
    def get_games_from_field(self,tournament_id,field_id):
        data = self.query(tournament_id,"""SELECT * FROM games WHERE field_id IS ?""",[field_id])
        return data
    
    def get_game_score(self,tournament_id:str,game_id):
        data = self.query(tournament_id,"""SELECT score1,score2 FROM games WHERE id IS ?""",[game_id])
        return data

    def set_game_score(self,tournament_id:str,game_id,score):
        data = self.query(tournament_id,"""UPDATE games SET score1 = ?, score2 = ? WHERE id = ?""",[score[0],score[1],game_id])
        if data == []:
            return True
        return False

    def get_teams(self, tournament_id: str):
        data = self.query(tournament_id, """SELECT group_id, COUNT(*) AS team_count FROM teams GROUP BY group_id;""")
        return data
    
    def get_games(self, tournament_id: str):
        data = self.query(tournament_id,"""SELECT * FROM games""")
        return data