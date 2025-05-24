import fastapi
import data.utils as utils

from server import *
from data.apiobjects.apiobjects import *
from fastapi.middleware.cors import CORSMiddleware

api = fastapi.FastAPI()
server = Server()

origins = ["*"]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def handle_error(result) -> dict:
    """
    Converts an `Error` object into an HTTPException.
    
    Args:
        result: The result returned by a server method.

    Returns:
        The original result if it's not an Error.

    Raises:
        HTTPException: If result is an instance of utils.Error.
    """

    if isinstance(result, utils.Error):
        raise HTTPException(status_code=result.code, detail=result.message)
    return result

@api.get("/api/tournaments")
def get_tournaments():
    
    tournaments = server.get_tournaments()

    if type(tournaments) == utils.Error:
        return fastapi.HTTPException(status_code=tournaments.code,detail=tournaments.message)
    else:
        return {"tournaments": tournaments}

@api.get("/api/{tournament_id}/fields/{field_id}")
def get_field_games(tournament_id: str, field_id: str):
    
    games = server.get_games_from_field(tournament_id,field_id)

    if type(games) == utils.Error:
        return fastapi.HTTPException(status_code=games.code,detail=games.message)
    else:
        return {"games":games}

@api.get("/api/{tournament_id}/game/{game_id}")
def get_game_score(tournament_id: str, game_id: str):
    
    score = server.get_game_score(tournament_id,game_id)

    if type(score) == utils.Error:
        return fastapi.HTTPException(status_code=score.code,detail=score.message)
    else:
        return {"score": score}

@api.put("/api/{tournament_id}/game/{game_id}")
def set_game_score(tournament_id: str, game_id: str, data: ScoreUpdate):
    
    score = data.score
    if type(score) == utils.Error:
        return fastapi.HTTPException(status_code=score.code,detail=score.message)
    
    status = server.set_game_score(tournament_id,game_id,score)

    if type(status) == utils.Error:
        return fastapi.HTTPException(status_code=status.code,detail=status.message)
    else:
        return {"status_code":200,"detail":"Updated game score"}

@api.get("/api/{tournament_id}/details")
def get_tournament_details(tournament_id: str):

    tournament_data = server.get_tournament_details(tournament_id)

    if type(tournament_data) == utils.Error:
        return fastapi.HTTPException(status_code=tournament_data.code,detail=tournament_data.message)
    else:
        return tournament_data

