/// <reference types="Cypress">

class RegisterPage {

    get registerHeading() {
        return cy.get('h1');
    }

    get firstNameInput () {
        return cy.get('#first-name');
    }

    get lastNameInput () {
        return cy.get('#last-name');
    }

    get emailInput () {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get confirmedPasswordInput() {
        return cy.get('#password-confirmation');
    }

    get errorMsg() {
        return cy.get('p[class="alert alert-danger"]');
    }

    get tosCheckbox() {
        return cy.get(':checkbox')
    }

    get submitBtn() {
        return cy.get('button');
    }

    register (firstName,lastName,email,password,confirmedPassword){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        // this.confirmedPasswordInput.type(confirmedPassword) (David)
        // this.tosCheckbox.check()
        // this.submitBtn.click()
    }
}
export const registerPage = new RegisterPage();
