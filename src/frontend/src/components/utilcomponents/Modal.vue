<template>
	<div class="modal-overlay" @click.self="close">
		<div class="modal-content">
			<slot></slot>
			<div class="flex flex-row items-center justify-between">
				<button class="close-button" @click="close">Close</button>
				<button class="default-btn submit-button" @click="submit">Save Refs</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close", "submit"]);

function close() {
	emit("close");
}

function submit() {
	emit("submit");
}
</script>

<style scoped>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		width: 90%;
	}

	.close-button {
		margin-top: 10px;
		background: #f44336;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 4px;
		cursor: pointer;
	}

	.submit-button {
		background: var(--color-stura-main);
	}
</style>