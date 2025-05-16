from pydantic import BaseModel

class CreateTournament(BaseModel):
    name: str
    teams: dict[str,int]
    games: dict[str,dict[str,list[str]]]
    date: str

class ScoreUpdate(BaseModel):
    score: list[int]