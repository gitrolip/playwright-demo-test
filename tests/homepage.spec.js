const {test,expect}=require('@playwright/test');
// const { chromium } = require('playwright');
let page1


test.beforeAll(async({browser})=>{
  
    page1 = await browser.newPage();
    await page1.goto("https://www.demoblaze.com")
})
test("Homepage validate title",async ({})=>{
    // await page.goto("https://www.demoblaze.com")
    // Get title from the page
    //await page.getByText(" PRODUCT STORE")
    await test.expect(page1).toHaveTitle("STORE")
})

test("Validate heading",async({})=>{
    // await page.goto("https://www.demoblaze.com")
    //Get headings for the page
    const heading=await page1.locator("a#nava")
    await expect(heading).toHaveText("PRODUCT STORE")
})

test("Validate menu headers",async({})=>{
    // await page.goto("https://www.demoblaze.com")
    //Get headings for the page
    const menu_header=await page1.locator("div#navbarExample ul a").allTextContents()
    expect(menu_header).toEqual(["Home (current)", "Contact", "About us", "Cart", "Log in", "Log out", "", "Sign up"])
})

test("Validate categories",async({})=>{
    const categories=await page1.locator("a#itemc").allTextContents()
    expect(categories).toEqual(["Phones","Laptops","Monitors",])
})

test("validate footer",async()=>{
    const footer = await page1.locator("footer.py-5>p").allTextContents()
    expect(footer).toEqual(["Copyright © Product Store 2017"])  

})
