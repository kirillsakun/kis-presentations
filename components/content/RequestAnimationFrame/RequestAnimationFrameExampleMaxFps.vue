<script setup>
const INITIAL_WIDTH = 100;

const width = ref(INITIAL_WIDTH);
const duration = ref(900);
const maxFps = ref(30);
const element = ref();
const animationId = ref();

const easing = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

const cancelAnimation = () => {
	if (animationId.value) {
		window.cancelAnimationFrame(animationId.value);
		animationId.value = undefined;
	}
};

const updateWidth = (element, nextWidth, duration, maxFps) => {
	cancelAnimation();

	const previousWidth = Number.parseFloat(element.style.width) || INITIAL_WIDTH;
	const widthDifference = nextWidth - previousWidth;
	const frameDuration = 1000 / maxFps;

	let startTime;
	let lastFrameTime = Date.now();

	function step(timestamp) {
		if (!startTime) {
			startTime = timestamp;
		}

		const currentTime = Date.now();
		const deltaTime = currentTime - lastFrameTime;

		const timePassed = Math.round(timestamp - startTime);
		const progress = Math.min(timePassed / duration, 1);

		if (deltaTime > frameDuration || progress === 1) {
			lastFrameTime = currentTime - (deltaTime % frameDuration);

			const currentWidth = previousWidth + Math.floor(easing(progress) * widthDifference);
			element.style.width = `${currentWidth}px`;
		}

		if (progress < 1) {
			animationId.value = window.requestAnimationFrame(step);
		} else {
			cancelAnimation();
		}
	}

	animationId.value = window.requestAnimationFrame(step);
};

const onWidthInput = () => {
	updateWidth(element.value, width.value, duration.value, maxFps.value);
};
</script>

<template>
	<div class="flex gap-6 pb-4">
		<div class="flex flex-col">
			<label
				class="text-lg"
				for="width-input"
			>
				Width: {{ width }}
			</label>
			<input
				id="width-input"
				v-model.number="width"
				type="range"
				min="100"
				max="800"
				@input="onWidthInput"
			/>
		</div>

		<div class="flex flex-col">
			<label
				class="text-lg"
				for="duration-input"
			>
				Duration: {{ duration }}
			</label>
			<input
				id="duration-input"
				v-model.number="duration"
				type="range"
				min="100"
				max="5000"
			/>
		</div>

		<div class="flex flex-col">
			<label
				class="text-lg"
				for="max-fps-input"
			>
				Max fps: {{ maxFps }}
			</label>
			<input
				id="duration-input"
				v-model.number="maxFps"
				type="range"
				min="2"
				max="60"
			/>
		</div>

		<button
			class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
			@click="cancelAnimation"
		>
			Cancel
		</button>
	</div>

	<div
		ref="element"
		class="example"
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
