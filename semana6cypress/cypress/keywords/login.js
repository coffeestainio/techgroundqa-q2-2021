const locators = {
    username: '//*[@id="user-name"]',
    password: '#password'
}


const login = function(username, password) {
    cy.xpath(locators.username)
        .clear()
        .type(username)
        .should('have.value', username)
    cy.get(locators.password).type(password)
    cy.contains('Login').click()
}

const loginWithNoPassword = function(username, password) {
    cy.get('#user-name').type(username)
    cy.contains('Login').click()
}


module.exports = {login, loginWithNoPassword}