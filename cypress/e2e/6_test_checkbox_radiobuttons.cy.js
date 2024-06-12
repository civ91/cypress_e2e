describe('obtener_texto', () => {

  it('obteniendo texto', () => {

    cy.visit('https://www.amazon.com/')
    cy.get('[for="twotabsearchtextbox"]').should('contain','Search Amazon')

    cy.get('[for="twotabsearchtextbox"]').then(label=>{
      const labelText = label.text()
      expect(labelText).to.equal('Search Amazon')
      cy.wrap(labelText).should('contain','Search Amazon')
    })

  })

})