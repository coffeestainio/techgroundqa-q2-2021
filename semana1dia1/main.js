const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://stanfordhealthcare.org')

    const links = await browser.$$('a')

    for (const link of links) {
        console.log('<< ', await link.getAttribute('href'));
    }

    // const apiLink = await browser.$('=API')
    // await apiLink.click()

    // await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()
})()