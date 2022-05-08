class CreateGallery{
    
    get createGalleryHeading() {
        return cy.get('h1');
    }

    get titleInput() {
        return cy.get('#title');
    }

    get descriptionInput() {
        return cy.get('#description');
    }

    get imageInput() {
        return cy.get('input[placeholder="image url"]'); 
    }

    get addImageBtn() {
        return cy.get('button[type="button"]');
    }  

    get errorMsg() {
        return cy.get('p[class="alert alert-danger"]');
    }

    get imageInput2() {
        return cy.get('input[placeholder="image url"]').eq(1);
    } 

    get deleteUrlBtn() {
        return cy.get('button[type="button"]').eq(0);
    }
    
    get arrowBtnUp() {
        return cy.get('button').eq(0);
    }

    get arrowBtnDown() {
        return cy.get('button').eq(1);
    } 

    get submitBtn() {
        return cy.get('button[type="submit"]').contains('Submit');
    }

    get cancelBtn() {
        return cy.get('button[type="submit"]').contains('Cancel');
    } 
    
    createGallery (title, description, image){
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageInput.type(image)
        this.addImageBtn.click({multiple: true})
        this.imageInput2.type(image)
        this.deleteUrlBtn.click()  
        this.submitBtn.click() 
    }
    cancelCreateGallery (title, description, image) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageInput.type(image)
        this.addImageBtn.click({multiple: true})
        this.imageInput2.type(image)
        this.deleteUrlBtn.click()  
        this.cancelBtn.click()  
    }
}
export const createGallery = new CreateGallery();