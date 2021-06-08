
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Your Cart"]') }
    get pageTitle() {return 'cart.html'}

    itemOnCartByName(productName) { return $(`//div[@class='cart_item' and contains(.,'${productName}')]`)}

}

module.exports = new CartPage();
