const { defaultNavbar } = require('../defaults/navbar');
const { buildSidebar } = require('../utility/sidebarHelper');

const language = 'ro';
const languageUpper = 'ro';
const languageName = 'Română';

const roLocale = {
	[`/${language}/`]: {
		lang: `${language}-${languageUpper}`,
		title: `Documentație | ${languageName}`
	}
};

const sidebar = [
	{
		title: 'Ghid',
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

const roMenus = {
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
	roLocale,
	roMenus
};
