import flightListingPO from "./flightListingPO";


export function checkDirectFlights0Stops() {
    cy.get(flightListingPO.directFlights0Stops).click({force: true});
}

export function checkSaAirlineCheckBox() {
    cy.get(flightListingPO.airline_toggle).parent().parent().parent().contains('Show all').click();
    cy.get(flightListingPO.airLiveSaCheckBox).click({force: true});
}

export function clickOnSelectFlightButton() {
    cy.get(flightListingPO.select1stFlight);
    cy.contains('[type="button"]','Select flight').click({force: true})
}