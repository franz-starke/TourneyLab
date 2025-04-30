from pydantic import BaseModel

class CreateTournament(BaseModel):
    name: str
    fields: int
    teams: int
    groups: int
    returngame: bool

class ScoreUpdate(BaseModel):
    score: list