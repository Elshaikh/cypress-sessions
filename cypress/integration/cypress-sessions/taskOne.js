/// <reference types="cypress" />

/********************
 *
 * To execute tests from this spec  =>
 * Navigate to qa-frontend-cypress folder, open command line and type:
 * Yarn cypress run cypress/integration/cypress-sessions/taskOne.js --headed
 * Environment variable 'stage' can be one of this values: [dev, staging, production]; if stage is not specified tests will be run on staging
 */

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('http://10.72.4.107:5500/example/e.html')
  })

  it('displays two todo items by default', () => {
    cy.get('[placeholder="Street address"]').type('test')
    
    })
  })
