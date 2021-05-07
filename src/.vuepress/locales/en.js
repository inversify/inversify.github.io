const { defaultNavbar } = require('../defaults/navbar');
const { buildSidebar } = require('../utility/sidebarHelper');

const language = 'en'; // ie. /tr/
const languageUpper = 'US';
const languageName = 'English'; // Turkish

const enLocale = {
	[`/${language}/`]: {
		lang: `${language}-${languageUpper}`,
		title: `Documentation | ${languageName}`
	}
};

const sidebar = [
	{
		title: 'Guide',
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

// change this to first two letters + menus. ie. trMenus
const enMenus = {
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
	enLocale,
	enMenus
};
