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
    })

    it('register with valid data',() => {
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password
        )
    })
}) 