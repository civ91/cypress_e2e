describe('mi_primera_prueba', () => {

  it('passes', () => {
    cy.visit('https://www.google.es/')
    cy.get('#L2AGLb > .QS5gu').click()
  })
})