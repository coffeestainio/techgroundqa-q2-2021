
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CompletePage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Checkout: Complete!"]') }
    get pageURL() {return 'checkout-complete.html'}

}

module.exports = new CompletePage();
