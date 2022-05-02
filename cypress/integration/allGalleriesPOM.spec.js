import{allGalleriesPage} from '../page_objects/allGalleriesPage'
import { faker } from '@faker-js/faker';


describe ('All galleries', () => {
    let searchFieldText= {
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
}) 
