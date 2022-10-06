/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['pl', 'en'],
		defaultLocale: 'pl',
	},
};

module.exports = nextConfig;

