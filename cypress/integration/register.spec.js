/// <reference types = "Cypress" />
const Locators = require('../fixtures/Locators.json')
import {
  faker
} from '@faker-js/faker';



describe('test register', () => {
  
  
    let registerData = {
        firstName: "",
        lastName: "",
        randomEmail: "",
        password: ""
    }

    beforeEach (() => {
        registerData.firstName = faker.name.firstName();
        registerData.lastName = faker.name.lastName();
        registerData.randomEmail = faker.internet.email();
        registerData.password = faker.internet.password();
    })

  it.only('register without first name', () => {
    console.log("emal", registerData.randomEmail)
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get(Locators.Registration.lastNameInput).type(registerData.lastName);
    cy.get(Locators.Registration.emailInput).type(registerData.randomEmail);
    cy.get(Locators.Registration.passwordInput).type(registerData.password);
    cy.get(Locators.Registration.passwordConfirmationInput).type(registerData.password);
    cy.get(Locators.Registration.tosCheckbox).check();
    cy.get(Locators.Registration.submitBtn).click();
    cy.url().should('not.include', '/register')

  })

  it('register with first name consisting of 1 letter', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('D');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })


  it('register with first name consisting of 1 number', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('9');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('register with first name consisting of "."', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('.');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('register without last name', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('#first-name').type('Dragan');
    cy.get('#email').type(randomEmail);
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

  it('register with e-mail without "@"', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('Dragan');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type('ognjenovicd76gmail.com');
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('register with e-mail without ".com"', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('Dragan');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type('ognjenovicd76@gmail');
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
    cy.get('#email').type(randomEmail);
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
    cy.get('#email').type(randomEmail);
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
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('register with valid data', () => {
    cy.visit('/register')
    cy.url().should('include', '/register');
    cy.get('a[href="/register"]').click();
    cy.get('#first-name').type('Dragan');
    cy.get('#last-name').type('Ognjenovic');
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('Sith_Lord99');
    cy.get('#password-confirmation').type('Sith_Lord99');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');

  })
})


