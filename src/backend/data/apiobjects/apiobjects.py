from pydantic import BaseModel, validator
from typing import List

class CreateTournament(BaseModel):
    name: str
    teams: dict[str,int]
    games: dict
    date: str

class ScoreUpdate(BaseModel):
    score: list[int]

    @validator("score")
    def validate_score(cls, v):
        if not isinstance(v, list) or len(v) != 2:
            raise ValueError("score must be a list of exactly two integers.")
        if not all(isinstance(x, int) for x in v):
            raise ValueError("both values in score must be integers.")
        if any(x < 0 for x in v):
            raise ValueError("score values must be non-negative.")
        return v