import Login from "../pages/login_page.js"
import Sauce from "../pages/Sauce_demo.js"


Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Sauce demo', () => {


it('login pass', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
})
it('login fail with invalid username and invalid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername1()
    lp.enterPassword1()
    lp.clickLogin()
})
it('login fail valid username but invalid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword1()
    lp.clickLogin()
})
it('login fail invalid username but valid password', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername1()
    lp.enterPassword2()
    lp.clickLogin()

})
it('login fail empty username empty password', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.clickLogin()

})
it('Verifying that I am landing on correct page', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()


})
it('Adding to Cart from Product detail', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickproductdetails()
    sd.clickaddtocart()

})

it('Adding product to cart on home page', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()


})
it('Verifying that product is on cart or not', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.productoncart()


})
it('Removing product from cart', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.removeproductitem()


})
it('Clicking continue without data', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.checkingout()
    sd.clickcontinue()

})
it('Checking out with correct data', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickaddtocart()
    sd.goingtocart()
    sd.checkingout()
    sd.customerdata()
    sd.clickcontinue()
    sd.clickfinish()
    cy.wait(5000)



})
it('Going into About', function(){
    const lp=new Login();
    const sd=new Sauce();
    lp.enterURL()
    lp.enterUsername2()
    lp.enterPassword2()
    lp.clickLogin()
    sd.viewproductList()
    sd.clickburgermenu()
    sd.clickAbout()
})
});



  
  


  
  





