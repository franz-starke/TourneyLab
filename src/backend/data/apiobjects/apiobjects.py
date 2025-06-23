import re
import data.utils as utils
from pydantic import BaseModel, field_validator

class CreateTournament(BaseModel):
    name: str
    date: str
    teams: dict[str,int]
    games: dict[str,dict]
    matchpoint: int

    @field_validator("name")
    def validate_name(cls, v):

        # Check if name is not empty
        if not v.strip():
            return utils.Error(400,"Tournament name must not be empty.")
        return v

    @field_validator("date")
    def validate_date(cls, v):

        # Simple ISO date format check
        if not re.match(r"^\d{4}-\d{2}-\d{2}$", v):
            return utils.Error(400,"Date must be in the format YYYY-MM-DD.")
        return v

    @field_validator("teams")
    def validate_teams(cls, v):

        # Check that each group ID maps to a positive integer number of teams
        if not isinstance(v, dict):
            return utils.Error(400,"Teams must be an object.")

        # Check if at least 1 and at most 2 groups are present.
        if len(v) != 1 and len(v) != 2:
            return utils.Error(400,"Teams must have at least 1 and at most 2 groups.")

        # Check if teams structure is valid
        for group_id, team_count in v.items():
            if not isinstance(group_id, str):
                return utils.Error(400,"Team group IDs must be strings.")
            if not isinstance(team_count, int) or team_count <= 0:
                return utils.Error(400,"Each team count must be a positive integer.")
        return v

    @field_validator("games")
    def validate_games(cls, v):

        game_ids = []

        # Check that the structure is correct
        if not isinstance(v, dict):
            return utils.Error(400,"Games must be an object.")

        for field_id, games_on_field in v.items():
            if not isinstance(games_on_field, dict):
                return utils.Error(400,f"Games for field '{field_id}' must be an object.")

            for game_id, game_info in games_on_field.items():

                # Check for duplicates and for correct game structure
                if game_id not in game_ids:
                    game_ids.append(game_id)
                else:
                    return utils.Error(400,f"Game id '{game_id}' is duplicate.")

                if not isinstance(game_info, list) or len(game_info) != 4:
                    return utils.Error(400,f"Game '{game_id}' in field '{field_id}' must be a list of four elements.")

                team1, team2, ref, time = game_info

                # Check types
                for x in [team1, team2, ref]:
                    if not isinstance(x, int):
                        return utils.Error(400,f"Game '{game_id}' in field '{field_id}' must have team and ref IDs as integers.")

                # Check time format (HH:MM)
                if not isinstance(time, str) or not re.match(r"^\d{2}:\d{2}$", time):
                    return utils.Error(400,f"Game '{game_id}' in field '{field_id}' has invalid time format. Use 'HH:MM'.")

        return v

    @field_validator("matchpoint")
    def validate_name(cls, v):

        # Check if name is not empty
        if v <= 1 or v > 500:
            return utils.Error(400,"Tournament name must not be empty.")
        return v


class ScoreUpdate(BaseModel):
    score: list[int]

    @field_validator("score")
    def validate_score(cls, v):

        # Check if the value is a list and contains exactly two elements
        if not isinstance(v, list) or len(v) != 2:
            return utils.Error(400,"Score must be a list of exactly two integers.")

        # Check if both elements in the list are integers
        if not all(isinstance(x, int) for x in v):
            return utils.Error(400,"Score values must be integer.")

        # Check if any of the integers are negative
        if any(x < 0 for x in v):
            return utils.Error(400,"Score values must not be negative.")

        return v
