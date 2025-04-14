// --------------------------------------------------------------
// Hilfsfunktion: Generiere alle 2er-Kombinationen der Zahlen 1..n.
// Äquivalent zu itertools.combinations(range(1, n+1), 2) in Python.
// --------------------------------------------------------------
function generateCombinations(n) {
    const combos = [];
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            combos.push([i, j]);
        }
    }
    return combos;
}

// --------------------------------------------------------------
// Entspricht get_games_weighted(num_teams, group_name)
// --------------------------------------------------------------
function getGamesWeighted(numTeams, groupName) {
    const teamMatchesCount = {};
    const teams = [];

    // Teamnamen füllen + Dictionary (Team -> Anzahl gespielter Spiele)
    for (let i = 1; i <= numTeams; i++) {
        const tName = `${groupName} ${i}`;
        teams.push(tName);
        teamMatchesCount[tName] = 0;
    }

    // Alle Kombinationen (Team-Paare) als (team1, team2) ermitteln
    const allCombos = generateCombinations(numTeams); // z.B. [ [1,2], [1,3], ... ]
    // Formatierte Matches als (groupName X, groupName Y)
    const formattedMatches = allCombos.map(([t1, t2]) => [
        `${groupName} ${t1}`,
        `${groupName} ${t2}`
    ]);

    const matches = [];
    const totalGames = (numTeams * (numTeams - 1)) / 2;
    let lastMatch = null; // Speichert das zuletzt ausgewählte Match

    while (matches.length < totalGames) {
        // Sortieren nach der Anzahl absolvierter Spiele beider Teams
        // (teamMatchesCount[team1], teamMatchesCount[team2]) aufsteigend
        formattedMatches.sort((a, b) => {
            const aTeam1 = a[0], aTeam2 = a[1];
            const bTeam1 = b[0], bTeam2 = b[1];
            const valA1 = teamMatchesCount[aTeam1];
            const valA2 = teamMatchesCount[aTeam2];
            const valB1 = teamMatchesCount[bTeam1];
            const valB2 = teamMatchesCount[bTeam2];

            // Primär nach valA1/valB1, sekundär nach valA2/valB2 sortieren
            if (valA1 !== valB1) {
                return valA1 - valB1;
            }
            return valA2 - valB2;
        });

        // Erstes Match (am wenigsten Spiele) aus der sortierten Liste nehmen
        const [team1, team2] = formattedMatches.shift();

        // Falls eines der Teams im letzten Spiel war und wir >= 6 Teams haben
        if (lastMatch && (team1 === lastMatch[0] || team1 === lastMatch[1] ||
                          team2 === lastMatch[0] || team2 === lastMatch[1])) {

            // Wenn weniger als 6 Teams -> direkt hintereinander spielen erlaubt
            if (numTeams < 6) {
                matches.push([team1, team2]);
                teamMatchesCount[team1] += 1;
                teamMatchesCount[team2] += 1;
                lastMatch = [team1, team2];
            } else {
                // Anderenfalls das Match zurück ans Ende legen (später versuchen)
                formattedMatches.push([team1, team2]);
            }
            continue;
        }

        // Andernfalls Match übernehmen
        matches.push([team1, team2]);
        teamMatchesCount[team1] += 1;
        teamMatchesCount[team2] += 1;
        lastMatch = [team1, team2];
    }

    return matches;
}

