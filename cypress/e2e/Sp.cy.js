import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"


Cypress.on('uncaught:exception', () => false)

describe('Test Suite for Sale Processing', () => {


it('Sale Processing Test', function(){
    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(2000)
    sp.Productsearch()
    sp.clickproductsearchbutton()
   // sp.clickburgermenu()
   // sp.Saleprocessing()
   // sp.Innersaleprocessing()
   //// sp.Cancelsale()
   // sp.selectingNo()
    //sp.searchcustomer()
   // sp.enterWarehouse()
    //sp.clickcustomer_apply()
    sp.Okbutton()
    cy.wait(5000)
    //sp.enterquantity()
    sp.Apply()
   // sp.editline()
    //sp.suppliedquantity()
    sp.Process()
    sp.Customerpurchaseorder(purchaseorder)
    sp.Saleconfirm()
    sp.cashlocation()
   // sp.paymentmethod()
   // sp.pricechange()
   // sp.paymentapply()
   // sp.cashmeup()
   // sp.paymentok()




})
it('Sale Processing Kitting Product', function(){
    const lp=new Login();
    const sp=new Sale();
    const purchaseorder=Math.floor(Math.random() * 100000000000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    //sp.clickburgermenu()
    sp.clickdashboardsaleicon()
   // sp.Saleprocessing()
    //sp.Innersaleprocessing()
    sp.KittingProductsearch()
    sp.clickproductsearchbutton()
    cy.wait(3000)
    sp.sellaskit()
    sp.Okbutton()
    cy.wait(3000)
    sp.Apply()
    sp.clickproductdetails()
    cy.wait(3000)
    sp.clickunsaved()
    sp.clickkitcomponents()
    sp.clickcomponentdetails()
    cy.wait(3000)
    sp.clickcomponentdetailsok()
    cy.wait(3000)
   //sp.productprice()
   // sp.priceoverridereason()
    //sp.priceoverrideok()
    
    


})
it('Product Catalogue', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(10000)
    sp.clickproductcatalogue()
    sp.clickaddtoline()
    sp.clickaddlineapply()
    sp.clicksellingprice()

    

})
it('Product Catalogue Kitting', function(){

    const lp=new Login();
    const sp=new Sale();  
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickdashboardsaleicon()
    cy.wait(10000)
    sp.clickproductcatalogue()
    sp.clickkitting()
    sp.clickaddtoline()
    sp.clicksellkit()
   // sp.enterkittingprice()
    //sp.clickaddlineapply()
   // sp.priceoverridereason()
   // sp.priceoverrideok()
    cy.wait(3000)
    sp.clickaddlineapply()
    sp.clicksellingprice()
    
    


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
it.only('Catalogue Product Details and Entry Details', function(){

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

})