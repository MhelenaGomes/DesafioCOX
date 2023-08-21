describe('carrinho', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('loginUrl'))
        cy.get('[data-test="username"]').type(Cypress.env('username'));
        cy.get('[data-test="password"]').type(Cypress.env('password'));
        cy.get('#login-button').click();
    })

    // Este caso de teste consiste em verificar se os produtos foram adicionados corretamente ao carrinho,
    //tambem consiste em verificar o contador de itens do icone carrinho.
    it('adicionar produto', () => {
        cy.contains('ADD TO CART').click();
        cy.get('[data-icon="shopping-cart"]').click();
        cy.get('.cart_item').should('have.length', 1);
        cy.get('.cart_quantity').should('have.text', '1');
        cy.get('#shopping_cart_container').should('have.text', '1')
    })

    //Este caso de teste tem como objetivo verificar se, após a remoção de um produto do carrinho de compras que originalmente continha 2 produtos,
    //resta apenas 1 produto no carrinho. Além disso, será verificado se o contador de itens no ícone do carrinho é atualizado corretamente após a remoção do produto.
    it('remover produto', () => {
        cy.contains('ADD TO CART').click();
        cy.contains('ADD TO CART').click();
        cy.get('[data-icon="shopping-cart"]').click();
        cy.get('.cart_item').should('have.length', 2);
        cy.contains('REMOVE').click();
        cy.get('.cart_item').should('have.length', 1);
        cy.get('#shopping_cart_container').should('have.text', '1');
    })



})
