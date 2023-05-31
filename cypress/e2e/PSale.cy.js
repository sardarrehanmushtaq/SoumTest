import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"

Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Quote and Recall Sale', () => {

it('Sale Processing Add Product', function(){
    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(5000)
    sp.searchcustomer()
   // sp.enterWarehouse()
    sp.clickcustomer_apply()
    sp.Productsearch()
    sp.clickproductsearchbutton()
    sp.Okbutton()
    cy.wait(5000)

    sp.Apply()
    cy.wait(5000)

    

})
it('Park Sale', function(){

    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(5000)
    sp.clickparksale()
    sp.clickparksale()

})
it('Recall Sale', function(){
    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(5000)
    sp.clickrecallsale()
    sp.clickrecallsaleconfirm()




})
})