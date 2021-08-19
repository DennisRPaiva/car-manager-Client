// teste.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('teste na plataforma do car-manager', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
    cy.wait(700)
  })

  xit('teste de navegação', () => {
    cy.contains('Search').click()
    cy.wait(500)

    cy.contains("Cria carro").click()
    cy.contains("Voltar").click()
    cy.wait(500)

    cy.get("#lista_carros > tr").eq(1).contains("Update").click()
    cy.contains("Voltar").click()
    cy.wait(500)
  })

  it('Cria e deleta um carro', () => {
    cy.contains("Cria carro").click()
    cy.wait(500)

    cy.get("#size").type("Tamanho do cypress")
    cy.get("#color").type("Cor do cypress")
    cy.wait(500)
    cy.contains("Submit").click()
    cy.wait(500)

    cy.contains('Search').click()
    cy.wait(500)

    cy.get("#lista_carros > tr")
      .last()
      .should('exist')
      .contains("Tamanho do cypress")
    cy.wait(500)

    cy.get("#lista_carros > tr")
      .last()
      .contains("Delete")
      .click()
    cy.wait(500)


    cy.contains('Search').click()
    cy.wait(500)
  })
})
