class CreateGalleryPage{
    get titleInput() {
        return cy.get('#title');
    }
    get descriptionInput() {
        return cy.get('#description');
    }
    get imageInput() {
        return cy.get('input-group');
    }
    get addImageBtn() {
        return cy.get('button[type="button"]');
    }
    get imageInput2() {
        return cy.get('input[placeholder="image url"]').eq(1);
    }
    get arrowBtnUp() {
        return cy.get('i[class="fas fa-chevron-circle-up"]')
    }
    get arrowBtnDown() {
        return cy.get('button'),eq(1)
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
        this.arrowBtnUp.click({multiple: true})
        this.arrowBtnDown.click({multiple: true})
        this.submitBtn.click()
    }
}
export const createGalleryPage = new CreateGalleryPage();