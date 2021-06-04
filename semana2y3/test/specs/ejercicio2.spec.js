const HomePage = require('../pageobjects/home.page');
const VisionInsurance = require('../pageobjects/vision-insurance.page');

describe('EJERCICIO2 Find my benefits',() => {

    before(async ()=> {
        // vaya al home page
        await browser.url('/');
    });

    it('should be able to scroll the page', async () => {  
        console.log('in NODE')
        await browser.execute( () => window.scrollBy(0, 100));
        await browser.execute( () => console.log('IN BROWSER'));

        await browser.pause(3000);

        const el = await $('[data-selenium-id=lnkSignIn]')
        await browser.execute( (elemento) => elemento.click(), el );

        await browser.execute( ()=> document.getElementById('newFindYourBrandButton').remove());

        await browser.pause(3000);

    })

});