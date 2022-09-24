/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['en', 'pl'],
		defaultLocale: 'pl',
	},
};

module.exports = nextConfig;

