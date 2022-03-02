/********************
 *
 * To execute tests from this spec  =>
 * Yarn cypress run --spec cypress/integration/cypress-sessions/Session3Exercise.js --headed
 */

import {
    checkDirectFlights0Stops, checkSaAirlineCheckBox, clickOnSelectFlightButton
} from "../../fixtures/pageClasses/Flights/flightListingPage/flightListingCC";


describe('Session-3 - Exercise', () => {
    before(() => {

        cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult')
    });

    it('Check stops filter: “Direct flights only', () => {
        //
        checkDirectFlights0Stops();
    });

    it('Check airline filter: “Saudia”', () => {
        checkSaAirlineCheckBox()
    });

    it('Select the first flight from the filtered results', () => {
        clickOnSelectFlightButton()

    })

});
