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
  describe('startscreen navigates to the compliment review-screen', () => {
    it('navigates', () => {
      cy.get('[data-test-id="Footer-Nav-To-Review"]').click()
      cy.go('forward')
      cy.location('pathname').should('include', 'review')
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
  describe('reviewscreen', () => {
    it('navigates back to startscreen', () => {
      cy.visit('http://localhost:3000/review')
      cy.get('button')
        .contains('Abbrechen')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', '/')
    })
  })
  describe('App with one new compliment', () => {
    it('enters a compliment', () => {
      cy.visit('http://localhost:3000/input')
      cy.get('textarea')
        .should(
          'have.attr',
          'placeholder',
          'Wir freuen uns auf dein Kompliment'
        )
        .type('Toll, dass wir uns kennen{Enter}')
    })
    it('navigates to review', () => {
      cy.get('[data-test-id="Footer-Nav-To-Review"]').click()
      cy.go('forward')
      cy.location('pathname').should('include', '/review')
    })
    it('reviews a compliment', () => {
      cy.visit('http://localhost:3000/review')
      cy.get('button')
        .contains('Editieren')
        .click()
      cy.get('textarea')
        .contains('Prboier das sua.')
        .type('Habe ich ausprobiert.{Enter}')
    })
  })
})
