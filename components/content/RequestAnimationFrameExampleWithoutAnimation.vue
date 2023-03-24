<script setup>
const INITIAL_WIDTH = 100;

const width = ref(INITIAL_WIDTH);

</script>

<template>
	<div class="flex gap-6 pb-4">
		<input
			type="range"
			min="100"
			max="800"
			v-model.number="width"
		/>

		<div class="text-lg">Width: {{ width }}</div>
	</div>

	<div
		class="example"
		:style="{width: `${width}px`}"
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
