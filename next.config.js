const withPwa = require('next-pwa');

module.exports = withPwa({
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/egift',
                permanent: true,
            },
        ];
    },
    pwa: {
        dest: 'public',
    },
});
