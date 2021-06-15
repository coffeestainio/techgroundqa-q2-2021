
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckouPage{
    /**
     * define selectors using getter methods
     */
    get title () { return $('//*[text()="Checkout: Your Information"]') }
    get pageTitle() {return 'checkout-step-one.html'}

    get _firstName () {return $('#first-name')}
    get _lastName () {return $('#last-name')}
    get _postaCodel () {return $('#postal-code')}
    get btnContinue () {return $('#continue')}

    async fillInformation({firstName, lastName, zipCode}){
        if (firstName) await (await (this._firstName)).setValue(firstName);
        if (lastName) await (await (this._lastName)).setValue(lastName);
        if (zipCode) await (await (this._postaCodel)).setValue(zipCode);

        await (await this.btnContinue).click();
    }

}

module.exports = new CheckouPage();
