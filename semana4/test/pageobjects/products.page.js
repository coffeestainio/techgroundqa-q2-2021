
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Products"]') }
    get pageTitle() {return '/inventory.html'}


    get imageWithError() {return $('img.inventory_item_img')}
    
    get allAddToCart() { return $$('.btn_inventory')}
    get shoppingCartBadge() { return $('.shopping_cart_badge')}

    productItem(productName) { return $(`//div[@class='inventory_item' and contains(.,'${productName}')]`)}
    btn(element) { return element.$(`button`)}
}

module.exports = new ProductsPage();
