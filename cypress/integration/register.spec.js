/// <reference types="Cypress" />

describe('test register', () => {

it('register without first name',() => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('#last-name').type('Ognjenovic');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('#password-confirmation').type('Sith_Lord99');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('not.include', '/register')


})
it('register without last name',() => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('#first-name').type('Dragan');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('#password-confirmation').type('Sith_Lord99');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('not.include', '/register')
})

it('register without e-mail', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('Dragan');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
})
    it('register without password', () => {
        cy.visit('/register')
      cy.url().should('include', '/register');
      cy.get('a[href="/register"]').click();
      cy.get('#first-name').type('Dragan');
      cy.get('#last-name').type('Ognjenovic');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password-confirmation').type('Sith_Lord99');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('not.include', '/register');
    })

    it('register without confirmed password', () => {
        cy.visit('/register')
      cy.url().should('include', '/register');
      cy.get('a[href="/register"]').click();
      cy.get('#first-name').type('Dragan');
      cy.get('#last-name').type('Ognjenovic');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('not.include', '/register');
    })

    it('register without checking checkbox', () => {
        cy.visit('/register')
      cy.url().should('include', '/register');
      cy.get('a[href="/register"]').click();
      cy.get('#first-name').type('Dragan');
      cy.get('#last-name').type('Ognjenovic');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('#password-confirmation').type('Sith_Lord99');
      cy.get('button').click();
      cy.url().should('not.include', '/register');
    } )


    it('register with valid data', () => {
        cy.visit('/register')
      cy.url().should('include', '/register');
      cy.get('a[href="/register"]').click();
      cy.get('#first-name').type('Dragan');
      cy.get('#last-name').type('Ognjenovic');
      cy.get('#email').type('ognjenovicd74@gmail.com');
      cy.get('#password').type('Sith_Lord99');
      cy.get('#password-confirmation').type('Sith_Lord99');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('not.include', '/register');

    })




}) 
