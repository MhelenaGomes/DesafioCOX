describe('campos obrigatorios', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('loginUrl'));
        cy.get('[data-test="username"]').type(Cypress.env('username'));
        cy.get('[data-test="password"]').type(Cypress.env('password'));
        cy.get('#login-button').click();
    })
    //Este caso de teste consiste em verificar se as mensagens de validação estão sendo exibidas ao tentar prosseguir sem preencher os campos obrigatorios corretamente. 
    it('validar', () => {
        cy.contains('ADD TO CART').click();
        cy.get('[data-icon="shopping-cart"]').click();
        cy.get('.cart_item').should('have.length', 1);
        cy.get('.cart_quantity').should('have.text', '1');
        cy.contains('CHECKOUT').click();
        cy.get('[data-test="firstName"]').type('maria');
        cy.contains('CONTINUE').click();
        cy.get('[data-test="error"]').should('exist')
            .should('have.text', 'Error: Last Name is required');


    })
})