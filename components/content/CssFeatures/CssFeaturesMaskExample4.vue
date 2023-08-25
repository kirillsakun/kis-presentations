<script setup>
const masksize = ref(400);
const x = ref(0);
const y = ref(0);

const onMousemove = (event) => {
	const rect = event.target.getBoundingClientRect();
	x.value = event.clientX - rect.left;
	y.value = event.clientY - rect.top;
};

const maskPosition = computed(() => {
	return `${x.value - masksize.value / 2}px ${y.value - masksize.value / 2}px`;
});
</script>

<template>
	<div
		ref="block"
		class="mask-example-4"
		@mousemove="onMousemove"
	></div>
</template>

<style scoped>
.mask-example-4 {
	width: 100%;
	aspect-ratio: 1 / 1;

	background-color: rgba(255, 255, 255, 1);
	background-image: url('https://images.unsplash.com/photo-1508186760776-48c992ac4ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0LzYwMHg0MDB8fHx8fHwxNjkyOTYyMjIw&ixlib=rb-4.0.3&q=80&w=1080');
	background-size: cover;

	mask-image: url('/images/css-features/mask-example-1.svg');
	mask-size: 400px 400px;
	mask-position: v-bind(maskPosition);
	mask-repeat: no-repeat;
}
</style>
