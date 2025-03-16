<script setup>
    import { inject } from 'vue';

    const appState = inject('appState');

</script>

<template>
    <div id="header">
        <div id="flags">
            <div id="de">
                <svg width="64" height="64" version="1.1" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect width="12.7" height="12.7" ry="2.036" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stop-color="#000000" />
                        <rect x="6.9389e-18" y="4.2333" width="12.7" height="4.2333" fill="#f00"/>
                        <path x="3.469447e-18" y="8.4666662" width="12.7" height="4.2333331" d="m0 8.4667h12.7v2.4541a1.7793 1.7793 135 0 1-1.7793 1.7793h-9.076a1.8447 1.8447 45 0 1-1.8447-1.8447z" fill="#ff0"/>
                    </g>
                </svg>
            </div>
            <div id="en">
                <svg width="64" height="64" version="1.1" viewBox="0 0 12.7 12.7" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect width="12.7" height="12.7" ry="2.036" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stop-color="#000000" />
                        <rect x="6.9389e-18" y="4.2333" width="12.7" height="4.2333" fill="#f00"/>
                        <path x="3.469447e-18" y="8.4666662" width="12.7" height="4.2333331" d="m0 8.4667h12.7v2.4541a1.7793 1.7793 135 0 1-1.7793 1.7793h-9.076a1.8447 1.8447 45 0 1-1.8447-1.8447z" fill="#ff0"/>
                    </g>
                </svg>
            </div>
        </div>
        <div id="themeSwitcher">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
            </svg>
        </div>
    </div>

    <div id="buttonWrapper">
        <div id="join" class="gradient" @click="appState='join'">
            <div id="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="164" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
            </div>
            <div id="text">
                Turnier Beitreten
            </div>
        </div>

        <div id="old" class="element">
            Alte Tuniere Einsehen
        </div>

        <div id="create" class="element">
            Eigenes Turnier Erstellen
        </div>
    </div>
</template>

<style scoped>
    #header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }
    #flags {
        display: flex;
        flex-direction: row;
        gap: 6vw;
    }

    #themeSwitcher {
        margin-right: 10px;
    }

    #buttonWrapper{
        width: 100%;
        height: 80vh;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    #join{
        display: flex;
        flex-direction: column;
        background-color: green;
        color: white;
        margin-top: 6vh;
        width: 80vw;
        height: 80vw;
        border-radius: 30px;
        justify-content: center;
    }

    #icon{
        padding-left: 13vw;
    }

    #text {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    #old {
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: 9vh;
        justify-content: center;
        align-items: center;
    }

    #create {
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: 9vh;
        justify-content: center;
        align-items: center;
    }

</style>