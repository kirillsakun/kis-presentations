<script setup></script>

<template>
	<button class="button">Button</button>
</template>

<style scoped>
@layer reset, utilities, components;

@layer reset {
	button {
		border: none;
		background-color: transparent;
		border-radius: 0;
	}
}

@layer utilities {
	.button {
		background: #224756;
		border-radius: 100px;
		color: white;
	}
}
</style>
