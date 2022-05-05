import { allGalleries } from '../page_objects/allGalleries';

describe('All Galleries test', () => {

        beforeEach('visit all galleries page', () => {
            cy.visit('/');
        })
        it('validate page', () => {
            allGalleries.allGalleriesHeading
                .should('be.visible')
                .and('have.text', "All Galleries")
        })

        it('all galleries displaying', () => {
            allGalleries.singleGallery
                .should('be.visible')
                .and('have.length', 10)
        })

        it('10 more galleries loading', () => {
            allGalleries.singleGallery.should('have.length', 10);
            allGalleries.loadMoreButton.click();
            allGalleries.singleGallery.should('have.length', 20);
            allGalleries.loadMoreButton.click();
            allGalleries.singleGallery.should('have.length', 30);
            allGalleries.loadMoreButton.click();
            allGalleries.singleGallery.should('have.length', 40);
        })

        it('redirect to single gallery page', () => {
            allGalleries.singleGallery
                .first()
                .find('a')
                .first()
                .click();
            cy.url().should('include', '/galleries')
        })

        it('redirect to authors\' gallery page', () => {
            allGalleries.singleGallery
                .first()
                .find('a')
                .last()
                .click();
            cy.url().should('include', '/authors')
        })

        it('search returning correct results', () => {
            let searchTerm = 'Product Security Architect'

            allGalleries.singleGallery.should('have.length', 10)
            allGalleries.search(searchTerm);
            allGalleries.singleGallery.should('have.length', 1);
            allGalleries.singleGallery
                .find('a')
                .first()
                .click();
                cy.url().should('include', '/galleries/987')
        });
});
