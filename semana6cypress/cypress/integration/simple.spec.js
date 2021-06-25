const loginUtils = require('../keywords/login');

describe('First Test', function() {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com')
    })

    it('Login successful', function () {
        loginUtils.login('standard_user', 'secret_sauce')
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })

    it('Login unSuccessful', function () {
        loginUtils.login('locked_out_user', 'secret_sauce')
        cy.url().should('not.eq','https://www.saucedemo.com/inventory.html')
    })
})