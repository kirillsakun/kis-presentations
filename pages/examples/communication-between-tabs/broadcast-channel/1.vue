<script setup>
const broadcastChanel = new BroadcastChannel('counterChannel');
const counter = ref(1);

function increase() {
	counter.value += 1;
	broadcastChanel.postMessage(counter.value);
}

broadcastChanel.onmessage = (event) => {
	counter.value = event.data;
};

onBeforeUnmount(() => broadcastChanel.close());
</script>

<template>
	<main class="main">
		<h1>Broadcast Channel tab 1</h1>

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
