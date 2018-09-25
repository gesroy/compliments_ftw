/*global cy*/

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('starts with compliments', () => {
    cy.get('img').should('exist')
    cy.get('[data-test-id="ComplimentCard"]').should('exist')
  })
  describe('startscreen navigates to the compliment input-screen', () => {
    it('navigates', () => {
      cy.get('[data-test-id="Footer-Nav-To-Input"]').click()
      cy.go('forward')
      cy.location('pathname').should('include', 'input')
    })
  })
  describe('inputscreen', () => {
    it('navigates back to startscreen', () => {
      cy.visit('http://localhost:3000/input')
      cy.get('button')
        .contains('Abbrechen')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', '/')
    })
  })
})
