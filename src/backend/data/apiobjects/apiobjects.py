from pydantic import BaseModel


class TimeSettings(BaseModel):
    start_time: int        
    round_duration: int     
    pause_duration: int

class CreateTournament(BaseModel):
    name: str
    teams: dict[str,int]
    games: dict[str,dict[str,list[str]]]
    date: int
    time: TimeSettings

class ScoreUpdate(BaseModel):
    score: list[int]