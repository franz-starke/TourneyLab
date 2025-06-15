import { 
    getGamesWeighted, 
    distributeGamesToFieldsWithOneGroup, 
    distributeGamesToFieldsAndAssignReferees, 
    getConflicts 
} from './tournamentalgo.js';

function testOneGroup() {
    console.log("Tests für 1 Gruppe:");
    let anyConflict = false;
    const ranges = {1: [3,4], 2: [4,5], 3: [6,7], 4: [8,9]};
    for (const [numFields, teamRange] of Object.entries(ranges)) {
        for (let numTeams = teamRange[0]; numTeams <= teamRange[1]; numTeams++) {
            const funMatches = getGamesWeighted(numTeams, "Fun");
            try {
                const fieldsPlan = distributeGamesToFieldsWithOneGroup(funMatches, parseInt(numFields), false);

                const conflicts = getConflicts(fieldsPlan);
                if (conflicts.length > 0) {
                    anyConflict = true;
                    console.log(`\nKonflikt für 1 Gruppe: Felder ${numFields}, Teams ${numTeams}`);
                    conflicts.forEach(msg => console.log(msg));
                    for (const field in fieldsPlan) {
                        console.log(`\nFeld ${field}:`);
                        fieldsPlan[field].forEach(([team1, team2, referee], idx) => {
                            console.log(`${idx}: ${team1} vs ${team2} - Schiedsrichter: ${referee}`);
                        });
                    }
                }
            } catch (e) {
                anyConflict = true;
                console.log(`[Fehler 1 Gruppe] Felder: ${numFields}, Teams: ${numTeams} => Exception: ${e}`);
            }
        }
    }
    if (!anyConflict) {
        console.log("Für die Tests mit einer Gruppe gab es keine Konflikte.");
    }
}


function testTwoGroups() {
    console.log("Tests für 2 Gruppen:");
    let anyConflict = false;
    const ranges = {2: [4,5], 3: [5,7], 4: [8,9]};
    for (const [numFields, teamRange] of Object.entries(ranges)) {
        for (let teamsFun = teamRange[0]; teamsFun <= teamRange[1]; teamsFun++) {
            for (let teamsComp = teamRange[0]; teamsComp <= teamRange[1]; teamsComp++) {
                const funMatches = getGamesWeighted(teamsFun, "Fun");
                const compMatches = getGamesWeighted(teamsComp, "Schwitzer");
                try {
                    const fieldsPlan = distributeGamesToFieldsAndAssignReferees(
                        funMatches, compMatches, parseInt(numFields), false
                    );
                    const conflicts = getConflicts(fieldsPlan);
                    if (conflicts.length > 0) {
                        anyConflict = true;
                        console.log(`\nKonflikt für 2 Gruppen: Felder ${numFields}, Fun-Teams ${teamsFun}, Schwitzer-Teams ${teamsComp}`);
                        conflicts.forEach(msg => console.log(msg));
                        for (const field in fieldsPlan) {
                            console.log(`\nFeld ${field}:`);
                            fieldsPlan[field].forEach(([team1, team2, referee], idx) => {
                                console.log(`${idx}: ${team1} vs ${team2} - Schiedsrichter: ${referee}`);
                            });
                        }
                    }
                } catch (e) {
                    anyConflict = true;
                    console.log(`[Fehler 2 Gruppen] Felder: ${numFields}, Fun: ${teamsFun}, Schwitzer: ${teamsComp} => Exception: ${e}`);
                }
            }
        }
    }
    if (!anyConflict) {
        console.log("Für die Tests mit zwei Gruppen gab es keine Konflikte.");
    }
}

// Starte die Tests
testOneGroup();
testTwoGroups();
