
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputPassword () { return $('[routerLink="/vision-insurance"]') }
    get inputEmail () { return $('[routerLink="/vision-insurance"]') }
    get btnSubmit () { return $('[routerLink="/vision-insurance"]') }


    submitLogin (username, password) {
        this.inputPassword.keys(username)
        this.inputEmail.keys(password)
        this.btnSubmit.click()
    }

}

module.exports = new LoginPage();
