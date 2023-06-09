<script setup>
const counter = ref(1);

function increase() {
	counter.value += 1;
	localStorage.setItem('counter', String(counter.value));
}

const handleStorage = (event) => {
	if (event.storageArea !== localStorage) return;
	if (event.key === 'counter') {
		counter.value = Number(event.newValue);
	}
};

if (process.client) {
	window.addEventListener('storage', handleStorage);
}

onBeforeUnmount(() => window.removeEventListener('storage', handleStorage));
</script>

<template>
	<main class="main">
		<h1>Locale storage tab 2</h1>

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
