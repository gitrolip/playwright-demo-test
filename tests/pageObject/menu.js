exports.Menu = class Menu{

    constructor(page){
        this.page=page
    }
    async clickLogin(){
        await this.page.locator("#login2").click();
    }
    async clickSignUp(){
        await this.page.locator("a#signin2").click();
    }

    async clickContact(){
        await this.page.locator('text="Contact"').click();
    }

    async clickCart(){
        await this.page.locator("#cartur").click();
    }

    async getAllMenuOptions(){
        return await this.page.locator("#navbarExample>ul").allTextContents()
    }

    async getUserName(){
        
        await this.page.getByText('Log out').waitFor()
        var txt= await this.page.locator("#nameofuser").innerText()
        console.log(txt)
        return txt
    }
}   
