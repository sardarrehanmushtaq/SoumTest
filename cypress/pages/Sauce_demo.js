class Sauce{
   Product_List="inventory_container"
   pageTitle="Products"
   pagecontains="//body/div[@id='root']/div[@id='page_wrapper']/div[@id='contents_wrapper']/div[@id='inventory_container']/div/div[@id='inventory_container']/div[@class='inventory_list']/div[2]/div[1]"
   addtocart="//button[@id='add-to-cart-sauce-labs-backpack']"
   cart="//a[@class='shopping_cart_link']"
   verifyingproductoncart="//div[@class='inventory_item_name']"
   removefromcart="//button[@id='remove-sauce-labs-backpack']"
   checkout="//button[@id='checkout']"
   firstname="//input[@id='first-name']"
   lastname="//input[@id='last-name']"
   postalcode="//input[@id='postal-code']"
   continuebutton="//input[@id='continue']"
   finish="//button[@id='finish']"
   productdetails="//div[normalize-space()='Sauce Labs Backpack']"
   burgermenu="//button[@id='react-burger-menu-btn']"
   About="//a[@id='about_sidebar_link']"
   





viewproductList(){
    cy.xpath(this.pagecontains).should("be.visible")

}
clickaddtocart(){
    cy.xpath(this.addtocart).should("be.visible").click()
}
goingtocart(){
    cy.xpath(this.cart).should("be.visible").click()
}
productoncart(){
    cy.xpath(this.verifyingproductoncart).should("be.visible")
}
removeproductitem(){
    cy.xpath(this.removefromcart).should("be.visible").click()

}
checkingout(){
    cy.xpath(this.checkout).should("be.visible").click()

}
customerdata(){
    cy.xpath(this.firstname).type(Cypress.env('firstname'))
    cy.xpath(this.lastname).type(Cypress.env('lastname'))
    cy.xpath(this.postalcode).type(Cypress.env('postalcode'))

}
clickcontinue(){
    cy.xpath(this.continuebutton).should("be.visible").click()

}
clickfinish(){
    cy.xpath(this.finish).should("be.visible").click()

}
clickproductdetails(){
    cy.xpath(this.productdetails).should("be.visible").click()
}
clickburgermenu(){
    cy.xpath(this.burgermenu).should("be.visible").click()
}
clickAbout(){
    cy.xpath(this.About).should("be.visible").click()
}


}
export default Sauce