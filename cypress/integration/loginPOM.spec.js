import { loginPage } from "../page_objects/loginPage";

describe('loginPOM', () => {
  
    it('login with invalid data', () => {
      cy.visit('/login');
      cy.url().should('contains','/login');
      loginPage.loginHeading.should('have.text','Please login')
      loginPage.login('ognjenovicdragan73@gmail.com','Sith_Lord99');
      loginPage.errorMsg.should('be.visible')
               .and('have.text','Bad Credentials')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
      cy.url().should('include', '/login');
    })
    
    it('login with valid data', () => {
      cy.visit('/login');
      cy.url().should('contains','/login');
      loginPage.loginHeading.should('have.text','Please login')
      loginPage.login('ognjenovic.dragan73@gmail.com','Sith_Lord99')
      cy.url().should('not.include', '/login');
  })
})

