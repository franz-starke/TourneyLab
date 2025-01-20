<script setup>
    import { inject } from 'vue';

    const appState = inject('appState');
</script>

<template>
    <div id="header">
        <div id="back" @click="appState='landing'">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
        </div>
        <div id="themeSwitcher">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
            </svg>
        </div>
    </div>

    <div id="inputWrapper">
        <h1>Turnier Beitreten</h1>

        <div id="qrCodeScanner">
            <div id="scanText">
                QR Code Scannen
            </div>
            <div id="scanButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                </svg>
            </div>
        </div>

        <div id="enterManuel">
            <div id="enterText">Oder Manuell Eingeben</div>
            <input id="enterCode" type="text" placeholder="Turnier-Code eingeben...">
        </div>

        <div id="join" class="gradient" @click="appState='home'">
            Beitreten
        </div>
    </div>
</template>

<style scoped>
    #header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 10px;
    }

    #back {
        margin-left: 10px;
        display: flex;
        background-color: white;
        border-radius: 50%;
        padding: 5px;
    }

    #themeSwitcher {
        margin-top: 2px;
        margin-right: 10px;
    }

    h1{
        font-size: 1.5em;
    }

    #inputWrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 85vh;
    }

    #scanText{
        font-size: 0.9em;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }

    #scanButton {
        align-items: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 80vw;
        height: 80vw;
        border-radius: 30px;
    }

    #enterManuel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #enterText {
        margin-bottom: 10px;
        opacity: 0.5;
    }

    #enterCode {
        border: none;
        background-color: white;
        border-radius: 30px;
        width: 80vw;
        height: 50px;
        font-weight: 600;
        font-size: 1.2em;
    }

    #enterCode::placeholder{
        text-align: center;
        opacity: 0.5;
    }

    #enterCode:focus-visible{
        border: none;
    }

    #join {
        color: white;
        display: flex;
        width: 80vw;
        height: 9vh;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        font-size: 1.5em;
    }

</style>