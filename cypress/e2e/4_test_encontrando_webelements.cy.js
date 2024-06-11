describe('encontrando_webelements', () => {

  it('ejemplos_webelements', () => {
    
    //contains - va a buscar de forma especificva un texto o atributo
      //definir el localizador y luego que contiene
    cy.visit('https://www.google.com')
      cy.get('#L2AGLb > .QS5gu').click()
      cy.get('.gNO89b').should('be.enabled')  
      //cy.contains('.pHiOh', 'Publicidad')
      //cy.contains('.pHiOh', 'Empresa')
      //cy.contains('.pHiOh', 'Privacidad')

      cy.contains('.L3eUgb', 'Google').contains('Privacidad')

      //Combinar localizadores con palabras
      cy.contains('Buscar con Google').get('.gNO89b')

    //get - busca de forma global un texto, elemento, localizador, etc.
  })

})