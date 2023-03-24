<script setup>
const width = ref(400);

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
				type="range"
				min="100"
				max="800"
				v-model.number="width"
			/>
		</div>
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
	height: 40px;
	@apply bg-emerald-600 rounded-full;
}
</style>
