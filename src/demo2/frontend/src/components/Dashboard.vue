<script setup>

</script>

<template>
    <div id="wrapper">
        <div id="quickEnterPoints" class="gradient">
            <div id="pointsText">
                Punkte Eintragen
            </div>
            <div id="penIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                </svg>
            </div>
        </div>

        <div id="quickDisplay1">
            <div class="quickScore">
                <div class="team">
                    Team Fun 1
                </div>
                <div class="score">
                    5
                </div>
            </div>
            
            <div class="quickScore">
                <div class="team">
                    Team Fun 6
                </div>
                <div class="score">
                    5
                </div>
            </div>  
        </div>

        <div id="quickDisplay2">
            <div class="quickScore">
                <div class="team">
                    Team Schwitzer 1
                </div>
                <div class="score">
                    5
                </div>
            </div>
            
            <div class="quickScore">
                <div class="team">
                    Team Schwitzer 6
                </div>
                <div class="score">
                    5
                </div>
            </div>  
        </div>

        <div id="quickEnterPoints" class="gradient">
            <div id="pointsText">
                Punkte Eintragen
            </div>
            <div id="penIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                    <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
                    <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
                    <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
                    <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"/>
                    <path d="M12 9h2V8h-2z"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    #quickEnterPoints{
        display: flex;
        width: 80vw;
        height: 8vh;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 30px;
    }

    .quickScore {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }

    .score {
        padding: 10px;
        background-color: #D9D9D9;
        border-radius: 30px;
    }

    #quickDisplay1, #quickDisplay2 {
        display: flex;
        flex-direction: column;
        width: 80vw;
        height: 50vw;
        font-size: 1.2em;
        border-radius: 30px;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
    }
</style>