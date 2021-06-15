const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/products.page')
const CartPage = require('../pageobjects/cart.page');
const CheckouPage = require('../pageobjects/checkout.page');
const OverviewPage = require('../pageobjects/overview.page');
const CompletePage = require('../pageobjects/complete.page');

let testProduct = {
    name: '',
    price: ''
};
let testProduct1 = {
    name: '',
    price: ''
};

describe('SauceDemo - Shopping Cart', () => {

    before( async () => {
        
    });

    before(async ()=> {
        testProduct.name = 'Sauce Labs Bolt T-Shirt';
        testProduct1.name = 'Sauce Labs Onesie';

        await LoginPage.open();
        await LoginPage.login('standard_user','secret_sauce');
    } )

    it('add 2 product to the cart by name and get proce', async () => {      
        
        // encontrar el product
        // hacer click en btn
        const productCard = await ProductPage.productItem(testProduct.name);
        // obtener el precio del producto 1
        testProduct.price = await (await ProductPage.price(productCard)).getText();
        (await ProductPage.btn(productCard)).click();

        const productCard1 = await ProductPage.productItem(testProduct1.name);
        testProduct1.price = await (await ProductPage.price(productCard1)).getText();
        (await ProductPage.btn(productCard1)).click();
        await expect(await ProductPage.shoppingCartBadge).toHaveText("2");

        console.log('Price Product', testProduct.price);
        console.log('Price Product1', testProduct1.price);
    });

    it('should redirect to the shopping cart with the products added and verify price', async () => {      
        await (await ProductPage.shoppingCartBadge).click();

        await browser.validateOnPage({pageURL: CartPage.pageURL, elementHook: CartPage.title});

        // cerificar que el producto esta en el cart
        const producto = await CartPage.itemOnCartByName(testProduct.name);
        const producto1 = await CartPage.itemOnCartByName(testProduct1.name);
        await expect(producto).toBeDisplayed();
        await expect(producto1).toBeDisplayed();

        await expect (await CartPage.priceOfElement(producto)).toHaveText(testProduct.price);
        await expect (await CartPage.priceOfElement(producto1)).toHaveText(testProduct1.price);
    });

    it('should continue to the information page ', async () => {
        await (await CartPage.btnCheckout).click();

        await expect(browser).toHaveUrlContaining(CheckouPage.pageTitle);
        await expect(await CheckouPage.title).toBeDisplayed();
        await browser.validateOnPage({pageURL: CheckouPage.pageTitle, elementHook: CheckouPage.title});
    });

    it('should continue to the checkout overview page ', async () => {
        await CheckouPage.fillInformation({firstName: 'juan', lastName: 'calvo' , zipCode: '12312'});
        await browser.validateOnPage({pageURL: OverviewPage.pageURL, elementHook: OverviewPage.title});

        const producto = await OverviewPage.itemOnOverview(testProduct.name);
        const producto1 = await OverviewPage.itemOnOverview(testProduct1.name);
        await expect(producto).toBeDisplayed();
        await expect(producto1).toBeDisplayed();
    });

    it('should continue to the thankyou page ', async () => {
        await (await OverviewPage.btnFinish).click();
        await browser.validateOnPage({pageURL: CompletePage.pageURL, elementHook: CompletePage.title});
    });
    

});


