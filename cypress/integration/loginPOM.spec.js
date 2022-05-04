import { loginPage } from "../page_objects/loginPage";

describe('loginPOM', () => {

    beforeEach('visit login page', () => {
      cy.visit('/login')
    })
  /*
    it('negative case login / bad email', () => {
    loginPage.login('ognjenovicdragan73@gmail.com','Sith_Lord99')
    })

    it('negative case login / bad password', () => {
      loginPage.login('ognjenovic.dragan73@gmail.com','SithLord99')
    })

    it('negative case login / bad credentials', () => {
      loginPage.login('ognjenovic.73@gmail.com','Sith99')
    }) */

    it('login with valid data', () => {
       
      /*  loginPage.emailInput.type('gugagaga@gmail.com')
        loginPage.passwordInput.type('gugagaga1')
        loginPage.submitBtn.click(); */
        loginPage.login('ognjenovic.dragan73@gmail.com','Sith_Lord99');
    })
    
})