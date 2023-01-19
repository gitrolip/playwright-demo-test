const{test, expect} = require('@playwright/test')
const{Login} = require('./pageObject/login')
const{Menu} = require('./pageObject/menu')
const{Contact}= require('./pageObject/contact')
const{Signup}= require('./pageObject/signup')
const{Cart}= require('./pageObject/cart')
const{Home}= require('./pageObject/home')
const{ProductDescription}= require('./pageObject/productDescription')


let page1

test.beforeAll(async({browser})=>{
    page1= await browser.newPage();
    await page1.goto("/")
})



test("Validate successful signup",async()=>{
    var menu= new Menu(page1);
    var signup = new Signup(page1)
    await menu.clickSignUp();
    await signup.sendUserName("testrp41@test.com")
    await signup.sendPassword("12345")
    //expect code to validate popup msg;Code to handle alert before action
    expect(await signup.clickSignupBtnAndReturnMsg()).toEqual('Sign up successful.')
    

})
test("Successful login", async()=>{
    var menu = new Menu(page1)
    var login = new Login(page1)
    await menu.clickLogin()
    await login.senduserName("testrp41@test.com")
    await login.sendPassword("12345")
    await login.clickLoginBtn()
    //expect code to validate login
    expect(await menu.getUserName()).toContain("Welcome testrp41@test.com")
})

test("Validate Contact tab", async()=>{
    var menu= new Menu(page1)
    var contact= new Contact(page1)
    var cart = new Cart(page1)
    await menu.clickContact()
    await contact.sendContactEmail("testrp41@test.com")
    await contact.sendContactName("testrp41")
    await contact.sendContactMsg("abcd")
    //expect code to validate popup msg;Code to handle alert before action
    expect(await contact.clickSendMsgBtnAndReturnMsg()).toEqual('Thanks for the message!!')

})

test("Add to cart without logging in", async()=>{
    var menu= new Menu(page1)
    var cart= new Cart(page1)
    var home= new Home(page1)
    var productDescription = new ProductDescription(page1)
    await home.clickProduct("Samsung galaxy s6")
    await productDescription.addProductToCart()
    await menu.clickCart()
    //expect code to validate cart;
    // great test
    expect(await cart.getLatestProductTitle()).toContain("Samsung galaxy s6")
})

