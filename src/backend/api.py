import data.utils as utils

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from server import Server
from data.apiobjects.apiobjects import CreateTournament, ScoreUpdate

# Create FastAPI and server instance
api = FastAPI()
server = Server()

# Only allowed origins to access the api
origins = ["*"]

# Add CORS middleware to allow cross-origin requests
api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

utils.LOGGER.info("Started API")


def handle_error(result) -> dict | utils.Error:
    """
    Converts an `Error` object into an HTTPException.

    Args:
        result: The result returned by a server method.

    Returns:
        The original result if it's not an Error.

    Raises:
        HTTPException: If result is an instance of utils.Error.
    """
    if result is None:
        raise HTTPException(status_code=500, detail="Unexpected None response.")

    if isinstance(result, utils.Error):
        raise HTTPException(status_code=result.code, detail=result.message)
    return result


@api.post("/api/create", summary="Create a new tournament")
def create_tournament(data: CreateTournament):
    """
    Creates a new tournament to be played.

    Args:
        data (CreateTournament): Tournament creation data from client.

    Returns:
        The tournament ID for the new tournament.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info(f"API request to create a new tournament | {data}")

    # Create new tournament entry in server
    for variable in data:
        if isinstance(variable[1], utils.Error):
            return handle_error(variable[1])
    result = server.create_tournament(
        data.name, data.date, data.teams, data.games, data.matchpoint)
    result = handle_error(result)
    return {"tournament_id": result}


@api.get("/api/tournaments", summary="List all tournaments")
def get_tournaments():
    """
    Get all old tournaments, that have been created.

    Returns:
        A list of all tournaments that have been created.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info("API request to list all tournaments.")

    # Fetch data for all tournaments
    result = server.get_tournaments()
    result = handle_error(result)
    return {"tournaments": result}


@api.get("/api/{tournament_id}/fields/{field_id}", summary="Get all games for a specific field")
def get_field_games(tournament_id: str, field_id: str):
    """
    Get all games from a field.

    Args:
        tournament_id (str): Unique ID of the tournament.
        field_id (str): Field identifier.

    Returns:
        All games that are connected with this field.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info(
            f"API request to get all games from a field | {tournament_id} | {field_id}")

    # Fetch data for all games in field
    result = server.get_games_from_field(tournament_id, field_id)
    result = handle_error(result)
    return {"games": result}


@api.get("/api/{tournament_id}/game/{game_id}", summary="Get the score of a specific game")
def get_game_score(tournament_id: str, game_id: str):
    """
    Gets the current score for a game.

    Args:
        tournament_id (str): Unique ID of the tournament.
        game_id (str): Unique ID of the game.

    Returns:
        The game score.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info(
            f"API request to get the score for a game | {tournament_id} | {game_id}")

    # Fetch data for score
    result = server.get_game_score(tournament_id, game_id)
    result = handle_error(result)
    return {"score": result}


@api.put("/api/{tournament_id}/game/{game_id}", summary="Update the score of a game")
def set_game_score(tournament_id: str, game_id: str, data: ScoreUpdate):
    """
    Edit a specific game score.

    Args:
        tournament_id (str): Unique ID of the tournament.
        game_id (str): Unique ID of the game.
        data (ScoreUpdate): The new score data.

    Returns:
        A status code for the score change.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info(
            f"API request to change the score of a game | {tournament_id} | {data.score}")

    # Change score for game
    if isinstance(data.score, utils.Error):
        return handle_error(data.score)
    result = server.set_game_score(tournament_id, game_id, data.score)
    result = handle_error(result)
    return {"status_code": 200, "detail": "Updated game score"}


@api.get("/api/{tournament_id}/details", summary="Get detailed tournament data")
def get_tournament_details(tournament_id: str):
    """
    Gets the details of a tournament.

    Args:
        tournament_id (str): Unique ID of the tournament.

    Returns:
        All data for the already played tournament.
    """

    # Logging for future debugging
    if utils.DEBUG:
        utils.LOGGER.info(
            f"API request to get tournament details | {tournament_id}")

    # Fetch data for tournament
    result = server.get_tournament_details(tournament_id)
    result = handle_error(result)
    return result
