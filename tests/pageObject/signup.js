exports.Signup= class Signup{
    constructor(page){
        this.page=page
    }
    async sendUserName(username){
        await this.page.locator("input#sign-username").fill(username);

    }
    async sendPassword(pwd){
        await this.page.locator("input#sign-password").fill(pwd)
    }


    async clickSignupBtnAndReturnMsg(){
        var msg
        await this.page.on('dialog', async(dialog) => {
            console.log(dialog.message())
            msg= dialog.message()
            await dialog.accept()  
        })
        await this.page.getByRole('button', { name: /Sign up/i }).click();
        return msg
    }
}