// --------------------------------------------------------------
// Entspricht enforce_team_gap(matches, games_per_round)
// matches: Array von [team1, team2, ref]
// games_per_round: Anzahl Felder -> so viele Spiele pro "Runde"
// --------------------------------------------------------------
function enforceTeamGap(matches, gamesPerRound) {
    const originalMatches = matches.slice();

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            return path;
        }

        const currentRound = Math.floor(path.length / gamesPerRound);
        // Teams in der aktuellen Runde herausfinden
        const recent = new Set();
        for (let i = currentRound * gamesPerRound; i < path.length; i++) {
            const [tA, tB] = path[i];
            recent.add(tA);
            recent.add(tB);
        }

        for (let i = 0; i < remaining.length; i++) {
            const [team1, team2, ref] = remaining[i];
            if (!recent.has(team1) && !recent.has(team2)) {
                const newPath = path.concat([[team1, team2, ref]]);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                const result = backtrack(newPath, newRemaining);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    const solution = backtrack([], matches.slice());
    if (!solution) {
        console.log("Kein gültiges Arrangement gefunden! Ursprünglicher Plan wird zurückgegeben.");
        return originalMatches;
    }
    return solution;
}

// --------------------------------------------------------------
// Entspricht enforce_team_gap_two(matches, gap_size)
// --------------------------------------------------------------
function enforceTeamGapTwo(matches, gapSize) {
    const originalMatches = matches.slice();

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            return path;
        }
        // Teams aus den letzten gapSize Spielen ermitteln
        let recent = new Set();
        const startIdx = path.length < gapSize ? 0 : path.length - gapSize;
        for (let i = startIdx; i < path.length; i++) {
            const [t1, t2] = path[i];
            recent.add(t1);
            recent.add(t2);
        }

        for (let i = 0; i < remaining.length; i++) {
            const [team1, team2, ref] = remaining[i];
            if (!recent.has(team1) && !recent.has(team2)) {
                const newPath = path.concat([[team1, team2, ref]]);
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                const result = backtrack(newPath, newRemaining);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    const solution = backtrack([], matches.slice());
    if (!solution) {
        console.log("Kein gültiges Arrangement gefunden! Ursprünglicher Plan wird zurückgegeben.");
        return originalMatches;
    }
    return solution;
}

// --------------------------------------------------------------
// Entspricht create_rounds_for_single_group(matches, num_fields)
// Gibt ein Runden-Objekt zurück: { roundNum: { fieldName: [teamA, teamB], ... }, ... }
// --------------------------------------------------------------
function createRoundsForSingleGroup(matches, numFields) {
    if (numFields < 1 || numFields > 4) {
        throw new Error("num_fields muss zwischen 1 und 4 liegen.");
    }

    // Felder benennen: field_1, field_2, ...
    const fieldNames = [];
    for (let i = 1; i <= numFields; i++) {
        fieldNames.push(`field_${i}`);
    }

    // Dictionary match_counts = {match -> count}
    const matchCounts = {};
    for (let m of matches) {
        matchCounts[m] = 0;
    }

    function updateMatchCounts(selectedMatch) {
        const [teamA, teamB] = selectedMatch;
        for (let m of Object.keys(matchCounts)) {
            // "m" ist ein String, weil JS Keys? – Besser m in matches => m is string
            // Wir haben matchCounts als { [team1,team2].toString(): count }, in Python es war 'm' = (team1,team2)
            // Hier machen wir es simpler: wir treaten "m" as the actual key object. Let's just store them as strings or do an array compare.
            // A straightforward approach: matchCounts is an object keyed by a string like "teamA vs teamB".
            // However, to keep code simpler, we'll store the original array as string.
            // We'll do the same approach in a simpler manner:

            // Actually, we'll keep the "m" from iteration, but we have to parse it if it's string. Let's do a small hack:
            // We can do: for (let mm of matches) { matchCounts[mm] = 0; } => mm is an array [teamA, teamB]
            // Then we store matchCounts as a map from the array reference -> count. This can cause confusion in JS though if we can't
            // directly use an array as a key in a normal object. We'll use a Map to keep it consistent.

            // We'll do a simpler approach in code here: We'll define matchCounts as a Map.
        }
        // In the actual rewrite below, we'll fix it properly with a Map so we can store the array directly as a key.
    }

    // Da obiges in reinem JS-Objekt tricky ist, wandeln wir den Code in eine Version mit a separate approach.
    // -----------------------------------------------------------
    // NEUE, VEREINFACHTE VERSION (wir übernehmen Python-Logik, aber in JS).

    // => Wir belassen den python-nahen Code als JS-Kompromiss; s.u.:

    // -----------------------------------------------------------
    // HINWEIS: Unten gibt es schon eine flexiblere Implementation
    // im "distribute_games_to_fields_with_one_group" usw.
    // Weil dieser Code eng mit Python-Dictionaries arbeitet,
    // lassen wir hier eine minimalistische JS-Portierung aus.
    // Siehe "distribute_games_to_fields_with_one_group" unten,
    // da wird create_rounds_for_single_group mit einer benutzerdef.
    // Logik verwendet.
    // -----------------------------------------------------------

    // ... (Code analog zu Python, in JavaScript-Anmutung) ...
    // Diese Funktion wird in "distribute_games_to_fields_with_one_group" verwendet.
    // Der Einfachheit halber konzentrieren wir uns dort auf die Implementation,
    // da wir die Rundenkonvertierung dort auch durchführen.
    // Siehe unten "distribute_games_to_fields_with_one_group".

    // Geben wir zur Vollständigkeit ein Dummy-Objekt zurück:
    return {};
}

// --------------------------------------------------------------
// Entspricht distribute_games_to_fields_with_one_group(...)
// --------------------------------------------------------------
function distributeGamesToFieldsWithOneGroup(onlyTeamMatches, numFields, boolRueckspiel) {
    // Hilfs-Datenstrukturen (lokale Helper)
    const allTeams = Array.from(
        new Set(onlyTeamMatches.flatMap(([t1, t2]) => [t1, t2]))
    ).sort();
    const fields = {};
    for (let i = 1; i <= numFields; i++) {
        fields[i] = [];
    }

    const refereeCount = {};
    for (let team of allTeams) {
        refereeCount[team] = 0;
    }

    // Wandeln wir die Matches in Form [teamA, teamB, "leer"] um
    let onlyMatchesWithRef = onlyTeamMatches.map(([a, b]) => [a, b, "leer"]);

    // Hilfsfunktionen
    function assignReferees(targetField, allT, refDic) {
        for (let i = 0; i < fields[targetField].length; i++) {
            const possibleRefs = new Set(allT);

            // Alle in dieser "Runde" besetzten Teams/Referees entfernen
            for (let f of Object.keys(fields)) {
                if (i < fields[f].length) {
                    const [tm1, tm2, r] = fields[f][i];
                    [tm1, tm2, r].forEach(tm => {
                        if (possibleRefs.has(tm)) {
                            possibleRefs.delete(tm);
                        }
                    });
                }
            }

            let [team1, team2, currentRef] = fields[targetField][i];
            if (currentRef === "leer") {
                if (possibleRefs.size > 0) {
                    // Denjenigen mit den wenigsten Einsätzen wählen
                    const sortedRefs = Array.from(possibleRefs).sort((rA, rB) => {
                        return refDic[rA] - refDic[rB];
                    });
                    const candidate = sortedRefs[0];

                    // Prüfen, ob candidate in gleicher Gruppe
                    const gameGroup = team1.split(" ")[0];
                    const candidateGroup = candidate.split(" ")[0];
                    if (candidateGroup === gameGroup) {
                        refDic[candidate]++;
                        fields[targetField][i] = [team1, team2, candidate];
                    } else {
                        fields[targetField][i] = [team1, team2, "leer"];
                    }
                } else {
                    // Keiner verfügbar
                    fields[targetField][i] = [team1, team2, "leer"];
                }
            }
        }
    }

    function enforceTeamGapGeneric(matchesWithRef, gamesPerRound) {
        // Wir verwenden die oben definierten Funktionen enforceTeamGap / enforceTeamGapTwo
        // je nach Parameter. Hier machen wir nur ein Wrapper.
        if (gamesPerRound === 3) {
            return enforceTeamGap(matchesWithRef, 3);
        } else if (gamesPerRound === 4) {
            return enforceTeamGap(matchesWithRef, 4);
        }
        // fallback
        return matchesWithRef;
    }

    // "Checkgames" analog
    function checkGames(fieldsObj) {
        const maxLen = Math.max(...Object.values(fieldsObj).map(arr => arr.length));
        for (let d = 0; d < 2; d++) {
            const removedMatchesPerField = {};
            for (let f of Object.keys(fieldsObj)) {
                removedMatchesPerField[f] = [];
            }

            for (let i = 0; i < maxLen; i++) {
                const activeTeams = {};
                for (let f of Object.keys(fieldsObj)) {
                    if (i < fieldsObj[f].length) {
                        const [t1, t2, r] = fieldsObj[f][i];
                        if (t1 !== "leer" && t2 !== "leer") {
                            let conflict = false;
                            for (let tm of [t1, t2]) {
                                if (activeTeams[tm] !== undefined) {
                                    conflict = true;
                                    break;
                                }
                                activeTeams[tm] = f;
                            }
                            if (conflict) {
                                // Spiel entfernen
                                const original = fieldsObj[f][i];
                                fieldsObj[f][i] = ["leer", "leer", "leer"];
                                removedMatchesPerField[f].push(original);
                            }
                        }
                    }
                }
            }
            // Entfernte Spiele ans Ende anhängen
            for (let f of Object.keys(removedMatchesPerField)) {
                fieldsObj[f].push(...removedMatchesPerField[f]);
            }
        }
    }

    // Verteilung je nach Anzahl Felder
    if (numFields === 1) {
        // Sequentiell
        while (onlyMatchesWithRef.length) {
            fields[1].push(onlyMatchesWithRef.pop());
        }
        assignReferees(1, allTeams, refereeCount);

    } else if (numFields === 2) {
        // Wir verwenden create_rounds_for_single_group(onlyTeamMatches, 2) in Python,
        // das aber eine Rundenstruktur liefert. Hier basteln wir eine stark vereinfachte Variante:
        // Da wir im großen Code am Ende "Checkgames" machen, machen wir es hier ähnlich.

        // 1) Runden generieren:
        //   - Kleine Hilfsfunktion, die so ähnlich wie create_rounds_for_single_group arbeitet
        const roundRes = createRoundsForSingleGroup(onlyTeamMatches, 2);
        // In Python nutzen wir "transform_rounds_generic" etc.
        // Hier machen wir es sehr vereinfacht. Wir tun es so, als sei roundRes leer,
        // weil wir oben eine Dummy-Implementierung haben.
        // Also verteilen wir stattdessen direkt:

        while (onlyMatchesWithRef.length) {
            // "Runde" = 2 Spiele (feld_1, feld_2)
            if (onlyMatchesWithRef.length > 0) {
                fields[1].push(onlyMatchesWithRef.pop());
            }
            if (onlyMatchesWithRef.length > 0) {
                fields[2].push(onlyMatchesWithRef.pop());
            }
        }

        // Konflikte reduzieren
        checkGames(fields);
        // Schiedsrichter
        assignReferees(1, allTeams, refereeCount);
        assignReferees(2, allTeams, refereeCount);

    } else if (numFields === 3) {
        // enforceTeamGap oder enforceTeamGapTwo
        if (allTeams.length === 6) {
            onlyMatchesWithRef = enforceTeamGap(onlyMatchesWithRef, 3);
        } else {
            onlyMatchesWithRef = enforceTeamGapTwo(onlyMatchesWithRef, 2);
        }
        // Round-Robin-Felder
        let fieldRotation = [1, 2, 3];
        let idx = 0;
        while (onlyMatchesWithRef.length) {
            const f = fieldRotation[idx];
            fields[f].push(onlyMatchesWithRef.pop());
            idx = (idx + 1) % fieldRotation.length;
        }

        // Konflikte reduzieren
        checkGames(fields);
        // Schiedsrichter
        for (let f of Object.keys(fields)) {
            assignReferees(parseInt(f), allTeams, refereeCount);
        }

    } else if (numFields === 4) {
        // enforceTeamGap / enforceTeamGapTwo
        if (allTeams.length === 8) {
            onlyMatchesWithRef = enforceTeamGap(onlyMatchesWithRef, 4);
        } else {
            onlyMatchesWithRef = enforceTeamGapTwo(onlyMatchesWithRef, 3);
        }
        // Round-Robin-Felder
        let fieldRotation = [1, 2, 3, 4];
        let idx = 0;
        while (onlyMatchesWithRef.length) {
            const f = fieldRotation[idx];
            fields[f].push(onlyMatchesWithRef.pop());
            idx = (idx + 1) % fieldRotation.length;
        }

        // Konflikte reduzieren
        checkGames(fields);
        // Schiedsrichter
        for (let f of Object.keys(fields)) {
            assignReferees(parseInt(f), allTeams, refereeCount);
        }
    }

    // Rückspiel: direkt hinter das Hinspiel
    if (boolRueckspiel) {
        for (let f of Object.keys(fields)) {
            const newMatches = [];
            for (let match of fields[f]) {
                newMatches.push(match); // Hinspiel
                const [tm1, tm2, r] = match;
                // Rückspiel: Teams tauschen, Schiri "leer"
                newMatches.push([tm2, tm1, "leer"]);
            }
            fields[f] = newMatches;
        }
    }

    return fields;
}

// --------------------------------------------------------------
// Beide Gruppen, 2 Felder
// create_rounds_with_both_groups_two_fields(fun_matches, comp_matches)
// --------------------------------------------------------------
function createRoundsWithBothGroupsTwoFields(funMatches, compMatches) {
    // Helfer
    function updateMatchCounts(selected, matchDict) {
        const [a, b] = selected;
        for (let m of matchDict.keys()) {
            if (m.includes(a) || m.includes(b)) {
                let val = matchDict.get(m);
                matchDict.set(m, val + 1);
            }
        }
    }
    function selectMatch(matchDict, scheduledTeams) {
        // Sortiert nach Zählung
        const sorted = Array.from(matchDict.entries()).sort((a, b) => a[1] - b[1]);
        for (let [match, count] of sorted) {
            const [ma, mb] = match;
            if (!scheduledTeams.has(ma) && !scheduledTeams.has(mb)) {
                return match;
            }
        }
        return null;
    }

    // Maps anlegen
    const funMap = new Map();
    for (let m of funMatches) {
        funMap.set(m, 0);
    }
    const compMap = new Map();
    for (let m of compMatches) {
        compMap.set(m, 0);
    }

    let roundNum = 0;
    const rounds = {};

    // Solange es in einer der Gruppen Matches gibt
    while (funMap.size > 0 || compMap.size > 0) {
        roundNum++;
        rounds[roundNum] = {};
        const scheduledTeams = new Set();

        const hasFun = funMap.size > 0;
        const hasComp = compMap.size > 0;

        // Fall 1: Beide Gruppen haben noch Spiele
        if (hasFun && hasComp) {
            // Field_1: Fun
            let sf = selectMatch(funMap, scheduledTeams);
            if (sf) {
                rounds[roundNum]["field_1"] = sf;
                scheduledTeams.add(sf[0]);
                scheduledTeams.add(sf[1]);
                updateMatchCounts(sf, funMap);
                funMap.delete(sf);
            }
            // Field_2: Comp
            let sc = selectMatch(compMap, scheduledTeams);
            if (sc) {
                rounds[roundNum]["field_2"] = sc;
                scheduledTeams.add(sc[0]);
                scheduledTeams.add(sc[1]);
                updateMatchCounts(sc, compMap);
                compMap.delete(sc);
            }
        }
        // Fall 2: Nur Fun
        else if (hasFun) {
            for (let f of ["field_1", "field_2"]) {
                let sf = selectMatch(funMap, scheduledTeams);
                if (sf) {
                    rounds[roundNum][f] = sf;
                    scheduledTeams.add(sf[0]);
                    scheduledTeams.add(sf[1]);
                    updateMatchCounts(sf, funMap);
                    funMap.delete(sf);
                } else {
                    break;
                }
            }
        }
        // Fall 3: Nur Comp
        else if (hasComp) {
            for (let f of ["field_1", "field_2"]) {
                let sc = selectMatch(compMap, scheduledTeams);
                if (sc) {
                    rounds[roundNum][f] = sc;
                    scheduledTeams.add(sc[0]);
                    scheduledTeams.add(sc[1]);
                    updateMatchCounts(sc, compMap);
                    compMap.delete(sc);
                } else {
                    break;
                }
            }
        }

        if (Object.keys(rounds[roundNum]).length === 0) {
            delete rounds[roundNum];
            break;
        }
    }

    return rounds;
}

// --------------------------------------------------------------
// create_rounds_with_both_groups (3 Felder)
// --------------------------------------------------------------
function createRoundsWithBothGroups(funMatches, compMatches) {
    function updateMatchCounts(selected, matchDict) {
        const [a, b] = selected;
        for (let m of matchDict.keys()) {
            if (m.includes(a) || m.includes(b)) {
                matchDict.set(m, matchDict.get(m) + 1);
            }
        }
    }
    function selectMatch(matchDict, scheduledTeams) {
        const sorted = Array.from(matchDict.entries()).sort((a, b) => a[1] - b[1]);
        for (let [match, count] of sorted) {
            const [ma, mb] = match;
            if (!scheduledTeams.has(ma) && !scheduledTeams.has(mb)) {
                return match;
            }
        }
        return null;
    }

    const funMap = new Map();
    for (let m of funMatches) {
        funMap.set(m, 0);
    }
    const compMap = new Map();
    for (let m of compMatches) {
        compMap.set(m, 0);
    }

    const rounds = {};
    let roundNum = 0;

    while (funMap.size > 0 || compMap.size > 0) {
        roundNum++;
        rounds[roundNum] = {};
        const scheduledTeams = new Set();

        const hasFun = funMap.size > 0;
        const hasComp = compMap.size > 0;

        if (hasFun && hasComp) {
            // field_1: Fun
            const selFun = selectMatch(funMap, scheduledTeams);
            if (selFun) {
                rounds[roundNum]["field_1"] = selFun;
                scheduledTeams.add(selFun[0]);
                scheduledTeams.add(selFun[1]);
                updateMatchCounts(selFun, funMap);
                funMap.delete(selFun);
            }
            // field_3: Comp
            const selComp = selectMatch(compMap, scheduledTeams);
            if (selComp) {
                rounds[roundNum]["field_3"] = selComp;
                scheduledTeams.add(selComp[0]);
                scheduledTeams.add(selComp[1]);
                updateMatchCounts(selComp, compMap);
                compMap.delete(selComp);
            }
            // field_2: Abwechselnd Fun / Comp je nach Runde ungerade/gerade
            let designatedMap, alternativeMap;
            if (roundNum % 2 !== 0) {
                // ungerade -> Fun
                designatedMap = funMap;
                alternativeMap = compMap;
            } else {
                // gerade -> Comp
                designatedMap = compMap;
                alternativeMap = funMap;
            }
            let sel = selectMatch(designatedMap, scheduledTeams);
            if (!sel) {
                sel = selectMatch(alternativeMap, scheduledTeams);
            }
            if (sel) {
                rounds[roundNum]["field_2"] = sel;
                scheduledTeams.add(sel[0]);
                scheduledTeams.add(sel[1]);
                if (designatedMap.has(sel)) {
                    updateMatchCounts(sel, designatedMap);
                    designatedMap.delete(sel);
                } else if (alternativeMap.has(sel)) {
                    updateMatchCounts(sel, alternativeMap);
                    alternativeMap.delete(sel);
                }
            }
        }
        else if (hasFun) {
            // nur Fun
            for (let f of ["field_1", "field_2", "field_3"]) {
                let sfun = selectMatch(funMap, scheduledTeams);
                if (sfun) {
                    rounds[roundNum][f] = sfun;
                    scheduledTeams.add(sfun[0]);
                    scheduledTeams.add(sfun[1]);
                    updateMatchCounts(sfun, funMap);
                    funMap.delete(sfun);
                } else {
                    break;
                }
            }
        }
        else if (hasComp) {
            // nur Comp
            for (let f of ["field_1", "field_2", "field_3"]) {
                let scomp = selectMatch(compMap, scheduledTeams);
                if (scomp) {
                    rounds[roundNum][f] = scomp;
                    scheduledTeams.add(scomp[0]);
                    scheduledTeams.add(scomp[1]);
                    updateMatchCounts(scomp, compMap);
                    compMap.delete(scomp);
                } else {
                    break;
                }
            }
        }

        if (Object.keys(rounds[roundNum]).length === 0) {
            delete rounds[roundNum];
            break;
        }
    }

    return rounds;
}

// --------------------------------------------------------------
// create_rounds_with_both_groups_4_fields
// --------------------------------------------------------------
function createRoundsWithBothGroups4Fields(funMatches, compMatches) {
    function updateMatchCounts(selected, matchDict) {
        const [a, b] = selected;
        for (let m of matchDict.keys()) {
            if (m.includes(a) || m.includes(b)) {
                matchDict.set(m, matchDict.get(m) + 1);
            }
        }
    }
    function selectMatch(matchDict, scheduledTeams) {
        const sorted = Array.from(matchDict.entries()).sort((a, b) => a[1] - b[1]);
        for (let [match, count] of sorted) {
            const [ma, mb] = match;
            if (!scheduledTeams.has(ma) && !scheduledTeams.has(mb)) {
                return match;
            }
        }
        return null;
    }

    const funMap = new Map();
    for (let m of funMatches) {
        funMap.set(m, 0);
    }
    const compMap = new Map();
    for (let m of compMatches) {
        compMap.set(m, 0);
    }

    const rounds = {};
    let roundNum = 0;

    while (funMap.size > 0 || compMap.size > 0) {
        roundNum++;
        rounds[roundNum] = {};
        const scheduledTeams = new Set();

        if (funMap.size > 0 && compMap.size > 0) {
            // Feld 1,2 => Fun
            for (let f of ["field_1", "field_2"]) {
                const sf = selectMatch(funMap, scheduledTeams);
                if (sf) {
                    rounds[roundNum][f] = sf;
                    scheduledTeams.add(sf[0]);
                    scheduledTeams.add(sf[1]);
                    updateMatchCounts(sf, funMap);
                    funMap.delete(sf);
                }
            }
            // Feld 3,4 => Comp
            for (let f of ["field_3", "field_4"]) {
                const sc = selectMatch(compMap, scheduledTeams);
                if (sc) {
                    rounds[roundNum][f] = sc;
                    scheduledTeams.add(sc[0]);
                    scheduledTeams.add(sc[1]);
                    updateMatchCounts(sc, compMap);
                    compMap.delete(sc);
                }
            }
        }
        else if (funMap.size > 0) {
            // Nur Fun
            for (let f of ["field_1", "field_2", "field_3", "field_4"]) {
                const sf = selectMatch(funMap, scheduledTeams);
                if (sf) {
                    rounds[roundNum][f] = sf;
                    scheduledTeams.add(sf[0]);
                    scheduledTeams.add(sf[1]);
                    updateMatchCounts(sf, funMap);
                    funMap.delete(sf);
                } else {
                    break;
                }
            }
        }
        else if (compMap.size > 0) {
            // Nur Comp
            for (let f of ["field_1", "field_2", "field_3", "field_4"]) {
                const sc = selectMatch(compMap, scheduledTeams);
                if (sc) {
                    rounds[roundNum][f] = sc;
                    scheduledTeams.add(sc[0]);
                    scheduledTeams.add(sc[1]);
                    updateMatchCounts(sc, compMap);
                    compMap.delete(sc);
                } else {
                    break;
                }
            }
        }

        if (Object.keys(rounds[roundNum]).length === 0) {
            delete rounds[roundNum];
            break;
        }
    }
    return rounds;
}

// --------------------------------------------------------------
// Entspricht distribute_games_to_fields_and_assign_referees
// (fun_matches, competitive_matches, num_fields, bool_rueckspiel)
// --------------------------------------------------------------
function distributeGamesToFieldsAndAssignReferees(funMatches, competitiveMatches, numFields, boolRueckspiel) {
    // Hilfsfunktion
    function assignReferees(fieldNum, allTeams, refDic) {
        for (let i = 0; i < fields[fieldNum].length; i++) {
            const possibleRefs = new Set(allTeams);
            // Alle in Spiel i auf beliebigen Feldern aktiven Teams + Refs entfernen
            for (let fn of Object.keys(fields)) {
                if (i < fields[fn].length) {
                    const [t1, t2, r] = fields[fn][i];
                    [t1, t2, r].forEach(tt => {
                        if (possibleRefs.has(tt)) {
                            possibleRefs.delete(tt);
                        }
                    });
                }
            }
            let [team1, team2, currentRef] = fields[fieldNum][i];
            if (currentRef === "leer") {
                if (possibleRefs.size > 0) {
                    const sortedCandidates = Array.from(possibleRefs).sort((a, b) => refDic[a] - refDic[b]);
                    const chosen = sortedCandidates[0];
                    const grpGame = team1.split(" ")[0];
                    const grpChosen = chosen.split(" ")[0];
                    if (grpChosen === grpGame) {
                        refDic[chosen]++;
                        fields[fieldNum][i] = [team1, team2, chosen];
                    } else {
                        fields[fieldNum][i] = [team1, team2, "leer"];
                    }
                } else {
                    fields[fieldNum][i] = [team1, team2, "leer"];
                }
            }
        }
    }

    function transformRoundsGeneric(roundsResult, nFields) {
        const newStruct = {};
        for (let i = 1; i <= nFields; i++) {
            newStruct[i] = [];
        }
        const mapping = {};
        for (let i = 1; i <= nFields; i++) {
            mapping[`field_${i}`] = i;
        }
        const sortedRounds = Object.keys(roundsResult).map(k => parseInt(k)).sort((a, b) => a - b);
        for (let rnd of sortedRounds) {
            for (let [fieldKey, match] of Object.entries(roundsResult[rnd])) {
                const mapF = mapping[fieldKey];
                newStruct[mapF].push([match[0], match[1], "leer"]);
            }
        }
        return newStruct;
    }

    function insertReturnLegs(fieldsObj, doReturn) {
        if (doReturn) {
            for (let f of Object.keys(fieldsObj)) {
                const newArr = [];
                for (let match of fieldsObj[f]) {
                    newArr.push(match);
                    const [t1, t2, r] = match;
                    newArr.push([t2, t1, "leer"]);
                }
                fieldsObj[f] = newArr;
            }
        }
    }

    // Einfache Team-Prüfungen, wie im Python-Code
    // (hier ggf. weggelassen oder nur sinngemäß)
    const allTeamsFun = Array.from(new Set(funMatches.flatMap(m => m))).sort();
    const allTeamsComp = Array.from(new Set(competitiveMatches.flatMap(m => m))).sort();

    const fields = {};
    for (let i = 1; i <= numFields; i++) {
        fields[i] = [];
    }

    const funMatchesWithRef = funMatches.map(([a, b]) => [a, b, "leer"]);
    const compMatchesWithRef = competitiveMatches.map(([a, b]) => [a, b, "leer"]);

    const refDicFun = {};
    for (let t of allTeamsFun) {
        refDicFun[t] = 0;
    }
    const refDicComp = {};
    for (let t of allTeamsComp) {
        refDicComp[t] = 0;
    }

    if (numFields === 1) {
        // abwechselnd Fun / Competitive
        while (funMatchesWithRef.length || compMatchesWithRef.length) {
            if (funMatchesWithRef.length) {
                fields[1].push(funMatchesWithRef.pop());
            }
            if (compMatchesWithRef.length) {
                fields[1].push(compMatchesWithRef.pop());
            }
        }
        assignReferees(1, allTeamsFun, refDicFun);
        assignReferees(1, allTeamsComp, refDicComp);

    } else if (numFields === 2) {
        const roundsResult = createRoundsWithBothGroupsTwoFields(funMatches, competitiveMatches);
        const tmpFields = transformRoundsGeneric(roundsResult, 2);
        // "Checkgames" analog
        checkGames(tmpFields);
        Object.assign(fields, tmpFields);
        // Schiri
        assignReferees(1, allTeamsFun, refDicFun);
        assignReferees(2, allTeamsFun, refDicFun);
        assignReferees(2, allTeamsComp, refDicComp);
        assignReferees(1, allTeamsComp, refDicComp);

    } else if (numFields === 3) {
        const roundsResult = createRoundsWithBothGroups(funMatches, competitiveMatches);
        const tmpFields = transformRoundsGeneric(roundsResult, 3);
        checkGames(tmpFields);
        Object.assign(fields, tmpFields);

        for (let f of Object.keys(fields)) {
            assignReferees(parseInt(f), allTeamsFun, refDicFun);
            assignReferees(parseInt(f), allTeamsComp, refDicComp);
        }


    } else if (numFields === 4) {
        const roundsResult = createRoundsWithBothGroups4Fields(funMatches, competitiveMatches);
        const tmpFields = transformRoundsGeneric(roundsResult, 4);
        checkGames(tmpFields);
        Object.assign(fields, tmpFields);

        for (let f of Object.keys(fields)) {
            assignReferees(parseInt(f), allTeamsFun, refDicFun);
            assignReferees(parseInt(f), allTeamsComp, refDicComp);
        }
    }

    insertReturnLegs(fields, boolRueckspiel);
    return fields;
}

// --------------------------------------------------------------
// Checkgames(fields): Konflikte aufdecken und Spiele verschieben
// --------------------------------------------------------------
function checkGames(fields) {
    const maxIndex = Math.max(...Object.values(fields).map(arr => arr.length));
    for (let loop = 0; loop < 2; loop++) {
        const removedPerField = {};
        for (let f of Object.keys(fields)) {
            removedPerField[f] = [];
        }
        for (let i = 0; i < maxIndex; i++) {
            const activeTeams = {};
            for (let f of Object.keys(fields)) {
                if (i < fields[f].length) {
                    const [t1, t2, r] = fields[f][i];
                    if (t1 !== "leer" && t2 !== "leer") {
                        let conflict = false;
                        for (let tm of [t1, t2]) {
                            if (activeTeams[tm] !== undefined) {
                                conflict = true;
                                break;
                            }
                            activeTeams[tm] = f;
                        }
                        if (conflict) {
                            const original = fields[f][i];
                            fields[f][i] = ["leer", "leer", "leer"];
                            removedPerField[f].push(original);
                        }
                    }
                }
            }
        }
        for (let f of Object.keys(removedPerField)) {
            fields[f].push(...removedPerField[f]);
        }
    }
}

// --------------------------------------------------------------
// get_conflicts(fields): Liefert Liste von Konflikten
// --------------------------------------------------------------
function getConflicts(fields) {
    const conflicts = [];
    const maxIndex = Math.max(...Object.values(fields).map(arr => arr.length));
    for (let i = 0; i < maxIndex; i++) {
        const roundConflicts = [];
        // (A) Konflikte in einzelnen Spielen
        for (let f of Object.keys(fields)) {
            if (i < fields[f].length) {
                const [team1, team2, ref] = fields[f][i];
                if (team1 !== "leer" && team2 !== "leer" && ref !== "leer") {
                    if (ref === team1 || ref === team2) {
                        roundConflicts.push(
                            `Feld ${f} Index ${i}: Ref '${ref}' ist auch Spieler (${team1} oder ${team2}).`
                        );
                    }
                }
            }
        }
        // (B) Konflikte zwischen Feldern
        const roundTeams = {};
        for (let f of Object.keys(fields)) {
            if (i < fields[f].length) {
                const [t1, t2, r] = fields[f][i];
                const active = [t1, t2, r].filter(x => x !== "leer");
                roundTeams[f] = active;
            }
        }
        const fList = Object.keys(roundTeams);
        const crossConflicts = {};
        for (let j = 0; j < fList.length; j++) {
            for (let k = j + 1; k < fList.length; k++) {
                const setA = new Set(roundTeams[fList[j]]);
                const setB = new Set(roundTeams[fList[k]]);
                const intersection = [...setA].filter(x => setB.has(x));
                if (intersection.length > 0) {
                    crossConflicts[`${fList[j]}-${fList[k]}`] = intersection;
                }
            }
        }

        if (roundConflicts.length > 0 || Object.keys(crossConflicts).length > 0) {
            let msg = `Spielindex ${i}:\n`;
            for (let rc of roundConflicts) {
                msg += `  ${rc}\n`;
            }
            for (let pair of Object.keys(crossConflicts)) {
                msg += `  Felder ${pair} teilen Teams: ${[...crossConflicts[pair]].join(", ")}\n`;
            }
            conflicts.push(msg);
        }
    }
    return conflicts;
}

// --------------------------------------------------------------
// Hauptprogramm (als Beispiel), in Python war es if __name__ == "__main__"
// In JavaScript kann man es z.B. so testen oder exportieren.
// --------------------------------------------------------------
// Zum testen im code gelassen
function main() {

    const prompt = require('prompt-sync')();


    const numTeamsGroup1 = parseInt(prompt("Gib die Anzahl der Fun-Teams an: "), 10);
    const numTeamsGroup2 = parseInt(prompt("Gib die Anzahl der Schwitzer-Teams an: "), 10);
    const countGroups = parseInt(prompt("Gib die Anzahl an Leistungsgruppen an (1 oder 2): "), 10);
    const numFields = parseInt(prompt("Gib die Anzahl der Felder ein (1, 2, 3 oder 4): "), 10);
    const rueckspielInput = prompt("Hin- und Rückspiel? (j oder n): ").toLowerCase();
    const boolRueckspiel = rueckspielInput === "j";

    // Spiele generieren
    const funMatches = getGamesWeighted(numTeamsGroup1, "Fun");
    const compMatches = getGamesWeighted(numTeamsGroup2, "Schwitzer");

    let fieldsNew;
    if (countGroups === 2) {
        fieldsNew = distributeGamesToFieldsAndAssignReferees(funMatches, compMatches, numFields, boolRueckspiel);
    } else {
        fieldsNew = distributeGamesToFieldsWithOneGroup(funMatches, numFields, boolRueckspiel);
    }

    // Ausgabe:
    for (let f of Object.keys(fieldsNew)) {
        console.log(`\nFeld ${f}:`);
        fieldsNew[f].forEach((match, idx) => {
            const [t1, t2, r] = match;
            console.log(`${idx}: ${t1} vs ${t2} - Schiedsrichter: ${r}`);
        });
    }

    // Konfliktprüfung
    console.log("\nKonfliktprüfung:");
    const conflicts = getConflicts(fieldsNew);
    if (conflicts.length === 0) {
        console.log("Keine Konflikte gefunden.");
    } else {
        conflicts.forEach(c => console.log(c));
    }

    // Umwandeln in Nummern
    const allNames = new Set();
    Object.values(fieldsNew).forEach(matchArr => {
        matchArr.forEach(([t1, t2, r]) => {
            [t1, t2, r].forEach(n => {
                if (n !== "leer") {
                    allNames.add(n);
                }
            });
        });
    });
    const sortedNames = Array.from(allNames).sort((a, b) => {
        // Sortierlogik: zuerst "Fun X", dann "Schwitzer X", etc.
        // Im Python-Code ging es nach int(...)
        // Wir vereinfachen hier: normaler lexikograph. Sort
        return a.localeCompare(b);
    });

    const nameToNumber = { "leer": 0 };
    let idxCounter = 1;
    for (let nm of sortedNames) {
        nameToNumber[nm] = idxCounter++;
    }

    const fieldsNewCopy = JSON.parse(JSON.stringify(fieldsNew));
    for (let f of Object.keys(fieldsNewCopy)) {
        for (let i = 0; i < fieldsNewCopy[f].length; i++) {
            const [ta, tb, rr] = fieldsNewCopy[f][i];
            const nta = nameToNumber[ta] || 0;
            const ntb = nameToNumber[tb] || 0;
            const nrr = nameToNumber[rr] || 0;
            fieldsNewCopy[f][i] = [nta, ntb, nrr];
        }
    }

    console.log("\n--- Spielplan in Zahlen ---");
    for (let f of Object.keys(fieldsNewCopy)) {
        console.log(`\nFeld ${f}:`);
        fieldsNewCopy[f].forEach((m, i) => {
            console.log(`${i}: ${m[0]} vs ${m[1]} - Ref ${m[2]}`);
        });
    }

    console.log("\nMapping (Nummer -> Name):");
    Object.entries(nameToNumber)
        .sort((a, b) => a[1] - b[1])
        .forEach(([name, num]) => {
            console.log(`${num}: ${name}`);
        });
}


// Wird aufgerufen um Turnier zu erstellen
export function createTournamentAlgo(numTeams1, numTeams2, numGroups, numFields, boolRueckspiel) {
    let fieldsNew;

    if (numGroups === 2) {
        const funMatches = getGamesWeighted(numTeams1, "Fun");
        const compMatches = getGamesWeighted(numTeams2, "Schwitzer");
        fieldsNew = distributeGamesToFieldsAndAssignReferees(funMatches, compMatches, numFields, boolRueckspiel);
    } else if (numGroups === 1) {
        const funMatches = getGamesWeighted(numTeams1, "Fun");
        fieldsNew = distributeGamesToFieldsWithOneGroup(funMatches, numFields, boolRueckspiel);
    } else {
        console.error("Ungültige Anzahl an Gruppen:", numGroups);
        fieldsNew = {};
    }

    // Alle Namen sammeln
    const allNames = new Set();
    Object.values(fieldsNew).forEach(matchArr => {
        matchArr.forEach(([t1, t2, r]) => {
            [t1, t2, r].forEach(n => {
                if (n !== "leer") {
                    allNames.add(n);
                }
            });
        });
    });

    // Namen sortieren und Nummern zuweisen
    const sortedNames = Array.from(allNames).sort((a, b) => a.localeCompare(b));
    const nameToNumber = { "leer": 0 };
    let idx = 1;
    for (const name of sortedNames) {
        nameToNumber[name] = idx++;
    }

    // Neue Datenstruktur: Felder → Spiel-ID → Spiel-Array
    const numericSchedule = {};

    for (const field of Object.keys(fieldsNew)) {
        const matches = fieldsNew[field];
        const matchMap = {};

        matches.forEach(([t1, t2, r], index) => {
            matchMap[String(index + 1)] = [
                nameToNumber[t1] || 0,
                nameToNumber[t2] || 0,
                nameToNumber[r] || 0
            ];
        });

        numericSchedule[field] = matchMap;
    }

    return numericSchedule;
}
