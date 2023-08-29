/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        relay: {
            // This should match relay.config.js
            src: './',
            artifactDirectory: './__generated__',
            language: 'typescript',
            schema: './schema.graphql',
            eagerEsModules: false,
        }
    }
}

module.exports = nextConfig
