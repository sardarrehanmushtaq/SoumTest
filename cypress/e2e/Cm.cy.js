import Login from "../pages/login_page.js"
import Sale from "../pages/Sale_Processing.js"
import Customer from "../pages/Customer.js"

Cypress.on('uncaught:exception', () => false)
describe('Test Suite for Customer', () => {

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
})