exports.Contact = class Contact{
    constructor(page){
        this.page=page
    }

    async sendContactEmail(cEmail){
        await this.page.locator("#recipient-email").fill(cEmail)
    }

    async sendContactName(cName){
        await this.page.locator("#recipient-name").fill(cName)
    }

    async sendContactMsg(cMsg){
        await this.page.locator("#message-text").fill(cMsg)
    }

    async clickSendMsgBtnAndReturnMsg(){
        var msg
        await this.page.on('dialog', async(dialog) => {
            console.log(dialog.message())
            msg= dialog.message()
            await dialog.accept()  
        })
        await this.page.getByRole('button', { name: /Send message/i }).click();
        return msg
    }
}