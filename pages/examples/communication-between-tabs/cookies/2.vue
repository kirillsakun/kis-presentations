<script setup lang="ts">
const counter = ref(1);

function increase() {
	counter.value += 1;
	document.cookie = `counter=${counter.value}`;
}

if (process.client) {
	const intervalId = setInterval(() => {
		counter.value =
			Number(
				document.cookie
					.split('; ')
					.find((row) => row.startsWith('counter='))
					?.split('=')[1]
			) || 1;
	}, 1000);

	onBeforeUnmount(() => window.clearInterval(intervalId));
}
</script>

<template>
	<main class="main">
		<h1>Cookies tab 2</h1>

		<div class="flex items-center gap-6">
			<p>Counter: {{ counter }}</p>
			<button
				class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
				@click="increase"
			>
				Increase
			</button>
		</div>
	</main>
</template>
