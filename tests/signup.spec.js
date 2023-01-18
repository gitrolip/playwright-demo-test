const{test,expect}=require('@playwright/test');
const username='testrp1024865@test.com'
const pwd='12345'

let page1

test.beforeAll(async({browser})=>{
page1= await browser.newPage();
await page1.goto("https://www.demoblaze.com")
})

test.only("Validate signup",async()=>{
    var msg
    await page1.locator("a#signin2").click();
    await page1.locator("input#sign-username").fill(username);
    await page1.locator("input#sign-password").fill(pwd)
    await page1.on('dialog', async(dialog) => {
        console.log(dialog.message())
        msg= dialog.message()
        await dialog.accept()  
    })
    await page1.getByRole('button', { name: /Sign up/i }).click();
    expect(await dialog.message()).toEqual('Sign up successful.')
    // await page1.click('button:has-text("Sign up")')  
    // await page1.waitForSelector('span:has-text("Sign up")')
    // await page1.waitForSelector('div[class="modal-footer"]')
    // await page1.click('div[role="dialog"] button:has-text("Sign up")')
    //await expect(page1.locator('text=Sign up successful.')).toBeVisible();
    // await page1.on('dialog', dialog => dialog.accept());
    // await page1.waitForSelector('span:has-text("Sign up")')
    // await page1.on('dialog', async(dialog) => {
    //     await page1.waitForSelector('span:has-text("Sign up successful.")')
    //     console.log(dialog.message())
    //     expect(dialog.message()).toEqual('Sign up successful.')
    //     await dialog.accept()
    //     //await dialog.locator('text=OK').click()
    // })

})

test("Validate login",async()=>{
    await page1.locator("a#login2").click();
    await page1.locator("#loginusername").fill(username);
    await page1.locator("#loginpassword").fill(pwd);
    await page1.getByRole('button', { name: /Log in/i }).click();
    await expect(page1.locator("#nameofuser")).toContainText(username)
})