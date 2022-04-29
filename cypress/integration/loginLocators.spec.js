/// <reference types="Cypress" />
const Locators = require('../fixtures/Locators.json');

describe('login with locators', () => {

    before('visit login page', () => {
        cy.visit('/login');
    })

    it('login with valid data', () => {
        cy.get(Locators.Login.emailInput).type('ognjenovic.dragan73@gmail.com');
        cy.get(Locators.Login.passwordInput).type('Sith_Lord99');
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login');
    })
})