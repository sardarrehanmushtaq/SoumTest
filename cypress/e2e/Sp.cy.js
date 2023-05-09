import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"
import Customer from "../pages/Customer.js"

Cypress.on('uncaught:exception', () => false)


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
    sp.Okbutton()
    cy.wait(3000)
    sp.sellaskit()

    
    sp.Apply()
   //sp.productprice()
   // sp.priceoverridereason()
    //sp.priceoverrideok()
    sp.clickproductdetails()
    cy.wait(3000)
    sp.clickunsaved()
    sp.clickkitcomponents()
    sp.clickcomponentdetails()
    cy.wait(3000)
    sp.clickcomponentdetailsok()
    cy.wait(3000)
    


})


it('Customer Test', function(){

    const lp=new Login();
    const sp=new Sale();
    const cp=new Customer();
    const customernumber=Math.floor(Math.random() * 10000);
    const customername=Math.floor(Math.random() * 10000);
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickburgermenu()
    cp.clickaccountreceivaebles()
    cp.clickcustomermaintenance()
    cp.entercustomer()
    cp.clickaddcustomer()
    cp.entercustomernumber(customernumber)
    cp.entercustomername(customername)
    cp.clicktickbutton()


})
