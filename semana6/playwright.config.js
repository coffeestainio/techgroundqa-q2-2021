module.exports = {
    // testDir: 'src/tests/mobi',
    workers: 3,
    use: {
        // Browser options
        headless: false,
        slowMo: process.env.SLOW_MO ? 2000 : 0,

        // Context options
        ignoreHTTPSErrors: true,

        // Artifacts
        screenshot: 'only-on-failure',
        video: 'retry-with-video',
    },
    projects: [
        {
            name: 'Desktop',
            testIgnore: '**/mobile/**',
            use: {
            // Configure the browser to use.
            browserName: 'chromium',
            },
        },
        {
            name: 'Mobile',
            testDir: `${process.cwd()}/tests/mobile`,
            use: { 
                browserName: 'firefox',
                viewport: { width: 320, height: 560 },
            },
        },
    ],
};