/// <reference types="Cypress">

import {registerPage} from '../page_objects/registerPage';
import {faker} from '@faker-js/faker';


describe('registration POM', () => {
    let registerData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    beforeEach ('visit register page', () => {
        cy.visit('/register');
        cy.url().should('include', '/register')
        registerPage.registerHeading.should('have.text','Register')   
    })

    it('register with invalid email',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            'dragan@mail',
            registerData.password
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The email must be a valid email address.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
                    cy.url().should('include', '/register');
    })

    it('register with email without "."',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            'dragan@gmailcom',
            registerData.password
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The email must be a valid email address.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
                    cy.url().should('include', '/register');
    })

    it('register with invalid password',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            '123456a'
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The password must be at least 8 characters.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
                    cy.url().should('include', '/register');
    })

    it('register without tos checkbox',() => {
        registerPage.register(

            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password
        )
        cy.get('button').click()
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The terms and conditions must be accepted.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/register');
    })

    it('register with valid data',() => {
        registerPage.register(

            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password
        )
        cy.get(':checkbox').click()
        cy.get('button').click()
                    cy.url().should('not.include', '/register');
    })
}) 