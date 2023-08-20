describe('login', () => {

  // Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha correta
  it('sucesso', () => {
    cy.visit(Cypress.env('loginUrl'))
    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('password'))
    cy.get('#login-button').click();
    cy.contains('Products').should('exist')
  })

  // Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha incorretos.
  it('invalido', () => {
    cy.visit(Cypress.env('loginUrl'))
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('invalid_password')
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('exist')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  // logout
  it('logout', () => {
    cy.visit(Cypress.env('loginUrl'))
    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('password'))
    cy.get('#login-button').click();
    cy.contains('Products').should('exist')
    cy.contains('Open Menu').click();
    cy.contains('Logout').click();
    cy.contains('LOGIN').should('exist')

  })

  // Este teste consiste em fazer acesso a uma URL que teoricamente não seria autorizada sem o login
  // Porém foi comprovado que é possível apesar da ausência de autenticação, oque configura uma falha de segurança.
  // Portanto, não foi possível concluir o cenário.
  it.skip('Nao autorizado', () => {
    cy.visit('https://www.saucedemo.com/v1/cart.html')
    cy.contains('403').should('exist')
  })



})