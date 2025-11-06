import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
	return {
		rewrites: {
			'README.md': 'index.md',
			'(.*)/README.md': '(.*)/index.md',
		},
		base: mode === 'production' ? '/airmash/' : '/',
		title: 'parsehex/airmash',
		description: "Info about stuff I've made for the game AIRMASH",
		themeConfig: {
			// https://vitepress.dev/reference/default-theme-config
			nav: [
				{ text: 'parsehex on GitHub', link: 'https://github.com/parsehex' },
			],

			sidebar: undefined,

			socialLinks: [
				{ icon: 'github', link: 'https://github.com/parsehex/airmash' },
			],
		},
	};
});
