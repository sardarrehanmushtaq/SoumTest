import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"

Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Quote and Recall Sale', () => {


it('Recall Quote', function(){

    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    sp.searchcustomer()
    sp.enterWarehouse()
    sp.clickcustomer_apply()
    cy.wait(5000)
    sp.clickrecallquote()
    sp.clickquotetable()
    sp.clickquoteok()
    cy.wait(5000)
    
       
})   
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
    sp.Productsearch()
    sp.clickproductsearchbutton()
    sp.Okbutton()
    sp.Apply()
    cy.wait(5000)
    

})
it('Making Quote', function(){

    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(5000)
    sp.clickmakingquote()
    sp.clickconfirmquote()



})


})