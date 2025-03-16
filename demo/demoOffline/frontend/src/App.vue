<script setup>
	import Score from './components/Score.vue';
	import axios from 'axios'
	import { ref } from 'vue'

	let scores = ref([]);

	function getData(){
		new Promise((resolve, reject) => {
			axios.get("http://127.0.0.1:8000/").then(
				response => { 
					if (response.data) {
						let scoreMap = {};
						response.data.data.forEach(element => {
							scoreMap[element[0]] = { "actual" : element, "copy" : element };
						});
						localStorage.setItem("scores",JSON.stringify(scoreMap));
						scores.value = response.data.data;
						resolve();
					} 
				}
			).catch(err => {
				scores.value = []
				let storage = JSON.parse(localStorage.getItem("scores"));
				for (const key in storage) {
					scores.value.push(storage[key]["actual"])
				}
				resolve();
      		});
    	});
	}

	function saveData(){
		let storage = JSON.parse(localStorage.getItem("scores"));
		for (const key in storage) {
			if (storage[key]["actual"][3] != storage[key]["copy"][3] || storage[key]["actual"][4] != storage[key]["copy"][4]){
				axios.put("http://127.0.0.1:8000/scores/"+key,{"score1":storage[key]["actual"][3],"score2":storage[key]["actual"][4]}).then( 
					response => { 
						if (response.data.status_code == 200) {
							storage[key]["copy"] = storage[key]["actual"]
						}
					}
				);
			}
		}
		localStorage.setItem("scores",JSON.stringify(storage));
	}

</script>

<template>
	<div id="wrapper">
		<button @click="getData()">Get Data</button>
		<div id="ScoreTable">
			<Score v-for="score in scores" 
				:id=score[0] 
				:team1=score[1]  
				:team2=score[2] 
				:score1=score[3] 
				:score2=score[4] />
		</div>
		<button @click="saveData()" class="submit">
			Save
		</button>
	</div>
</template>

<style scoped>
	#wrapper {
		display: flex;
		color: black;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 30px;
	}
	button {
		margin-bottom: 20px;
	}
	.submit {
		color: white;
		background: linear-gradient(90deg,#0DEEB9,#24EC3C);	
	}
</style>
