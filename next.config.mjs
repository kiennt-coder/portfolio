/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	swcMinify: true,
	images: {
		domains: ["img.daisyui.com"],
	},
};

export default nextConfig;
