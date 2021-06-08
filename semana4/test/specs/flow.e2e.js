const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/products.page')
const CartPage = require('../pageobjects/cart.page')

let testProduct = '';

describe('SauceDemo - Shopping Cart', () => {

    before(async ()=> {
        testProduct = 'Sauce Labs Bolt T-Shirt';

        await LoginPage.open();
        await LoginPage.login('standard_user','secret_sauce');
    } )
    
    // it('add 2 product to the cart', async () => {      
    //     const allAddToCartButtons = await ProductPage.allAddToCart;
        
    //     // por la prueba
    //     for (let index = 0; index < 2 ; index++) {
    //         await allAddToCartButtons[index].click()
    //     }

    //     // await browser.debug()

    //     await expect(await ProductPage.shoppingCartBadge).toHaveText("2");
    // });

    it('add 1 product to the cart by name', async () => {      
        
        const productCard = await ProductPage.productItem(testProduct);
        (await ProductPage.btn(productCard)).click();
        
        await expect(await ProductPage.shoppingCartBadge).toHaveText("1");
    });

    it('add should redirect to the shopping cart with the product added', async () => {      
        await (await ProductPage.shoppingCartBadge).click();
        await expect(browser).toHaveUrlContaining(CartPage.pageTitle);
        await expect(await CartPage.title).toBeDisplayed();

        await expect(await CartPage.itemOnCartByName(testProduct)).toBeDisplayed();
    });
    

});


