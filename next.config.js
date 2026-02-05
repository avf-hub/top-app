/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "old-images.hb.ru-msk.vkcs.cloud",
            port: "",
            pathname: "/**"
        }]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    output: "export"
}

module.exports = nextConfig
