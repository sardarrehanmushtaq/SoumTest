import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"

Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Quote and Recall Sale', () => {

it('Sale Order', function(){
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
    sp.enterquantity()
   // sp.productprice()
    sp.priceoverridereason()
    sp.priceoverrideok()
    sp.Apply()
    cy.wait(5000)
    sp.clickeditline()
    sp.clicklinesuppliedquantity()
    sp.clicksaveline()
    sp.Process()
    sp.entersopurchaseorder(purchaseorder)
    sp.clicksaleorderok()




})
})