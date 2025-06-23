import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        de: {
            landing: {
                enter: 'Turnier Beitreten',
                create: 'Neue Turniere Erstellen',
                old: 'Alte Turniere Einsehen'
            },
            enter: {
                joinT: 'Turnier Beitreten',
                scan: 'QR-Code Scannen',
                manual: 'Oder Manuell Eingeben',
                code: 'Turnier-Code Eingeben...',
                join: 'Beitreten',
            },
            create: {
                createT: "Turner Erstellen",
                name: "Turniername...",
                fields: "Anzahl Felder",
                groups: "Anzahl Leistungsgruppen",
                group: "Gruppe",
                teams: "Anzahl Teams",
                return: "Hin- und Rückspiel",
                date: "Datum",
                time: "Start Zeit",
                round: "Rundendauer (min)",
                break: "Pausendauer (min)",
                create: "Erstellen"
            },
            old: {
                oldT: "Vergangene Turniere",
                search: "Suche Turniername..."
            },
            home: {
                sync: "Spielstände Sync.",
                results: "Turnier Auswerten",
                downloadPdf: "PDF herunterladen"
            },
            sync: {
                offline: "QR-Code-Scanner für Offline Austauschen von Punkteständen:",
                code: "Turnier QR-Code"
            },
            result: {
                placement: "Platz",
                team: "Team",
                win: "Sieg",
                points: "Punkte"
            },
            games: {
                field: "Feld",
                team: "Team",
                ref: "Schiedsrichter"
            },
			teams: {
				pro: "Schwitzer"
			},
            settings: {
                lang: "App Sprache:",
                appe: "App Aussehen:",
                accent: "Akzent Farbe:",
                leave: "Turnier Verlassen",
                imprint: "Impressum"
            }
        },
        en: {
            landing: {
                enter: 'Join Tournament',
                create: 'Create New Tournament',
                old: 'View Past Tournaments'
            },
            enter: {
                joinT: 'Join Tournament',
                scan: 'Scan QR Code',
                manual: 'Or Enter Manually',
                code: 'Enter Tournament Code...',
                join: 'Join',
            },
            create: {
                createT: "Create Tournament",
                name: "Tournament Name...",
                fields: "Number of Fields",
                groups: "Number of Skill Groups",
                group: "Group",
                teams: "Number of Teams",
                return: "Home and Away Legs",
                date: "Date",
                time: "Start Time",
                round: "Round Duration (min)",
                break: "Break Duration (min)",
                create: "Create"
            },
            old: {
                oldT: "Past Tournaments",
                search: "Search Tournament Name..."
            },
            home: {
                sync: "Synchronize Scores",
                results: "Evaluate Tournament",
                downloadPdf: "Download PDF"
            },
            sync: {
                offline: "QR Code Scanner for Offline Score Synchronization:",
                code: "Tournament QR Code"
            },
            result: {
                placement: "Placement",
                team: "Team",
                win: "Win",
                points: "Points"
            },
            games: {
                field: "Field",
                team: "Team",
                ref: "Referee"
            },
			teams: {
				pro: "Tryhards"
			},
            settings: {
                lang: "App Language:",
                appe: "App Appearance:",
                accent: "Accent Color:",
                leave: "Leave Tournament",
                imprint: "Imprint"
            }
        }
    }
});


app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount('#app');

export { i18n }
