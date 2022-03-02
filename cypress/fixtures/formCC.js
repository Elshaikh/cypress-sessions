import formPO from "./formPo"
export function checkAllcheckBoxes() {
    cy.get(formPO.allCheckBox).check({ force: true })
}