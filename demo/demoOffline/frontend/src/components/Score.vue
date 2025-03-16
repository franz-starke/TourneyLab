<script setup>
	import { ref } from 'vue'
    const props = defineProps({
        id: {
            type:Number,
            required:true,
        },
        team1: {
            type: String,
            required: true,
        },
        team2: {
            type: String,
            required: true,
        },
        score1: {
            type: Number,
            required: true,
        },
        score2: {
            type: Number,
            required: true,
        },
    });

    const score1 = ref(props.score1);
    const score2 = ref(props.score2);

    function saveScore(){
        let storage = JSON.parse(localStorage.getItem("scores"));
        let data = storage[props.id] ||
        { 
            "actual" : [props.id,props.team1,props.team2,score1.value,score2.value],
            "copy" : [props.id,props.team1,props.team2,props.score1,props.score2] 
        };

        data["actual"][3] = score1.value;
        data["actual"][4] = score2.value;

        storage[props.id] = data;

        localStorage.setItem("scores",JSON.stringify(storage));
    }
</script>

<template>
    <div class="score">
        <div class="teams">
            {{ team1 }} vs. {{ team2 }}
        </div>
        <div class="scores">
            <input @input="saveScore()" type="number" min="0" max="25" v-model="score1" />
            -
            <input @input="saveScore()" type="number" min="0" max="25" v-model="score2" />
        </div>
    </div>
</template>

<style scoped>
    .score{
        display: flex;
        flex-direction: row;
        border-radius: 30px;
        background-color: white;
        padding: 20px;
	    font-size: 20px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
	    font-weight: 700;
        height: 80px;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
    }

    .scores{
        background-color: #D9D9D9;
        border-radius: 30px;
        padding: 10px;
        margin-left: 20px;
    }

    input {
        width:50px;
        border:none;
        background-color: transparent;
        text-align: center;
        font-weight: 700;
        font-size: 20px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
