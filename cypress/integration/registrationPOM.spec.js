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

    before ('visit register page', () => {
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
        registerPage.errorMsg.should('be.visible')
                    .and('have.text','The email must be a valid email address.')
                    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
                    cy.url().should('include', '/register');
    })

}) 