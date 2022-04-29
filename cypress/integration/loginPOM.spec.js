import { loginPage } from "../page_objects/loginPage";

describe('loginPOM', () => {

    it('login with valid data', () => {
        cy.visit('/login')
      /*  loginPage.emailInput.type('gugagaga@gmail.com')
        loginPage.passwordInput.type('gugagaga1')
        loginPage.submitBtn.click(); */
        loginPage.login('gugagaga@gmail.com','gugagaga1');
    })
})