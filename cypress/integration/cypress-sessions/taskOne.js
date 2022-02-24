/// <reference types="cypress" />

/********************
 *
 * To execute tests from this spec  =>
 * Yarn cypress run cypress/integration/cypress-sessions/taskOne.js --headed
 */

describe('1st task Cypress', () => {
  beforeEach(() => {
    cy.visit('http://10.72.4.107:5500/example/e.html')
  })

  it('fill the address', () => {
    cy.get('[placeholder="Street address"]').type('al barsha 1 beside MOE')
    
    })
  })
