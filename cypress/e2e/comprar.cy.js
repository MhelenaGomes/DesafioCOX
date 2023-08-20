describe('finalizar compra', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('loginUrl'));
        cy.get('[data-test="username"]').type(Cypress.env('username'));
        cy.get('[data-test="password"]').type(Cypress.env('password'));
        cy.get('#login-button').click();
    })
    // Este caso de teste consiste verificar a conclusão de compra, inserindo todos os campos obrigatorios corretamente até finalizar o pedido.
    it('Sucesso', () => {
        cy.contains('ADD TO CART').click();
        cy.get('[data-icon="shopping-cart"]').click();
        cy.contains('CHECKOUT').click();
        cy.get('[data-test="firstName"]').type(Cypress.env('firstName'));
        cy.get('[data-test="lastName"]').type(Cypress.env('lastName'));
        cy.get('[data-test="postalCode"]').type(Cypress.env('zipCode'));
        cy.contains('CONTINUE').click();
        cy.contains('FINISH').click();
        cy.contains('THANK YOU FOR YOUR ORDER').should('exist');
    })
})