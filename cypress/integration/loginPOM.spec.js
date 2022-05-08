import { loginPage } from "../page_objects/loginPage";

describe('loginPOM', () => {
  
    it('login with invalid data', () => {

      cy.intercept({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/login'
      }).as('unsuccessfulLogin');


      cy.visit('/login');
      cy.url().should('contains','/login');
      loginPage.loginHeading.should('have.text','Please login')
      loginPage.login('ognjenovicdragan73@gmail.com','Sith_Lord99');
      cy.wait('@unsuccessfulLogin').then(interception => {
             cy.log(JSON.stringify(interception.response.statusCode));
             expect(interception.response.statusCode).to.eql(401);
             console.log('RESPONSE', interception);
      })

      loginPage.errorMsg.should('be.visible')
               .and('have.text','Bad Credentials')
               .and('have.css', 'background-color', 'rgb(248, 215, 218)')
      cy.url().should('include', '/login');
    })
    
    it('login with valid data', () => {

      cy.intercept({
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/login'
      }).as('successfulLogin');

      cy.visit('/login');
      cy.url().should('contains','/login');
      loginPage.loginHeading.should('have.text','Please login')
      loginPage.login('ognjenovic.dragan73@gmail.com','Sith_Lord99')
      cy.wait('@successfulLogin').then(interception => {
        cy.log(JSON.stringify(interception.response.statusCode));
        expect(interception.response.statusCode).to.eql(200);
        console.log('RESPONSE', interception);
 })

      cy.url().should('not.include', '/login');
  })
})

