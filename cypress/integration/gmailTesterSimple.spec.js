/********************
 * To execute this test u have to login 1st :
 * https://console.developers.google.com/apis/credentials?project=emailverification-271311&supportedpurview=project
 * email : 'elshaikhtestemails@gmail.com' Password : 'Nokia2030'
 * yarn run cypress open -c baseUrl=https://next-staging.almosafer.com --specs cypress/integration/pwa/end2end/emails/signUpEmail.spec.js --headed
 */
import {pullMail} from "../fixtures/customHelpers/emailHelper";

describe("New user registration E2E", async function () {
    let test_id = new Date().getMilliseconds();
    let incoming_mailbox = `elshaikhtestEmails+${test_id}@gmail.com`;
    let sender_Email = `test-noreply@almosafer.com`;
    before(() => {
        cy.visit('/register');
    });
    it('should Visit & create new account', function () {
        cy.get('[name=email]').type(incoming_mailbox);
        cy.get('[name=password]').type('TestQa906');
        cy.get('[type=submit]').click();
        cy.location().should((loc) => {
            expect(loc.href).to.include('/myaccount/profile')
        });
    });
    it("Register Form: Email is delievered", function () {
        pullMail(sender_Email,incoming_mailbox,'Welcome to Almosafer',)
    });
});