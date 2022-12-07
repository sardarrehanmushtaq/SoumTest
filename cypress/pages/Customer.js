class Customer{

    Account_receiveables="/html/body/div[2]/div/div/div[1]/ul/div[3]"
    customer_maintenance="/html/body/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div/div/a/div"
    

clickaccountreceivaebles(){
    cy.xpath(this.Account_receiveables).should("be.visible").click()   

    
    }

clickcustomermaintenance(){
    cy.xpath(this.customer_maintenance).should("be.visible").click()   


}

}
export default Customer