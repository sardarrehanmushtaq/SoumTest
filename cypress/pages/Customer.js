class Customer{

    Account_receiveables="/html/body/div[2]/div/div/div[1]/ul/div[3]"
    customer_maintenance="/html/body/div[3]/div/div/div[1]/ul/div[2]/div[2]/div/div/ul/a/div"
    search_customer="/html/body/div/div/div[3]/div[1]/div[1]/div[1]/div/div[1]/div/div/div/input"
    add_customer="/html/body/div/div/div[3]/div[3]/div/div[3]/button[1]"  
    enter_customer_number="/html/body/div/div/div[3]/div[1]/div[2]/div[3]/div/div/div/div[1]/div/div/div/form/div/div[1]/div/div[1]/div/div/input"
    enter_customer_name="/html/body/div/div/div[3]/div[1]/div[2]/div[3]/div/div/div/div[1]/div/div/div/form/div/div[1]/div/div[3]/div/div/input"
    click_tick_button="/html/body/div/div/div[3]/div[3]/div/div[3]/button[5]"

clickaccountreceivaebles(){
    cy.xpath(this.Account_receiveables).should("be.visible").click()   

    
    }

clickcustomermaintenance(){
    cy.xpath(this.customer_maintenance).should("be.visible").click()   


}

entercustomer(){
    cy.xpath(this.search_customer).should("be.visible").type('12{enter}')  


}
clickaddcustomer(){
    cy.xpath(this.add_customer).should("be.visible").click()


}
entercustomernumber(customernumber){
    cy.xpath(this.enter_customer_number).should("be.visible").focus().clear()
    cy.xpath(this.enter_customer_number).should("be.visible").type(customernumber) 


}
entercustomername(customername){
    cy.xpath(this.enter_customer_name).should("be.visible").type(customername) 


}
clicktickbutton(){
    cy.xpath(this.click_tick_button).should("be.visible").click()
}
}
export default Customer