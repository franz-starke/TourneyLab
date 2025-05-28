from fastapi.testclient import TestClient
import sys
import os

import pytest
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from api import api

@pytest.fixture
def client():
    return TestClient(api)

def test_get_tournaments_success(client, mocker):
    dummy_data = [
        {"id": "abcd1234", "name": "Test Tournament", "date": "2025-06-01"}
    ]
    mocker.patch("api.server.get_tournaments", return_value=dummy_data)

    response = client.get("/api/tournaments")
    assert response.status_code == 200
    data = response.json()
    assert "tournaments" in data
    assert isinstance(data["tournaments"], list)
    assert data["tournaments"] == dummy_data


def test_get_tournaments_empty(client, mocker):
    mocker.patch("api.server.get_tournaments", return_value=[])

    response = client.get("/api/tournaments")
    assert response.status_code == 200
    assert response.json() == {"tournaments": []}


def test_get_tournaments_error(client, mocker):
    from data.utils import Error
    mocker.patch("api.server.get_tournaments", return_value=Error(500, "Database read error"))

    response = client.get("/api/tournaments")
    assert response.status_code == 500
    assert response.json()["detail"] == "Database read error"


def test_get_multiple_tournaments(client, mocker):
    dummy_data = [
        {"id": "id123456", "name": "Spring Cup", "date": "2025-04-01"},
        {"id": "id789012", "name": "Summer Cup", "date": "2025-08-01"}
    ]
    mocker.patch("api.server.get_tournaments", return_value=dummy_data)

    response = client.get("/api/tournaments")
    assert response.status_code == 200
    data = response.json()
    assert len(data["tournaments"]) == 2
    assert data["tournaments"][0]["name"] == "Spring Cup"
    assert data["tournaments"][1]["name"] == "Summer Cup"


def test_get_tournaments_returns_none(client, mocker):
    mocker.patch("api.server.get_tournaments", return_value=None)

    response = client.get("/api/tournaments")
    assert response.status_code == 500
    assert response.json()["detail"] == "Unexpected None response."


def test_get_tournaments_invalid_structure(client, mocker):
    dummy_data = [
        {"id": "id123", "title": "Wrong Field", "date": "2025-06-01"}
    ]
    mocker.patch("api.server.get_tournaments", return_value=dummy_data)

    response = client.get("/api/tournaments")
    assert response.status_code == 200  
    data = response.json()
    assert "name" not in data["tournaments"][0]
