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
    sp.clickburgermenu()
    sp.Saleprocessing()
    sp.Innersaleprocessing()
   //// sp.Cancelsale()
   // sp.selectingNo()
    //sp.searchcustomer()
   // sp.enterWarehouse()
    //sp.clickcustomer_apply()
    
    sp.Productsearch()
    
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
    sp.paymentmethod()
    sp.pricechange()
    sp.paymentapply()
    sp.cashmeup()
    //sp.paymentok()




})

it('Customer Test', function(){

    const lp=new Login();
    const sp=new Sale();
    const cp=new Customer();
    lp.enterURL()
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    sp.clickburgermenu()
    cp.clickaccountreceivaebles()
    cp.clickcustomermaintenance()
    sp.Apply()

})
