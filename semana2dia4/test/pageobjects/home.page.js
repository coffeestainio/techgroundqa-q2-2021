
class HomePage {
    /**
     * define selectors using getter methods
     */
    get linkFindMyBenefits () { return $('[routerLink="/vision-insurance"]') }
}

module.exports = new HomePage();
