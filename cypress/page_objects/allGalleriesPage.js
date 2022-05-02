class AllGalleriesPage {
    get searchBox() {
        return cy.get('input[placeholder="Search..."]')
    }

    get filterBtn() {
        return cy.get('button[class="btn btn-outline-secondary input-button"]')
    }

    get loadMoreBtn() {
        return cy.get('button[class="btn btn-custom"]')
    }

    get clickSingleGallery() {
        return cy.get('a[class="box-title"').eq(0)
    }

    allgalleries(search){
        this.clickSingleGallery.click();
        cy.visit('/');
        this.loadMoreBtn.click();
        this.searchBox.type(search);
        this.filterBtn.click();
        this.loadMoreBtn.click();
    }
}

export const allGalleriesPage = new AllGalleriesPage 