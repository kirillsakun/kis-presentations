<script setup>
const minSlideIndex = ref(1);
const currentPresentationData = ref(null);

const router = reactive(useRouter());

const dir = router.currentRoute.fullPath.replace(router.currentRoute.params.slug, '').replaceAll('/', '');

currentPresentationData.value = await queryContent(dir).find();

const slideIndex = computed(() => Number(router.currentRoute.params.slug));
const maxSlideIndex = computed(() => currentPresentationData?.value.length);

const prevSlideRoute = computed(() => `./${Math.max(slideIndex.value - 1, minSlideIndex.value)}`);
const nextSlideRoute = computed(() => `./${Math.min(slideIndex.value + 1, maxSlideIndex.value)}`);
</script>

<template>
	<div class="app app--default">
		<nav class="navigation">
			<menu
				class="flex"
				v-if="maxSlideIndex"
			>
				<li>
					<NuxtLink
						class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-bl"
						:to="prevSlideRoute"
					>
						Prev slide
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-br"
						:class="{}"
						:to="`./${nextSlideRoute}`"
					>
						Next slide
					</NuxtLink>
				</li>
			</menu>
		</nav>

		<main class="main">
			<NuxtPage />
		</main>
	</div>
</template>

<style>
.navigation {
	position: fixed;
	inset-block-start: 0;
	inset-inline: 0;
	display: grid;
	place-items: center;

	a {
		display: inline-block;
	}
}

.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
