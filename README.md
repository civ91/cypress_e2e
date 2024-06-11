# Pruebas automatizadas con Cypress
## Instalar:
    nodejs version lts
    git
    Visual Studio Code

# Aserciones de Cypress

## Tabla de Aserciones

| Aserción                | Descripción                                                                                                  | Ejemplo                                                  |
|-------------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `.should('exist')`      | Verifica que el elemento exista en el DOM.                                                                   | `cy.get('button').should('exist')`                       |
| `.should('not.exist')`  | Verifica que el elemento no exista en el DOM.                                                                | `cy.get('button').should('not.exist')`                   |
| `.should('be.visible')` | Verifica que el elemento sea visible.                                                                        | `cy.get('button').should('be.visible')`                  |
| `.should('not.be.visible')` | Verifica que el elemento no sea visible.                                                                | `cy.get('button').should('not.be.visible')`              |
| `.should('be.checked')` | Verifica que el elemento (checkbox o radio button) esté seleccionado.                                        | `cy.get('input[type="checkbox"]').should('be.checked')`  |
| `.should('not.be.checked')` | Verifica que el elemento (checkbox o radio button) no esté seleccionado.                                | `cy.get('input[type="checkbox"]').should('not.be.checked')` |
| `.should('be.disabled')` | Verifica que el elemento esté deshabilitado.                                                                | `cy.get('button').should('be.disabled')`                 |
| `.should('not.be.disabled')` | Verifica que el elemento no esté deshabilitado.                                                        | `cy.get('button').should('not.be.disabled')`             |
| `.should('contain', text)` | Verifica que el elemento contenga el texto especificado.                                                 | `cy.get('div').should('contain', 'Hola')`                |
| `.should('have.text', text)` | Verifica que el elemento tenga exactamente el texto especificado.                                      | `cy.get('h1').should('have.text', 'Bienvenido')`         |
| `.should('have.value', value)` | Verifica que el elemento (input) tenga el valor especificado.                                       | `cy.get('input').should('have.value', 'Cypress')`        |
| `.should('have.class', className)` | Verifica que el elemento tenga la clase especificada.                                             | `cy.get('button').should('have.class', 'btn-primary')`   |
| `.should('have.attr', attribute, value)` | Verifica que el elemento tenga el atributo y valor especificado.                          | `cy.get('a').should('have.attr', 'href', '/home')`       |
| `.should('be.empty')` | Verifica que el elemento esté vacío (sin hijos).                                                              | `cy.get('div').should('be.empty')`                       |
| `.should('have.length', length)` | Verifica que el conjunto de elementos tenga la longitud especificada.                                | `cy.get('ul>li').should('have.length', 3)`               |
| `.should('match', selector)` | Verifica que el elemento coincida con el selector CSS especificado.                                     | `cy.get('input').should('match', ':focus')`              |
| `.should('be.enabled')` | Verifica que el elemento esté habilitado.                                                                    | `cy.get('button').should('be.enabled')`                  |
| `.should('not.be.empty')` | Verifica que el elemento no esté vacío (tenga hijos).                                                      | `cy.get('div').should('not.be.empty')`                   |

## Ejemplos de uso en un contexto de prueba

```javascript
// Verifica que el botón "Enviar" exista y esté habilitado
cy.get('button#send').should('exist').and('be.enabled');

// Verifica que el campo de entrada contenga el texto "Cypress"
cy.get('input#name').should('have.value', 'Cypress');

// Verifica que la lista tenga exactamente 3 elementos
cy.get('ul>li').should('have.length', 3);

// Verifica que el mensaje de bienvenida sea visible y contenga el texto correcto
cy.get('h1.welcome-message').should('be.visible').and('have.text', 'Bienvenido a nuestra aplicación');

// Verifica que el checkbox esté marcado
cy.get('input[type="checkbox"]').should('be.checked');
