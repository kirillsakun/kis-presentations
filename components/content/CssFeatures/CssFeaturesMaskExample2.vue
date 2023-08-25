<script setup></script>

<template>
	<div class="mask-example-2">
		<img
			alt="<3"
			src="https://images.unsplash.com/photo-1542279836-8369a296a95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0LzYwMHg0MDB8fHx8fHwxNjkyOTYyMjM2&ixlib=rb-4.0.3&q=80&w=1080"
		/>
		<article>
			<h1>heading</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Contrary to popular belief, Lorem Ipsum is not simply
				random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
				Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
				literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
				Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
				on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
				sit amet..", comes from a line in section 1.10.32.
			</p>
		</article>
	</div>
</template>

<style scoped>
.mask-example-2 {
	position: relative;
	padding: 160px 40px 40px;
	z-index: 1;

	img {
		position: absolute;
		inset: 0 0 0 0;
		inset-block-end: auto;
		object-fit: cover;
		width: 100%;
		aspect-ratio: 2 / 1;
		z-index: -1;

		mask-image: url('/images/css-features/mask-example-2.svg');
		mask-size: 300px 300px;
		mask-position: top left;
		mask-repeat: repeat-x;
	}

	h1 {
		-webkit-text-fill-color: white;
	}
}
</style>
