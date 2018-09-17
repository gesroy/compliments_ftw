/*global cy*/

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })
  it('starts without player', () => {
    cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    cy.get('input').should('have.attr', 'placeholder', 'Player name')
  })
  it('starts without play button, but with hint text', () => {
    cy.get('button').should('not.exist')
    cy.get('[data-test-id="StartScreen-hintText"]').should(
      'contain',
      'Please enter at least one player'
    )
  })
  describe('Startscreen with one player', () => {
    beforeEach(() => {
      cy.get('input')
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
    })
    it('can delete a single player', () => {
      cy.get('div')
        .contains('x')
        .should('exist')
        .click()
      cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    })
    it('can delete all players', () => {
      cy.get('div')
        .contains('Delete players')
        .should('exist')
        .click()
      cy.get('[data-test-id="StartScreen-player"]').should('not.exist')
    })
    it('navigates to the next screen', () => {
      cy.get('button')
        .contains('Play')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', 'summary')
    })
  })
  describe('App with three players', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Player name')
        .type('Lisa{Enter}')
        .type('Mia{Enter}')
        .type('Linus{Enter}')
    })
    it('has three players', () => {
      cy.get('[data-test-id="StartScreen-player"]')
        .should('contain', 'Lisa')
        .should('contain', 'Mia')
        .should('contain', 'Linus')
    })
    it('can delete one of the players', () => {
      cy.get('div')
        .first()
        .contains('x')
        .should('exist')
        .click()
      cy.get('[data-test-id="StartScreen-player"]')
        .contains('Lisa')
        .should('not.exist')
    })
  })
  describe('Test Gamescreen', () => {
    beforeEach(() => {
      cy.get('input')
        .should('have.attr', 'placeholder', 'Player name')
        .type('Lisa{Enter}')
        .type('Mia{Enter}')

      cy.get('button')
        .contains('Play')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', 'summary')

      cy.get('button')
        .contains('Add a new round')
        .click()
      cy.go('forward')
      cy.location('pathname').should('include', 'game')
    })

    it('gives Lisa 20 points', () => {
      cy.get('button')
        .contains('+10')
        .click()
    })
  })
})
