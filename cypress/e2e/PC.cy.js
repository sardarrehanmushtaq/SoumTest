import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"


Cypress.on('uncaught:exception', () => false)
describe('Test Suite for Product Catalogue', () => {


it.only('Product Catalogue Kitting', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(5000)
    sp.Cancelsale()
    sp.selectingNo()
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
    sp.clickproductcatalogue()
    sp.clickkitting()
    sp.clickaddtoline()
    sp.clicksellkit()

   // sp.enterkittingprice()
    //sp.clickaddlineapply()
   // sp.priceoverridereason()
  //  sp.priceoverrideok()
    cy.wait(3000)
    sp.clickaddlineapply()
    sp.clciklowprice()

    
    


})
it('Product Catalogue Kitting with Multiple BOMS', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(10000)
    sp.clickproductcatalogue()
    sp.clickmtkitting()
    sp.clickselectingboms()
    sp.enterquantityofboms()
    cy.wait(3000)
    sp.clickaddlineapply()
    sp.clicksellingprice()
    sp.clickbackorder()
    sp.clickcatalogueproductdetails()





})
it('Catalogue Product Details and Entry Details', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(10000)
    sp.clickproductcatalogue()
    sp.clickcatalogueproductdetails()
    sp.clickbackbutton()
    cy.wait(10000)
    sp.clickentrydetails()


})
it('Catalogue Search', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(10000)
    sp.clickproductcatalogue()
    cy.wait(10000)
    sp.clickcataloguesearch()
    cy.wait(3000)
    sp.entersearch()
    cy.wait(5000)
  //  sp.clickselectingsearch()
  //  sp.okdabao()

  //  cy.wait(5000)
 //   sp.clicksearchbutton()

   // 

})
})