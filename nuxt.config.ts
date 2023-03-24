// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icons'],
	css: ['~/assets/css/tailwind.css'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	tailwindcss: {
		// add '~tailwind.config` alias
		exposeConfig: true
	},
	content: {
		highlight: {
			theme: 'material-ocean',
		}
	}
});
