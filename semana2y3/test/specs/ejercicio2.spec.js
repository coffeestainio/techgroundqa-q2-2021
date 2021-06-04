const HomePage = require('../pageobjects/home.page');
const VisionInsurance = require('../pageobjects/vision-insurance.page');

describe('EJERCICIO2 Find my benefits',() => {

    before(async ()=> {
        // vaya al home page
        
    });

    beforeEach( async () => {
        await browser.reloadSession();
        await browser.url('/');
    })

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

    it('refresh the page', async () => { 
        await browser.pause(4000);
    });

    it('set timeouts', async () => { 
        await browser.setTimeout({implicit: 1000});
        await $('adsadasdas');
    });

    it('set timeouts', async () => { 
        await browser.setTimeout({pageLoad: 1000});
        await browser.url('https://valleycare.com');
        await browser.setTimeout({implicit: 30000});
    });
    

});