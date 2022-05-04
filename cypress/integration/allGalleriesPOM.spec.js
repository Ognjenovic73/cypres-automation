import{allGalleriesPage} from '../page_objects/allGalleriesPage'
import { faker } from '@faker-js/faker';


describe ('All galleries', () => {

    beforeEach('visit all galleries page', () => {
        cy.visit('/');
    })

    it('validate page', () => {
        cy.visit('/');
        allGalleriesPage.allGalleriesHeading
               .should('be.visible')
               .and('have.text','All Galleries')
    } )

    it('all galleries displaying', () => {
        allGalleriesPage.singleGallery
        .should('be.visible')
        .and('have.length',10)
    })

    it('10 more galleries loading', () => {
        allGalleriesPage.singleGallery.should('have.length', 10);
        allGalleriesPage.loadMoreBtn.click();
        allGalleriesPage.singleGallery.should('have.length', 20);
        allGalleriesPage.loadMoreBtn.click();
        allGalleriesPage.singleGallery.should('have.length', 30);
    })

    it('redirect to single gallery', () => {
        allGalleriesPage.singleGallery
             .first()
             .find('a')
             .first()
             .click();
    })

    it('redirect to authors\' gallery page', () => {
        allGalleriesPage.singleGallery
             .first()
             .find('a')
             .last()
             .click();
        cy.url().should('include', '/authors')
    })

    it('search is running correct results', () => {
        let searchTerm = 'Product Security Architect'
        allGalleriesPage.singleGallery.should('have length',10)
        allGalleriesPage.search(searchTerm);
        allGalleriesPage.singleGallery.should('have.length',1);
        allGalleriesPage.singleGallerie
           .find('a')
           .first()
           .should('have.text',searchTerm)

    
    })


    
    /* let searchFieldText= {
        searchField: faker.random.word()  
    }

    before('visit all galleries page', () => {    
        cy.visit('/');    
        cy.url().should('not.include', '/register');
    })

    it ('All galleries search function', () => {
        allGalleriesPage.allgalleries(
            searchFieldText.searchField
        )
    })
    it('All Galleries', () => {
        cy.visit('/');
        allGalleriesPage.singleGallery.contains('Human Integration Technicican')
    }) */
}) 
