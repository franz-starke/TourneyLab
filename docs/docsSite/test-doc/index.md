# Test Documentation: Tournament Evaluation System

## Objective
Demonstrate the quality of the system and document the test structure and execution.

## Test Concept

### Tested Components (Test objects according to test pyramid)

- **Unit Tests**
  - Core logic:
    - `evaluateTournamentData`
    - `getGamesWeighted`
    - `getConflicts`
    - `distributeGamesToFieldsWithOneGroup`
    - `distributeGamesToFieldsAndAssignReferees`
  - Backend endpoints (via pytest and FastAPI TestClient)
      - `/api/create`
      - `/api/get_tournaments`

- **Integration Tests**
  - REST API endpoints:
    - `/api/create`
    - `/api/get_tournaments`
    - `/api/get_field_games`
    - `/api/get_game_score`
    - `/api/set_game_score`
    - `/api/get_tournament_details`
  - Cross-component validation (e.g., input parsing, database interactions, game assignment)
    
    

- **System Tests**
  - Simulation of complete tournaments with 1 or 2 groups
  - End-to-end API testing

### Test Methods

- **Automated Tests with Vitest**
  - Module: `tournamentEvaluation.test.js`
  - Verifies statistics, rankings, point distribution

- **Automated API Tests with pytest**
  - Uses FastAPI's `TestClient`
  - Verifies endpoint functionality, error handling, and data validation

- **Manual Tests**
  - `testOneGroup()` and `testTwoGroups()`
  - Console shows possible conflicts
  - Ad-hoc testing of edge cases

### Test Methods
| Type              | Tools Used               | Description                                                                         |
| ----------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| Unit Tests        | `Vitest`, `pytest`       | Validates individual logic units (functions and API behavior)                       |
| Integration Tests | `pytest`, FastAPI        | Validates combined behavior of API and logic modules                                |
| System Tests      | CLI + browser simulation | Tournament simulations, real-world-like testing of entire flow                      |
| Manual Tests      | Console-based CLI        | `testOneGroup()`, `testTwoGroups()` – for conflict inspection and edge case probing |


### Test Execution Plan

| Phase              | Tests                               | Responsible       |
|--------------------|-------------------------------------|-------------------|
| Development Phase  | Unit Tests with Vitest              | Developer         |
|                    | API Unit Tests with pytest          | Developer         |
| Pre-Release        | Manual Integration Tests            | Developer         |
|                    | End-to-end API Testing              | Developer         |
| Error Analysis     | Reproduction via CLI                | Developer         |

## Test Case Description

### Frontend/Logic Tests

#### Test Case 1: `evaluateTournamentData` with standard group
- **Precondition:** Tournament with 3 teams
- **Input Data:** `createSampleTournament()`
- **Procedure:** Automated with Vitest
- **Expected Result:** Correct calculation of games, points, rankings

#### Test Case 2: Two performance groups
- **Precondition:** Two groups with 3 teams each
- **Procedure:** Automated
- **Expected Result:** Correct separate evaluations per group

#### Test Case 3: `testOneGroup()`
- **Precondition:** One group, 3-9 teams, 1-4 fields
- **Input:** Dynamically generated
- **Procedure:** Manual, console output
- **Expected Result:** No conflicts in game scheduling

#### Test Case 4: `testTwoGroups()`
- **Precondition:** Two groups with different team counts
- **Procedure:** Manual with console
- **Expected Result:** No conflicts in games and referee assignments

### Backend API Tests

#### Endpoint: `/api/create`
- **Test Case:** Successful tournament creation
  - **Precondition:** No tournament exists
  - **Input Data:** Valid JSON with name, date, teams, games
  - **Procedure:** POST request to `/api/create`
  - **Expected Result:** Status 200, includes tournament ID

- **Test Case:** Reject empty body
  - **Input Data:** `{}`
  - **Expected Result:** Status 422, validation error

#### Endpoint: `/api/get_tournaments`
- **Test Case:** Return tournament list
  - **Precondition:** Tournament data exists
  - **Expected Result:** Status 200, list of tournaments

#### Endpoint: `/api/get_field_games`
- **Test Case:** Return games for valid field
  - **Precondition:** Valid tournament and field
  - **Expected Result:** Status 200, list of games

#### Endpoint: `/api/get_game_score`
- **Test Case:** Return correct score
  - **Precondition:** Game has stored score
  - **Expected Result:** Status 200, correct score

#### Endpoint: `/api/set_game_score`
- **Test Case:** Update score successfully
  - **Precondition:** Valid game exists
  - **Expected Result:** Status 200, score updated

#### Endpoint: `/api/get_tournament_details`
- **Test Case:** Return full tournament data
  - **Precondition:** All data available
  - **Expected Result:** Status 200, complete tournament data

## Test Results

- ✅ *Unit Tests:* All tests passed
- ✅ *Integration Tests:* No conflicts in game scheduling
- ✅ *API Tests:* All endpoints function as expected
- ❗ *Deviations:* Are logged and manually corrected

## Common error sources identified:
- Incorrect data types in request bodies
- Missing required fields
- Invalid date/time formats
- None returns from internal functions

## Consequences for Deviations

- Error analysis by developer
- Logic adjustment
- Re-test until all issues are resolved

## Notes

- Specifications define the required behavior
- Testable components are listed in the design documentation
- Error handling is managed by test management
- All errors were caught with appropriate status codes (400, 422, 500)
- Server remained stable during all test scenarios
