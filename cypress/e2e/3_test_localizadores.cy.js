/// <reference types="cypress" />

describe('localizadores', () => {
  it('tipo_localizadores',() => {
    cy.visit('http://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
  
  //localizar por tagname
    cy.get('textarea')

  //localizar por id
    cy.get('#APjFqb')

  //localizar por clase (class)
    cy.get('.gLFyf')
  
  //localizar por atributo(atribute)
    cy.get('[maxlength]')

  //localizar por atributo y su valor  
  cy.get('[maxlength="2048"]')

  //combinar localizadores
  cy.get('textarea[maxlength="2048"].gLFyf')


  })
})