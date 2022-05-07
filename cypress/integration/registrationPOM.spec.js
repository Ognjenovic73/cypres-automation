/// <reference types="Cypress">

import {registerPage} from '../page_objects/registerPage';
import {faker} from '@faker-js/faker';


describe('registration POM', () => {
    let registerData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        difConfirmedPassword: faker.internet.password()
    }

    beforeEach ('visit register page', () => {
        cy.visit('/register');
        cy.url().should('include', '/register')
        registerPage.registerHeading.should('have.text','Register')   
    })

    it('register /negative: invalid email',() => {
        /* cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register'
          }).as('unsuccessfulRegistration');
        }) */
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            'dragan@mail',
            registerData.password,
            registerData.password
            //cy.wait('@unsuccessfulRegistration').then(interception => {
            //    console.log('RESPONSE', interception);
            // }
            ) 
        
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                     .and('have.text','The email must be a valid email address.')
                     .and('have.css', 'background-color', 'rgb(248, 215, 218)')                 
        cy.url().should('include', '/register');
        })
           
    it('register /negative: email without "."',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            'dragan@gmailcom',
            registerData.password,
            registerData.password
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The email must be a valid email address.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/register');
    })

    it('register /negative: invalid password',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            '123456a',
            registerData.password
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The password must be at least 8 characters.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/register');
    })

    it('register negative: tos checkbox unchecked',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password,
            registerData.password
        )
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The terms and conditions must be accepted.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/register');
    })

    it('register /negative: not matching confirmed password',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password,
            '1234567a'   
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The password confirmation does not match.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/register');
    }) 

    it('register with valid data',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password,
            registerData.password 
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
                    cy.url().should('not.include', '/register');
    })
}) 