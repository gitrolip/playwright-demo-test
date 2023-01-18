exports.ProductDescription= class ProductDescription{
    constructor(page){
        this.page=page
    }
    async addProductToCart(){
        await this.page.locator('text="Add to cart"').click()
    }
}