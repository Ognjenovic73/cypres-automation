class AllGalleriesPage {
    get allGalleriesHeading(){
        return cy.get('h1')
    }
    
    get searchInput() {
        return cy.get('input')
    }

    get filterBtn() {
        return cy.get('btn').first()
    }

    get loadMoreBtn() {
        return cy.get('.btn').last()
    }

    get singleGallery() {
        return cy.get('.cell')
    }

    search(searchTerm){
        this.searchInput.type(searchTerm);
        this.filterButton.click();
    }
/*
    allgalleries(search){
        this.clickSingleGallery.click();
        cy.visit('/');
        this.loadMoreBtn.click();
        this.searchInput.type(search);
        this.filterBtn.click()
    } */
}

export const allGalleriesPage = new AllGalleriesPage 