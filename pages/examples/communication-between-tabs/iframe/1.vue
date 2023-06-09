<script setup>
const counter = ref(1);
const iframe = ref();

function increase() {
	counter.value += 1;
	iframe.value.contentWindow.postMessage(counter.value);
}

function handleMessage(event) {
	// console.log(event);
	if (typeof event.data !== 'number') {
		return;
	}

	counter.value = event.data;
}

onMounted(() => {
	iframe.value.contentWindow.addEventListener('message', handleMessage);
});

onBeforeUnmount(() => window.removeEventListener('message', handleMessage));
</script>

<template>
	<main class="main">
		<h1>Iframe tab 1</h1>

		<div class="flex items-center gap-6">
			<p>Counter: {{ counter }}</p>
			<button
				class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
				@click="increase"
			>
				Increase
			</button>
		</div>

		<iframe
			ref="iframe"
			class="w-full border-2 border-r-2 mt-6"
			width="800"
			height="400"
			src="http://localhost:3000/examples/communication-between-tabs/iframe/2"
		>
		</iframe>
	</main>
</template>
