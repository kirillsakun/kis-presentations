<script setup></script>

<template>
	<div class="mask-example-1"></div>
</template>

<style scoped>
.mask-example-1 {
	width: 100%;
	aspect-ratio: 2 / 1;

	background-color: rgba(255, 255, 255, 1);
	background-image: url('https://images.unsplash.com/photo-1534803359379-964dadf6c290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0LzYwMHg0MDB8fHx8fHwxNjkyOTYyMTky&ixlib=rb-4.0.3&q=80&w=1080');
	background-size: cover;

	mask-image: url('/images/css-features/mask-example-1.svg');
	mask-size: 400px 400px;
	mask-position: center;
	mask-repeat: no-repeat;
	transition: mask-position 1s ease-in-out;
}
</style>
