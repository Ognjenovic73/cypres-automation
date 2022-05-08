/// <reference types="Cypress">

import { createGallery } from "../page_objects/createGallery";
import {faker} from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";

describe('createGallery POM', () => {
    let createGalleryData = {
        title: faker.word.noun(),
        description: faker.lorem.sentences(),
        image: 'https://images.all-free-download.com/images/graphiclarge/animal_big_carnivore_263240.jpg'
    }

    beforeEach ('visit login page', () => {
        cy.loginViaBackend();
        //cy.visit('/login');
        //loginPage.login('ognjenovic.dragan73@gmail.com','Sith_Lord99');
        //cy.url().should('include', '/login')
        //y.wait(2000);
        cy.visit('/create')
        cy.url().should('include', '/create')
    })

    it('validate page', () => {
        createGallery.createGalleryHeading
            .should('be.visible')
            .and('have.text', "Create Gallery")
    })

    it('create gallery /negative - 1 letter title', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
          }).as('invalidData');

        createGallery.createGallery (
            'A',
            createGalleryData.description,
            createGalleryData.image,    
        )
        cy.wait('@invalidData').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(422);
            console.log('RESPONSE', interception);
     })
        createGallery.errorMsg.should('be.visible')
               .and('have.text','The title must be at least 2 characters.')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/create');
    }) 

    it('create gallery /negative - 256 letter title', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
          }).as('invalidData');

        createGallery.createGallery (
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,.',
            createGalleryData.description,
            createGalleryData.image   
        )
        cy.wait('@invalidData').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(422);
            console.log('RESPONSE', interception);
     })
        createGallery.errorMsg.should('be.visible')
               .and('have.text','The title may not be greater than 255 characters.')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/create');
    }) 

    it('create gallery /negative - 1001 letter description',() => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
          }).as('invalidData');

        createGallery.createGallery(
            createGalleryData.title,
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Na    ',
            createGalleryData.image
        )
        cy.wait('@invalidData').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(422);
            console.log('RESPONSE', interception);
        })
        createGallery.errorMsg.should('be.visible')
               .and('have.text','The description may not be greater than 1000 characters.')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/create');
    })
    
    it('create gallery /negative - wrong format',() => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
          }).as('invalidData');

        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            'https://images.all-free-download.com/images/graphiclarge/animal_big_carnivore_263240'
        )
        cy.wait('@invalidData').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(422);
            console.log('RESPONSE', interception);
        })
        createGallery.errorMsg.should('be.visible')
               .and('have.text','Wrong format of image')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.url().should('include', '/create');  
    })

    it('create gallery with valid data',() => {

        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
          }).as('newGalleryCreated');

        createGallery.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        cy.wait('@newGalleryCreated').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(201);
            console.log('RESPONSE', interception);
        })
        cy.url().should('not.include', '/create'); 
    })

    it('cancel creating gallery', () => {
        createGallery.cancelCreateGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        cy.url().should('not.include', '/create');
    }) 

})