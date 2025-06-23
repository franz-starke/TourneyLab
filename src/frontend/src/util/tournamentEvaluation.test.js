// src/util/tournamentEvaluation.test.js
/* eslint-env vitest */
import { describe, it, expect } from "vitest";
import { evaluateTournamentData } from './tournamentEvaluation';
import { ref, unref } from "vue";

function createSampleTournament() {
  return {
    name: "Testturnier",
    date: "2024-06-07",
    groups: { "1": 3 },
    games: {
      "1": {
        "1": [1, 2, 3, "10:00", [2, 1]],
        "2": [1, 3, 2, "11:00", [1, 1]],
        "3": [2, 3, 1, "12:00", [3, 5]],
      }
    }
  };
}

describe('evaluateTournamentData', () => {
  it('berechnet korrekte Team-Statistiken und Rankings', () => {
    const result = evaluateTournamentData(createSampleTournament());

    expect(result.name).toBe("Testturnier");
    expect(result.date).toBe("2024-06-07");
    expect(result.groups).toHaveLength(1);

    const group = result.groups[0];
    expect(group.groupId).toBe("1");
    expect(group.teams).toHaveLength(3);

    const t1 = group.teams.find(t => t.id === "1");
    expect(t1).toMatchObject({
      games_played: 2,
      wins: 1,
      draws: 1,
      losses: 0,
      points: 4,
      score_diff: 1
    });

    const t2 = group.teams.find(t => t.id === "2");
    expect(t2).toMatchObject({
      games_played: 2,
      wins: 0,
      draws: 0,
      losses: 2,
      points: 0,
      score_diff: -3
    });

    const t3 = group.teams.find(t => t.id === "3");
    expect(t3).toMatchObject({
      games_played: 2,
      wins: 1,
      draws: 1,
      losses: 0,
      points: 4,
      score_diff: 2
    });

    expect(group.teams.map(t => t.id)).toEqual(["3", "1", "2"]);
    expect(group.teams[0].rank).toBe(1);
    expect(group.teams[1].rank).toBe(2);
    expect(group.teams[2].rank).toBe(3);
  });

  it('wertet zwei Leistungsgruppen korrekt aus', () => {
    const tournament = {
      name: "Doppelgruppen-Testturnier",
      date: "2024-06-07",
      groups: { "1": 3, "2": 3 },
      games: {
        "1": {
          "1": [1, 2, 3, "10:00", [2, 1]],
          "2": [1, 3, 2, "11:00", [1, 1]],
          "3": [2, 3, 1, "12:00", [0, 3]],
        },
        "2": {
          "1": [4, 5, 6, "10:30", [0, 2]],
          "2": [4, 6, 5, "11:30", [4, 4]],
          "3": [5, 6, 4, "12:30", [1, 0]],
        }
      }
    };

    const result = evaluateTournamentData(tournament);

    expect(result.groups).toHaveLength(2);

    const group1 = result.groups.find(g => g.groupId === "1");
    expect(group1.teams).toHaveLength(3);
    expect(group1.teams.map(t => t.id)).toEqual(["3", "1", "2"]);

    expect(group1.teams.find(t => t.id === "1")).toMatchObject({
      games_played: 2,
      wins: 1,
      draws: 1,
      losses: 0,
      points: 4,
      score_diff: 1,
    });

    const group2 = result.groups.find(g => g.groupId === "2");
    expect(group2.teams).toHaveLength(3);

    expect(group2.teams.find(t => t.id === "4")).toMatchObject({
      games_played: 2,
      wins: 0,
      draws: 1,
      losses: 1,
      points: 1,
      score_diff: -2,
    });

    expect(group2.teams.find(t => t.id === "5")).toMatchObject({
      games_played: 2,
      wins: 2,
      draws: 0,
      losses: 0,
      points: 6,
      score_diff: 3,
    });

    expect(group2.teams.find(t => t.id === "6")).toMatchObject({
      games_played: 2,
      wins: 0,
      draws: 1,
      losses: 1,
      points: 1,
      score_diff: -1,
    });
  });

  it('funktioniert auch mit einem Vue ref', () => {
    const tournament = ref(createSampleTournament());
    const result = evaluateTournamentData(tournament);
    expect(result.name).toBe("Testturnier");
  });

  it('gibt Defaults zurück, wenn Felder fehlen', () => {
    const result = evaluateTournamentData({});
    expect(result.name).toBe("(no name)");
    expect(result.date).toBe("(no date)");
    expect(result.groups).toHaveLength(0);
  });

  it('vergibt identische Ränge bei Punkte- und Torgleichheit korrekt', () => {
    const tournament = {
      name: "Platzgleichheit-Test",
      date: "2024-06-07",
      groups: { "1": 3 },
      games: {
        "1": {
          "1": [1, 2, 3, "10:00", [1, 1]],
          "2": [1, 3, 2, "11:00", [1, 0]],
          "3": [2, 3, 1, "12:00", [1, 0]],
        }
      }
    };

    const result = evaluateTournamentData(tournament);
    const group = result.groups[0];

    expect(group.teams).toHaveLength(3);

    const first  = group.teams[0];
    const second = group.teams[1];
    const third  = group.teams[2];

    expect(first.points).toBe(4);
    expect(second.points).toBe(4);
    expect(first.score_diff).toBe(1);
    expect(second.score_diff).toBe(1);
    expect(first.rank).toBe(1);
    expect(second.rank).toBe(1);
    expect(third.rank).toBe(3);
  });

  it('überspringt 0:0-Spiele korrekt', () => {
    const tournament = {
      name: "Nullspiel-Testturnier",
      date: "2024-06-07",
      groups: { "1": 2 },
      games: {
        "1": {
          "1": [1, 2, 1, "10:00", [0, 0]],
          "2": [1, 2, 1, "11:00", [3, 1]],
        }
      }
    };

    const result = evaluateTournamentData(tournament);
    const group = result.groups[0];

    expect(group.teams.find(t => t.id === "1")).toMatchObject({
      games_played: 1,
      wins:         1,
      draws:        0,
      losses:       0,
      points:       3,
      score_diff:   2
    });
    expect(group.teams.find(t => t.id === "2")).toMatchObject({
      games_played: 1,
      wins:         0,
      draws:        0,
      losses:       1,
      points:       0,
      score_diff:  -2
    });

    expect(group.teams.map(t => t.id)).toEqual(["1", "2"]);
  });

});
