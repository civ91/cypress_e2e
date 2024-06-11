describe('usando_get', () => {

  it('validando_boton_buscar_con_google', () => {
    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gNO89b').should('be.enabled')
  })

  it('encontrando_barra_de_busqueda', () => {
    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.RNNXgb')
  })

})