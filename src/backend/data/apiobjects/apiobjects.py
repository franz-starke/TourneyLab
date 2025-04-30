from pydantic import BaseModel

class CreateTournament(BaseModel):
    name: str
    teams: dict
    games: dict
    date: int

class ScoreUpdate(BaseModel):
    score: list