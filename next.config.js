module.exports = {
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
};
