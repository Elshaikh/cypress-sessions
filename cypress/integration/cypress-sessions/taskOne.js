/********************
 *
 * To execute tests from this spec  =>
 * Yarn cypress run cypress/integration/cypress-sessions/taskOne.js --headed
 */
 // import formPO  "../../formPo"
 import * as formCC from "../../fixtures/formCC.js";
import formPO from "../../fixtures/formPo";
describe('1st task Cypress', () => {
  beforeEach(() => {
    cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html')
  });

  it('fill the address', () => {

      cy.get('[type="text"]').type('Test all the things', { force: true });



      formCC.checkAllcheckBoxes()
    })
  })
