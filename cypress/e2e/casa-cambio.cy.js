/// <reference types="Cypress"/>

const URL = '192.168.0.49:8080'


context("validar Formulario de la casa de cambio", () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  describe("validacion del formulario ", () => {


    it("se asegura  que aparezcan listados los tipos de cambio con la moneda seleccionada", () => {

      cy.get("#fecha").type("2023-12-08")

      cy.get('#menu-desplegable').select('EUR')
      cy.get('#confirmar').click()
      
      cy.get('ul li').should('have.length.greaterThan',0)

    });

    it("se asegura  que aparezca un mensaje de error si no seleccionaste la fecha", () => {

      

      
      cy.get('#confirmar').click()
      
      cy.get("#errores li").should("have.text","No seleccionaste una fecha")

    });
    
  })
})

