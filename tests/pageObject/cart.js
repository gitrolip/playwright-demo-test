exports.Cart= class Cart{
    constructor(page){
        this.page=page
    }
    async getLatestProductTitle(){
        var productTitle=await this.page.locator("#tbodyid>tr>td >> nth=1").innerText()
        console.log(productTitle)
        return productTitle
    }
    
}