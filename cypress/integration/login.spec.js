/// <reference types="Cypress" />

describe('login test', () => {
    xit('visit gallery app',() => {
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')

    })

    xit('click on login button', () => {
        cy.get('a[href="/login"]').click();
    })

    it('login without email', () => {
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#password').type('Sith_Lord99');
      cy.get('button[type="submit"]').click();
    })

    it('login with email without "@"', () => {
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#email').type('ognjenovic.dragan73gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('button[type="submit"]').click();
    })

    it('login with email without ".com"', () => {
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#email').type('ognjenovic.dragan73@gmail');
      cy.get('#password').type('Sith_Lord99');
      cy.get('button[type="submit"]').click();
    })

    it('login without password', () => {
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#email').type('ognjenovic.dragan73@gmail.com');
      cy.get('button[type="submit"]').click();
    })

    it('login with wrong password', () => {
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#email').type('ognjenovic.dragan73@gmail.com');
      cy.get('#password').type('Sith_Lord');
      cy.get('button[type="submit"]').click();
    })

    it('login with valid credentials', () => {
      //  cy.get('input[id="email"]');
      cy.visit('/login')
      cy.url().should('include', '/login');
      cy.get('#email').type('ognjenovic.dragan73@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('button[type="submit"]').click();
    })

    it('logout',() => {
        // cy.wait(500);
        cy.get('a[class="nav-link nav-buttons"]').should('have.length', 3);
      cy.get('a[class="nav-link nav-buttons"]').eq(2).click();
    }) 
})