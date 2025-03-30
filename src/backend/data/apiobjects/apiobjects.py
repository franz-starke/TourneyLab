from pydantic import BaseModel

class TeamInfo(BaseModel):
    TeamID: str
    Team_Name: str

class PunkteInfo(BaseModel):
    Punkte_Team1: int
    Punkte_Team2: int

class GameInfo(BaseModel):
    SpielID: str
    Anfang: int
    Ende: int
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
    Anfang: int
    Ende: int
    Feld: int
    Punkte: PunkteInfo