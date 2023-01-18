exports.Login = class Login {

    constructor(page){
        this.page = page
    }

    async senduserName(username){
        await this.page.locator("#loginusername").fill(username);
    }
    async sendPassword(pwd){
        await this.page.locator("#loginpassword").fill(pwd)
    }   
    async clickLoginBtn(){
        await this.page.getByRole('button', { name: /Log in/i }).click();

    } 

}