const loginUtils = require('../keywords/login');

describe('Monitor request', function() {

    beforeEach(function() {
        cy.visit('https://terapeutica.digital')
    })

    it('Verify request', function () {
        cy.intercept(
            {
              method: 'GET', // Route all GET requests
              url: 'v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6', // that have a URL that matches '/users/*'
            },
            '404'
          ).as('profile')
        cy.visit("https://terapeutica.digital/#/specialist/bfea3295-af20-4824-8bed-170a227bc1e6")

        cy.wait('@profile');

    })

})