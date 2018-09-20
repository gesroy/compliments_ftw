/*global cy*/

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })
})
describe('Startscreen with compliments', () => {
    cy.get('img')
      .should('have.attr', 'placeholder', 'Player name')
      .type('Jane{Enter}')
  })
  it('has a player', () => {
    cy.get('[data-test-id="StartScreen-player"]').should('contain', 'Jane')
  })
  it('has a play button', () => {
    cy.get('button')
      .contains('Play')
      .should('exist')
    it('navigates to the compliment input-screen', () => {
      beforeEach(() => {
      cy.get('img')
        .contains('hammer')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', 'input')}
    })
  })
})
