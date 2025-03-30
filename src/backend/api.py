import fastapi
from data.apiobjects.apiobjects import *
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

api = fastapi.FastAPI()

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
        "Anfang": 0,
        "Ende": 0,
        "Feld": 0,
        "Punkte": {"Punkte_Team1": 0, "Punkte_Team2": 0}
    }
