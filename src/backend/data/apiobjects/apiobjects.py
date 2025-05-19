from pydantic import BaseModel, validator
from data.utils import *

class CreateTournament(BaseModel):
    name: str
    teams: dict[str,int]
    games: dict[str,dict]
    date: str

class ScoreUpdate(BaseModel):
    score: list[int]

    @validator("score")
    def validate_score(cls, v):
        if not isinstance(v, list) or len(v) != 2:
            return Error(400,"Score must be a list of exactly two integers.")
        if not all(isinstance(x, int) for x in v):
            return Error(400,"Score values must be integer.")
        if any(x < 0 for x in v):
            return Error(400,"Score values must not be negative.")
        return v