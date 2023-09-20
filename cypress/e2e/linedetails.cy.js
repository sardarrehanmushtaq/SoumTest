import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"

Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Line details', () => {

it('BackOrder', function(){
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
    cy.wait(3000)
    sp.clicklinedtails()
    cy.wait(5000)
    sp.enterlinedetailssupplied()
    sp.clicklinedetailsok()
 //   sp.clicknolostsale()
    cy.wait(5000)
    sp.Process()
    sp.entersopurchaseorder(purchaseorder)
    sp.clicksaleorderok()
})


})