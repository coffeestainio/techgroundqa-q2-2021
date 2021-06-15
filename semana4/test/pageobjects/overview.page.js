
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverviewPage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Checkout: Overview"]') }
    get pageURL() {return 'checkout-step-two.html'}
    get btnFinish() { return $('#finish')}

    itemOnOverview(productName) { return $(`//div[@class='cart_item' and contains(.,'${productName}')]`)}
    priceOfElement(element) {return element.$('.inventory_item_price')}

}

module.exports = new OverviewPage();
