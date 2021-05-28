describe('Find my benefits',() => {

    before(()=> {
        // vaya al home page
        await browser.url('/');
    });

    it('should be able to navigate to find my benefits from the home page', async () => {
        const routerLink = await $('[routerLink="/vision-insurance"]');
        await routerLink.click();
        
        await expect(browser).toHaveUrlContaining('/vision-insurance');
        const searchCard = await $('.search-card');
        await expect(searchCard).toBeDisplayed();
    });

    it ('should display UI elements' , () => {
        // validar que todos los elementos existan
    });

    it ('should be able to enter user data' , async () => {

        const firstName = await $('[fieldname=firstName] input');
        const lastName = await $('[fieldname=lastName] input');
        const zipCode = await $('[fieldname=zipCode] input');

        await firstName.setValue('Gabriel');
        await lastName.setValue('Ruiz');
        await zipCode.setValue('84001');

        await browser.saveScreenshot('./file.png')
    });

    // browser.pause
    // browser.debug

});