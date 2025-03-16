<script setup>
	import { createApp } from 'vue';
	import Landing from './components/Landing.vue';
	import Join from './components/Join.vue';
	import Home from './components/Home.vue';
	import axios from 'axios'
	import { ref, provide } from 'vue'
	
	const appState = ref('landing');
	provide('appState', appState);

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
		<Landing v-if="appState === 'landing'"/>
		<Join v-if="appState === 'join'"/>
		<Home v-if="appState === 'home'"/>
	</div>
</template>

<style scoped>
	#wrapper {
		display: flex;
		color: black;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 4%;
	}

	.submit {
		color: white;
		background: linear-gradient(90deg,#0DEEB9,#24EC3C);	
	}
</style>
