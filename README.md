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
```

## Ejemplos de uso de los localizadores

```javascript

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
  ```
## Ejemplos de uso para encontrar web elements


  ```javascript

  ¡Por supuesto! Aquí tienes un documento en formato Markdown que explica la diferencia entre `contains` y `get` en Cypress, junto con varios ejemplos.

```markdown
# Diferencia entre `contains` y `get` en Cypress

En Cypress, los comandos `contains` y `get` se utilizan para seleccionar elementos en la página web, pero tienen diferencias importantes en su funcionalidad y uso.

## `cy.get()`

El comando `cy.get()` se utiliza para seleccionar uno o más elementos del DOM basándose en un selector CSS. Este método es muy versátil y puede seleccionar elementos por ID, clase, etiqueta, atributo, etc.

### Ejemplos

#### Selección por ID

```html
<!-- HTML -->
<button id="submit-button">Enviar</button>
```

```javascript
// Cypress
cy.get('#submit-button');
```

#### Selección por Clase

```html
<!-- HTML -->
<button class="btn-primary">Enviar</button>
```

```javascript
// Cypress
cy.get('.btn-primary');
```

#### Selección por Atributo

```html
<!-- HTML -->
<input type="email" name="email" placeholder="Correo electrónico">
```

```javascript
// Cypress
cy.get('input[type="email"]');
```

## `cy.contains()`

El comando `cy.contains()` se utiliza para seleccionar un elemento que contiene texto específico. Este método busca el texto dentro de los elementos y selecciona el primer elemento que coincide con el texto dado.

### Ejemplos

#### Selección por Texto Exacto

```html
<!-- HTML -->
<button>Enviar</button>
```

```javascript
// Cypress
cy.contains('Enviar');
```

#### Selección de un Elemento Conteniendo Texto

```html
<!-- HTML -->
<div class="notification">
  <p>¡Bienvenido a nuestra aplicación!</p>
</div>
```

```javascript
// Cypress
cy.contains('¡Bienvenido a nuestra aplicación!');
```

## Comparación de Uso

### `cy.get()` vs `cy.contains()`

- **`cy.get()`**: Utilizado para seleccionar elementos basados en selectores CSS.
- **`cy.contains()`**: Utilizado para seleccionar elementos que contienen texto específico.

### Ejemplo Comparativo

#### Usando `cy.get()`

```html
<!-- HTML -->
<button class="btn-primary">Enviar</button>
<button class="btn-secondary">Cancelar</button>
```

```javascript
// Cypress
cy.get('.btn-primary').click(); // Selecciona el botón con la clase 'btn-primary'
```

#### Usando `cy.contains()`

```html
<!-- HTML -->
<button class="btn-primary">Enviar</button>
<button class="btn-secondary">Cancelar</button>
```

```javascript
// Cypress
cy.contains('Enviar').click(); // Selecciona el botón que contiene el texto 'Enviar'
```

### Ventajas y Desventajas

#### `cy.get()`

- **Ventajas**: Más flexible y puede seleccionar elementos sin importar el texto que contienen.
- **Desventajas**: Requiere conocer el selector CSS exacto.

#### `cy.contains()`

- **Ventajas**: Muy útil para seleccionar elementos cuando el texto es conocido pero el selector CSS no.
- **Desventajas**: No puede seleccionar elementos que no contienen texto visible o cuando hay múltiples elementos con el mismo texto.

## Resumen

- **Usa `cy.get()`** cuando necesitas seleccionar elementos basados en su estructura HTML y atributos.
- **Usa `cy.contains()`** cuando necesitas seleccionar elementos basados en el texto que contienen.

Ambos comandos son esenciales en Cypress y pueden ser combinados para realizar selecciones complejas y precisas en tus pruebas automatizadas.
```
