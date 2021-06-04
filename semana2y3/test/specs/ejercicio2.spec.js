const HomePage = require('../pageobjects/home.page');
const VisionInsurance = require('../pageobjects/vision-insurance.page');

describe('EJERCICIO2 Find my benefits',() => {

    before(async ()=> {

        const a = '';

    browser.addCommand('jsClick', 
            async function () {
                await this.execute( 
                    (elemento) => elemento.click(), 
                    this );
    }, true);

    browser.addCommand('getUrlAndTitle', async function () {
        // `this` refers to the `browser` scope
        return {
            url: await this.getUrl(),
            title: await this.getTitle()
        }
        })
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

    it('waits', async () => { 
        await browser.pause(20000);
        const el = await $('[data-selenium-id=lnkSignIn]');
        await browser.execute((elemento) => elemento.click(), el );

        await(await $('#newFindYourBrandButton')).waitForClickable({timeout:3000});
    });

    it('waitUntil', async () => {
        
        const elem = await $('[data-selenium-id=lnkSignIn]');
        await elem.waitUntil(async function () {
            return await this.getText() === 'Sign In'
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
    });

    it.only('customCommand', async () => {
        const elem = await $('[data-selenium-id=lnkSignIn]');
        await elem.jsClick();

        console.log(await browser.getUrlAndTitle());
    });
    

});