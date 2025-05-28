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

def test_get_field_games_success(client, mocker):
    """Returns games successfully for a valid field and tournament."""
    dummy_games = [
        {"id": "game1", "score": [2, 1], "time": "10:00"},
        {"id": "game2", "score": [0, 3], "time": "11:00"}
    ]
    mocker.patch("api.server.get_games_from_field", return_value=dummy_games)

    response = client.get("/api/test-tournament/fields/field-1")
    assert response.status_code == 200
    assert response.json() == {"games": dummy_games}

def test_get_field_games_empty_list(client, mocker):
    mocker.patch("api.server.get_games_from_field", return_value=Error(400, "There are no games associated with this field."))

    response = client.get("/api/test-tournament/fields/field-1")
    assert response.status_code == 400
    assert response.json()["detail"] == "There are no games associated with this field."

def test_get_field_games_invalid_tournament(client, mocker):
    mocker.patch("api.server.get_games_from_field", return_value=Error(404, "Tournament not found."))

    response = client.get("/api/invalid-id/fields/field-1")
    assert response.status_code == 404
    assert response.json()["detail"] == "Tournament not found."

def test_get_field_games_invalid_field(client, mocker):
    mocker.patch("api.server.get_games_from_field", return_value=Error(404, "Field not found."))

    response = client.get("/api/test-tournament/fields/invalid-field")
    assert response.status_code == 404
    assert response.json()["detail"] == "Field not found."

def test_get_field_games_server_exception(client, mocker):
    mocker.patch("api.server.get_games_from_field", return_value=Error(500, "An error occurred while retrieving field data."))

    response = client.get("/api/test-tournament/fields/field-1")
    assert response.status_code == 500
    assert response.json()["detail"] == "An error occurred while retrieving field data."

def test_get_field_games_returns_none(client, mocker):
    mocker.patch("api.server.get_games_from_field", return_value=None)

    response = client.get("/api/test-tournament/fields/field-1")
    assert response.status_code == 500
    assert response.json()["detail"] == "Unexpected None response."
