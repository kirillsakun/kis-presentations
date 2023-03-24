<script setup>
const INITIAL_WIDTH = 100;

const width = ref(INITIAL_WIDTH);
const element = ref(null);

const easing = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

const updateWidth = (element, nextWidth, duration = 900) => {
	const previousWidth = Number.parseInt(element.style.width) || INITIAL_WIDTH;
	const diff = nextWidth - previousWidth;

	let start;

	function step(timestamp) {
		if (!start) {
			start = timestamp;
		}
		const timePassed = Math.round(timestamp - start);
		const progress = Math.min(timePassed / duration, 1); // [0, 1]

		const currentWidth = previousWidth + Math.floor(easing(progress) * diff);

		element.style.width = `${currentWidth}px`;

		if (progress < duration) {
			window.requestAnimationFrame(step);
		}
	}

	window.requestAnimationFrame(step);
};

const onWidthInput = () => {
	updateWidth(element.value, width.value);
}
</script>

<template>
	<div class="flex gap-6 pb-4">
		<input
			type="range"
			min="100"
			max="800"
			v-model.number="width"
			@input="onWidthInput"
		/>

		<div class="text-lg">Width: {{ width }}</div>
	</div>

	<div
		class="example"
		ref="element"
	></div>
</template>

<style scoped>
input {
	color-scheme: dark;
	accent-color: #059669;
}

.example {
	width: 100px;
	height: 40px;
	@apply bg-emerald-600 rounded-full;
}
</style>
