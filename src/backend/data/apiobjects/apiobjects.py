import re
import data.utils as utils
from pydantic import BaseModel, field_validator
from fastapi import HTTPException


class CreateTournament(BaseModel):
    name: str
    date: str
    teams: dict[str,int]
    games: dict[str,dict]

    @field_validator("name")
    def validate_name(cls, v):

        # Check if name is not empty
        if not v.strip():
            raise HTTPException(status_code=400, detail="Tournament name must not be empty.")
        return v
    
    @field_validator("date")
    def validate_date(cls, v):

        # Simple ISO date format check
        if not re.match(r"^\d{4}-\d{2}-\d{2}$", v):
            raise HTTPException(status_code= 400,detail = "Date must be in the format YYYY-MM-DD.")
        return v
    
    @field_validator("teams")
    def validate_teams(cls, v):

        # Check that each group ID maps to a positive integer number of teams
        if not isinstance(v, dict):
            raise HTTPException(status_code=400,detail="Teams must be an object.")
        
        # Check if at least 1 and at most 2 groups are present.
        if len(v) != 1 and len(v) != 2:
            raise HTTPException(status_code=400,detail="Teams must have at least 1 and at most 2 groups.")

        # Check if teams structure is valid
        for group_id, team_count in v.items():
            if not isinstance(group_id, str):
                raise HTTPException(status_code=400,detail="Team group IDs must be strings.")
            if not isinstance(team_count, int) or team_count <= 0:
                raise HTTPException(status_code=400,detail="Each team count must be a positive integer.")
        return v
    
    @field_validator("games")
    def validate_games(cls, v):

        game_ids = []

        # Check that the structure is correct
        if not isinstance(v, dict):
            raise HTTPException(status_code=400,detail="Games must be an object.")

        for field_id, games_on_field in v.items():
            if not isinstance(games_on_field, dict):
                raise HTTPException(status_code=400,detail = f"Games for field '{field_id}' must be an object.")
            
            for game_id, game_info in games_on_field.items():

                # Check for duplicates and for correct game structure
                if game_id not in game_ids:
                    game_ids.append(game_id)
                else:
                    raise HTTPException(status_code=400,detail =f"Game id '{game_id}' is duplicate.")

                if not isinstance(game_info, list) or len(game_info) != 4:
                    raise HTTPException(status_code=400,detail=f"Game '{game_id}' in field '{field_id}' must be a list of four elements.")
                
                team1, team2, ref, time = game_info

                # Check types
                for x in [team1, team2, ref]:
                    if not isinstance(x, int):
                        raise HTTPException(status_code=400,detail =f"Game '{game_id}' in field '{field_id}' must have team and ref IDs as integers.")
                
                # Check time format (HH:MM)
                if not isinstance(time, str) or not re.match(r"^\d{2}:\d{2}$", time):
                    raise HTTPException(status_code=400,detail = f"Game '{game_id}' in field '{field_id}' has invalid time format. Use 'HH:MM'.")

        return v


class ScoreUpdate(BaseModel):
    score: list[int]

    @field_validator("score")
    def validate_score(cls, v):

        # Check if the value is a list and contains exactly two elements
        if not isinstance(v, list) or len(v) != 2:
            raise HTTPException(status_code=400,detail="Score must be a list of exactly two integers.")

        # Check if both elements in the list are integers
        if not all(isinstance(x, int) for x in v):
            raise HTTPException(status_code=400,detail="Score values must be integer.")

        # Check if any of the integers are negative
        if any(x < 0 for x in v):
            raise HTTPException(status_code=400,detail="Score values must not be negative.")

        return v
