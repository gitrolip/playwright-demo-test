exports.Home= class Home{
    constructor(page){
        this.page=page
    }
    async clickProduct(productName){
        await this.page.locator('text="'+productName+'"').click()
    }
}