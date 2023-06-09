<script setup>
const counter = ref(1);

function increase() {
	counter.value += 1;
	window.postMessage(counter.value, '*');
	console.log(window);
}

function handleMessage(event) {
	if (typeof event.data !== 'number') {
		return;
	}

	counter.value = event.data;
}

if (process.client) {
	window.addEventListener('message', handleMessage);
}

onBeforeUnmount(() => window.removeEventListener('message', handleMessage));
</script>

<template>
	<main class="main">
		<h1>Iframe tab 2</h1>

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
