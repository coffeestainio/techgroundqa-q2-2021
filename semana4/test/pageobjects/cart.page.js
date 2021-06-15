
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Your Cart"]') }
    get pageURL() {return 'cart.html'}
    get btnCheckout() { return $('#checkout')}

    itemOnCartByName(productName) { return $(`//div[@class='cart_item' and contains(.,'${productName}')]`)}
    priceOfElement(element) {return element.$('.inventory_item_price')}

}

module.exports = new CartPage();
