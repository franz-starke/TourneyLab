import data.utils as utils

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from server import Server
from data.apiobjects.apiobjects import CreateTournament, ScoreUpdate

# Create FastAPI and server instance
api = FastAPI()
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


    result = server.create_tournament(data.name, data.date, data.teams, data.games)
    result = handle_error(result)
    return {"tournament_id": result}

def get_tournaments():

    result = server.get_tournaments()
    result = handle_error(result)
    return {"tournaments": result}

@api.get("/api/{tournament_id}/fields/{field_id}")
def get_field_games(tournament_id: str, field_id: str):
    
    games = server.get_games_from_field(tournament_id,field_id)


    result = server.get_games_from_field(tournament_id, field_id)
    result = handle_error(result)
    return {"games": result}

@api.get("/api/{tournament_id}/game/{game_id}")
def get_game_score(tournament_id: str, game_id: str):

    result = server.get_game_score(tournament_id, game_id)
    result = handle_error(result)
    return {"score": result}

@api.put("/api/{tournament_id}/game/{game_id}")
def set_game_score(tournament_id: str, game_id: str, data: ScoreUpdate):

    result = server.set_game_score(tournament_id, game_id, data.score)
    result = handle_error(result)
    return {"status_code": 200, "detail": "Updated game score"}

@api.get("/api/{tournament_id}/details")
def get_tournament_details(tournament_id: str):

    tournament_data = server.get_tournament_details(tournament_id)


    result = server.get_tournament_details(tournament_id)
    result = handle_error(result)
    return result