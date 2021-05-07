const defaultSEO = [
	[
		'seo',
		{
			publishedAt: () => new Date(Date.now()).toISOString(),
			modifiedAt: () => new Date(Date.now()).toISOString()
		}
	],
	[
		'robots',
		{
			host: 'https://inversify.io/',
			allowAll: true,
			sitemap: '/sitemap.xml'
		}
	]
];

module.exports = {
	defaultSEO
};
