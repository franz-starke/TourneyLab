from sqlite3.dbapi2 import Timestamp
import fastapi
from data.apiobjects import apiobjects
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

api = fastapi.FastAPI()


class TeamInfo(BaseModel):
    TeamID: str
    Team_Name: str

class PunkteInfo(BaseModel):
    Punkte_Team1: int
    Punkte_Team2: int

class GameInfo(BaseModel):
    SpielID: str
    Anfang: Timestamp
    Ende: Timestamp
    Team1: TeamInfo
    Team2: TeamInfo
    Schiri: str
    Punkte: PunkteInfo

class CreateTurnier(BaseModel):
    Turniername: str
    Anzahl_der_Felder: int
    Anzahl_der_Teams: int
    Anzahl_der_Leistungsgruppen: int
    Hin_Rueckspiel: bool

class PunkteUpdate(BaseModel):
    Punkte_Team1: int
    Punkte_Team2: int

class GroupInfo(BaseModel):
    Name: str
    GruppenID: str

class TeamGroupEntry(BaseModel):
    Name: str
    Spielpunkten: int

class TeamGameInfo(BaseModel):
    Team1: str
    Team2: str
    Anfang: Timestamp
    Ende: Timestamp
    Feld: int
    Punkte: PunkteInfo


@api.get("/")
def get_main():
    return {"games":[]}

@api.post("/create")
def create_turnier(data: CreateTurnier):
    return {"TurnierID": "<GENERATED_TURNIER_ID>"}

@api.get("/turnaments")
def get_turniere():
    return {"Turniere": []}

@api.get("/{turnierID}/fields/{feldID}")
def get_field_games(turnierID: str, feldID: str):
    return {"games": []}

@api.get("/{turnierID}/game/{spielID}")
def get_game_points(turnierID: str, spielID: str):
    return {"Punkte": {"Punkte_Team1": 0, "Punkte_Team2": 0}}

@api.put("/{turnierID}/game/{spielID}")
def update_game_points(turnierID: str, spielID: str, punkte: PunkteUpdate):
    return {"updated": True}

@api.get("/{turnierID}/performancegroups")
def get_performancegroups(turnierID: str):
    return {"Gruppen": []}

@api.get("/{turnierID}/performancegroups/{groupID}")
def get_group_teams(turnierID: str, groupID: str):
    return {"Teams": []}

@api.get("/{turnierID}/team/{teamID}")
def get_team_info(turnierID: str, teamID: str):
    return {
        "Team1": "",
        "Team2": "",
        "Anfang": Timestamp,
        "Ende": Timestamp,
        "Feld": 0,
        "Punkte": {"Punkte_Team1": 0, "Punkte_Team2": 0}
    }
