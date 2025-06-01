from fastapi.testclient import TestClient
import sys
import os
import pytest

# Adjust Python path to include project root
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from api import api
from data.utils import Error

@pytest.fixture
def client():
    return TestClient(api)

def test_get_game_score_success(client, mocker):
    """Returns the correct score for a valid tournament and game ID."""
    mocker.patch("api.server.get_game_score", return_value=[15, 10])

    response = client.get("/api/test-tournament/game/game-1")
    assert response.status_code == 200
    assert response.json() == {"score": [15, 10]}

def test_get_game_score_empty_result(client, mocker):
    """Returns 400 if game has no stored score."""
    mocker.patch("api.server.get_game_score", return_value=Error(400, "Cannot get a score from the specified game."))

    response = client.get("/api/test-tournament/game/missing-score")
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot get a score from the specified game."

def test_get_game_score_invalid_game_id(client, mocker):
    """Returns 404 for an invalid game ID."""
    mocker.patch("api.server.get_game_score", return_value=Error(404, "Game not found."))

    response = client.get("/api/test-tournament/game/invalid-id")
    assert response.status_code == 404
    assert response.json()["detail"] == "Game not found."

def test_get_game_score_invalid_tournament_id(client, mocker):
    """Returns 404 for an invalid tournament ID."""
    mocker.patch("api.server.get_game_score", return_value=Error(404, "Tournament not found."))

    response = client.get("/api/invalid-tournament/game/game-1")
    assert response.status_code == 404
    assert response.json()["detail"] == "Tournament not found."

def test_get_game_score_server_error(client, mocker):
    """Returns 500 if an internal server error occurs."""
    mocker.patch("api.server.get_game_score", return_value=Error(500, "An error occurred while retrieving the game score."))

    response = client.get("/api/test-tournament/game/game-1")
    assert response.status_code == 500
    assert response.json()["detail"] == "An error occurred while retrieving the game score."

def test_get_game_score_returns_none(client, mocker):
    """Returns 500 if get_game_score unexpectedly returns None."""
    mocker.patch("api.server.get_game_score", return_value=None)

    response = client.get("/api/test-tournament/game/game-1")
    assert response.status_code == 500
    assert response.json()["detail"] == "Unexpected None response."
