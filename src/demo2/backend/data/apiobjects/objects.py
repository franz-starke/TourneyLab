from pydantic import BaseModel

class Score(BaseModel):
    team1: str
    team2: str
    score1: int
    score2: int

class ScoreChange(BaseModel):
    score1: int
    score2: int