<script setup></script>

<template>
	<div class="mask-example-3">
		<h1>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Contrary to popular belief,
			<br />
			Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
			over 2000 years old.
			<br />
			Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
			Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
			<br />
			literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
			Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
			the
			<br />
			ory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
			comes from a line in section 1.10.32.
		</h1>
	</div>
</template>

<style scoped>
.mask-example-3 {
	max-width: 100%;
	overflow: auto;

	mask-image: url('/images/css-features/mask-example-3-l.svg'), url('/images/css-features/mask-example-3-c.svg'),
		url('/images/css-features/mask-example-3-r.svg');
	mask-size: 150px 150px, calc(100% - 300px) auto, 150px 150px;
	mask-position: left center, center center, right center;
	mask-repeat: repeat-y, repeat-y, repeat-y;

	h1 {
		white-space: nowrap;
		-webkit-text-fill-color: white;
	}
}
</style>

<style>
.app.app--default {
	background-image: url('/images/css-features/bg.jpg') !important;
	background-size: cover;
	background-position: center;
}
</style>
