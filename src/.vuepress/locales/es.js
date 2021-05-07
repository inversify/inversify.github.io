const { defaultNavbar } = require('../defaults/navbar');
const { buildSidebar } = require('../utility/sidebarHelper');

const language = 'es';
const languageUpper = 'ES';
const languageName = 'Español';

const esLocale = {
	[`/${language}/`]: {
		lang: `${language}-${languageUpper}`,
		title: `Documentación | ${languageName}`
	}
};

const sidebar = [
	{
		title: 'Guía',
		collapsable: false,
		children: [
			{
				collapsable: false,
				children: buildSidebar(`/${language}/why-inversifyjs/`)
			},
			{
				collapsable: false,
				children: buildSidebar(`/${language}/introduction/`)
			},
			{
				collapsable: false,
				children: buildSidebar(`/${language}/getting-started/`)
			},
			{
				collapsable: false,
				children: buildSidebar(`/${language}/ecosystem/`)
			},
			{
				title: 'Features and API',
				collapsable: false,
				children: buildSidebar(`/${language}/features-and-api/`)
			}
		]
	}
];

const esMenus = {
	[`/${language}/`]: {
		label: languageName,
		nav: [...defaultNavbar],
		sidebar: {
			collapsable: false,
			[`/${language}/`]: sidebar
		},
		sidebarDepth: 3
	}
};

module.exports = {
	esLocale,
	esMenus
};
