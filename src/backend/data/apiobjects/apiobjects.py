from pydantic import BaseModel

class CreateTournament(BaseModel):
    name: str
    fields: int
    teams: int
    groups: int
    returngame: bool

class PointUpdate(BaseModel):
    team1: int
    team2: int