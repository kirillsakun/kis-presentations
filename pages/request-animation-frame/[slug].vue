<template>
	<div class="slide">
		<ContentDoc></ContentDoc>
	</div>
</template>
<style scoped>

.slide {
	@apply max-w-4xl mx-auto;
}

:deep(h1) {
	@apply font-bold text-6xl tracking-tight mb-8;

	background: -webkit-linear-gradient(270deg, #6ee7b7, #34d399 80%);
	background-clip: border-box;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
:deep(h2) {
	@apply font-bold text-2xl mb-4 mt-6;
}

:deep(h3) {
	@apply font-bold text-xl mb-2 mt-4;
}

:deep(h2 a) {
	color: inherit;
}

:deep(h3 a) {
	color: inherit;
}

:deep(a) {
	@apply text-emerald-500;
}

:deep(blockquote) {
	@apply rounded-r-md py-4 px-6 my-6 border-l-4;
	background-color: #263238;
}

:deep(pre) {
	@apply rounded-md py-1 px-6 my-6;
	background-color: #263238;
}

:deep(code) {
	@apply rounded-md py-0.5 px-2;
	background-color: #263238;
}

:deep(ol) {
	list-style: decimal inside;
}

:deep(ul) {
	list-style: inside;
}


:deep(img) {
	@apply rounded-md my-4 border border-gray-800;
}

:deep(summary) {
	@apply text-lg rounded-md py-2 px-6 mt-6 -mb-2;

	background-color: #263238;
}

</style>
