from fastapi.testclient import TestClient
import sys
import os
import pytest


sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from api import api

@pytest.fixture
def client():
    return TestClient(api)

def test_get_tournament_details_success(client, mocker):
    """Returns complete tournament details successfully when all data is valid."""
    dummy_config = [["tournament123", "Test Cup", "2025-06-01"]]
    dummy_teams = [("1", 5), ("2", 6)]
    dummy_fields = [("field1",), ("field2",)]
    dummy_games_field1 = [("game1", None, 1, 2, 3, "10:00", 21, 18)]
    dummy_games_field2 = [("game2", None, 2, 3, 4, "11:00", 15, 22)]

    mocker.patch("api.server.database.get_config", return_value=dummy_config)
    mocker.patch("api.server.database.get_teams", return_value=dummy_teams)
    mocker.patch("api.server.database.get_fields", return_value=dummy_fields)
    mocker.patch("api.server.database.get_games_from_field", side_effect=[dummy_games_field1, dummy_games_field2])

    response = client.get("/api/tournament123/details")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Test Cup"
    assert "games" in data and "field1" in data["games"]

def test_get_tournament_details_missing_config(client, mocker):
    """Returns 400 if tournament config cannot be retrieved."""
    mocker.patch("api.server.database.get_config", return_value=[])

    response = client.get("/api/tournament123/details")
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot fetch information from this tournament."

def test_get_tournament_details_missing_teams(client, mocker):
    """Returns 400 if team data is not available."""
    mocker.patch("api.server.database.get_config", return_value=[["id", "Test", "2025-01-01"]])
    mocker.patch("api.server.database.get_teams", return_value=None)

    response = client.get("/api/tournament123/details")
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot fetch team information from this tournament."

def test_get_tournament_details_missing_fields(client, mocker):
    """Returns 400 if field data is missing."""
    mocker.patch("api.server.database.get_config", return_value=[["id", "Test", "2025-01-01"]])
    mocker.patch("api.server.database.get_teams", return_value=[("1", 5)])
    mocker.patch("api.server.database.get_fields", return_value=[])

    response = client.get("/api/tournament123/details")
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot fetch game information from this tournament."

def test_get_tournament_details_missing_games_from_field(client, mocker):
    """Returns 400 if no games are found for any field."""
    mocker.patch("api.server.database.get_config", return_value=[["id", "Test", "2025-01-01"]])
    mocker.patch("api.server.database.get_teams", return_value=[("1", 5)])
    mocker.patch("api.server.database.get_fields", return_value=[("field1",)])
    mocker.patch("api.server.database.get_games_from_field", return_value=[])

    response = client.get("/api/tournament123/details")
    assert response.status_code == 400
    assert response.json()["detail"] == "Cannot fetch game information from fields for this tournament."

def test_get_tournament_details_exception_handling(client, mocker):
    """Returns 500 if any unexpected exception occurs during data fetching."""
    mocker.patch("api.server.database.get_config", side_effect=Exception("Unexpected DB error"))

    response = client.get("/api/tournament123/details")
    assert response.status_code == 500
    assert response.json()["detail"] == "Error while retrieving tournament details."
