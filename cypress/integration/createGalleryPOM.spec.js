/// <reference types="Cypress">

import { createGalleryPage } from "../page_objects/createGalleryPage";
import {faker} from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";

describe('createGallery POM', () => {
    let createGalleryData = {
        title: faker.word.noun(),
        description: faker.lorem.sentences(),
        image: 'https://images.all-free-download.com/images/graphiclarge/animal_big_carnivore_263240.jpg'
    }
    beforeEach ('visit login page', () => {
        cy.visit('/login');
        loginPage.login('ognjenovic.dragan73@gmail.com','Sith_Lord99');
        cy.url().should('include', '/login')
        cy.wait(2000);
        cy.visit('/create')
        cy.url().should('include', '/create')
    })
    it('createGallery with valid data',() => {
        createGalleryPage.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image

        )
        cy.get('button[type="submit"]').contains('Submit').click() 
    })
    it('cancel createGallery', () => {
        createGalleryPage.createGallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.image
        )
        cy.get('button[type="submit"]').contains('Cancel').click()
    })

})