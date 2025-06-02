from fastapi.testclient import TestClient
import sys
import os
import pytest

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from api import api
from data.utils import Error

@pytest.fixture
def client():
    return TestClient(api)

def test_set_game_score_success(client, mocker):
    """Successfully updates the score of a game with valid input."""
    mocker.patch("api.server.set_game_score", return_value=True)

    response = client.put("/api/tournament123/game/game1", json={"score": [3, 2]})
    assert response.status_code == 200
    assert response.json() == {"status_code": 200, "detail": "Updated game score"}

def test_set_game_score_invalid_score_format(client):
    """Returns 422 when the score format is invalid (e.g., not a list of two integers)."""
    response = client.put("/api/tournament123/game/game1", json={"score": "invalid"})
    assert response.status_code == 422


def test_set_game_score_negative_values(client):
    """Returns 400 when negative values are provided in the score."""
    response = client.put("/api/tournament123/game/game1", json={"score": [-1, 3]})
    assert response.status_code == 400
    assert response.json()["detail"] == "Score values must not be negative."

def test_set_game_score_invalid_game_id(client, mocker):
    """Returns 400 when trying to update a game that does not exist."""
    mocker.patch("api.server.set_game_score", return_value=Error(400, "Cannot set new score for the specified game."))

    response = client.put("/api/tournament123/game/invalid-game", json={"score": [1, 1]})
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot set new score for the specified game."

def test_set_game_score_invalid_tournament_id(client, mocker):
    """Returns 400 when the tournament ID is invalid."""
    mocker.patch("api.server.set_game_score", return_value=Error(400, "Tournament not found."))

    response = client.put("/api/invalid-tournament/game/game1", json={"score": [2, 2]})
    assert response.status_code == 400
    assert response.json()["detail"] == "Tournament not found."

def test_set_game_score_server_error(client, mocker):
    """Returns 500 on unexpected internal server error during score update."""
    mocker.patch("api.server.set_game_score", return_value=Error(500, "Cannot set new score for the specified game."))

    response = client.put("/api/tournament123/game/game1", json={"score": [2, 2]})
    assert response.status_code == 500
    assert response.json()["detail"] == "Cannot set new score for the specified game."
