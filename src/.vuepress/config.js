const { defaultSEO } = require('./seo/default');
const { defaultNavbar } = require('./defaults/navbar');

// Locale Imports
const { enLocale, enMenus } = require('./locales/en');
const { roLocale, roMenus } = require('./locales/ro');
const { esLocale, esMenus } = require('./locales/es');

const BASE_URL = 'https://inversify.io/';

const title = 'InversifyJS a powerful IoC container for JavaScript apps powered by TypeScript';
const desc = 'InversifyJS is a lightweight inversion of control (IoC) container for TypeScript and JavaScript apps.';
const card = BASE_URL + 'logo_inverse.png';

const meta = [
	['meta', { name: 'theme-color', content: '#ffffff' }],
	['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
	['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	['meta', { name: 'description', content: desc }],

	// Favicons
	['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' }],
	['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' }],
	['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' }],
	['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
	['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' }],
	['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
	['link', { rel: 'manifest', href: '/site.webmanifest' }],
	['link', { rel: 'manifest', href: '/favicon/manifest.json' }],
	['meta', { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' }],

	// SEO
	['meta', { name: 'description', content: desc }],
	[
		'meta',
		{
			name: 'keywords',
			content: 'dependency, inversion, javascript, typescript, nodejs, ioc, container, inversion, control'
		}
	],
	['meta', { name: 'author', content: 'Remo H. Jansen' }],

	// Twitter Crawler
	['meta', { name: 'twitter:card', content: 'summary_large_image' }],
	['meta', { name: 'twitter:site', content: '@OweR_ReLoaDeD' }],
	['meta', { name: 'twitter:creator', content: '@OweR_ReLoaDeD' }],
	['meta', { name: 'twitter:title', content: 'InversifyJS' }],
	['meta', { name: 'twitter:description', content: desc }],
	['meta', { name: 'twitter:image:src', content: card }],

	// Facebook Crawler
	['meta', { property: 'og:url', content: BASE_URL }],
	['meta', { property: 'og:title', content: 'InversifyJS' }],
	['meta', { property: 'og:description', content: desc }],
	['meta', { property: 'og:type', content: 'website' }],
	['meta', { property: 'og:image', content: card }],
	['meta', { property: 'og:locale', content: 'en_US' }],
	['meta', { property: 'og:site_name', content: BASE_URL }],

	// Fonts
	['link', { href: 'https://fonts.gstatic.com', rel: 'preconnect' }],
	[
		'link',
		{
			href:
				'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
			rel: 'stylesheet'
		}
	]
];

module.exports = {
	base: '/',
	title: title,
	description: desc,
	locales: {
		...enLocale,
		// Import all normal locales here.
		...roLocale,
		...esLocale
	},
	head: meta,
	themeConfig: {
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: true,
		smoothScroll: true,
		logo: '/logo.png',
		locales: {
			...enMenus,
			// Import  all locales for menus here.
			...roMenus,
			...esMenus
		},
		nav: [...defaultNavbar]
	},
	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom', ...defaultSEO]
};
