const { defaultNavbar } = require('../defaults/navbar');
const { buildSidebar } = require('../utility/sidebarHelper');

const language = 'en';
const languageUpper = 'US';
const languageName = 'English';

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
				title: 'Features and API',
				collapsable: false,
				children: buildSidebar(`/${language}/features-and-api/`)
			}
		]
	}
];

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
