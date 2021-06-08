const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/products.page')

describe('SauceDemo - Login', () => {

    beforeEach(async ()=> {
        await LoginPage.open();
    } )
    
    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrlContaining(ProductPage.pageTitle);
        await expect(await ProductPage.title).toBeDisplayed();
        await expect(await LoginPage.errorMessage).not.toBeDisplayed({time:2000});
    });

    it('should login even on performance glitch', async () => {
        await LoginPage.login('performance_glitch_user','secret_sauce');
        await expect(browser).toHaveUrlContaining(ProductPage.pageTitle);
        await expect(await ProductPage.title).toBeDisplayed();
        await expect(await LoginPage.errorMessage).not.toBeDisplayed({time:2000});
    });

    it('should not login with locked credentials', async () => {
        await LoginPage.login('locked_out_user','secret_sauce');
        await expect(await LoginPage.errorMessage).toBeDisplayed();
        await expect(await LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('should not login with invalid user', async () => {
        await LoginPage.login('fake_user','secret_sauce');
        await expect(await LoginPage.errorMessage).toBeDisplayed();
        await expect(await LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid password', async () => {
        await LoginPage.login('standard_user','secresdasdt_sauce');
        await expect(await LoginPage.errorMessage).toBeDisplayed();
        await expect(await LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with problem user', async () => {
        await LoginPage.login('problem_user','secret_sauce');
        await expect(await LoginPage.errorMessage).not.toBeDisplayed({time:2000});
        await expect(await ProductPage.imageWithError).toBeDisplayed();
    });


});


