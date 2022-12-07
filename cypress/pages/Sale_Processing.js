class Sale{

   Burger_menu='/html/body/div/div/div[1]/header/div/button'
   Sale_processing= '/html/body/div[2]/div/div/div[1]/ul/div[1]'
   Inner_saleprocessing='/html/body/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div/div/a/div'
   Product_search='/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input'
   quantity="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/div/div/input"
   Ok_button= '/html/body/div[3]/div[2]/div/div[3]/div[2]/div'
   Apply_button='/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[2]/button[1]'
   editinglinebtn="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[2]/div/div/div[6]/div[2]/table/tbody/tr[1]/td[4]/a[1]"
   supplied="/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[2]/div/div/div[6]/div[1]/div/div[1]/div/table/tbody/tr[1]/td[3]/div/div/div[1]/input"
   Process_button='/html/body/div[1]/div/div[3]/div[3]/div/div[3]/button[4]'
   Customer_purchase_order="/html/body/div[3]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div/form/div/div/div/div[11]/div/div/div/input"
   Saleconfirmation="/html/body/div[3]/div[2]/div/div[3]/button[1]/span[1]/div"
   Cancel_sale="/html/body/div[1]/div/div[3]/div[3]/div/div[3]/button[3]"
   selecting_no="/html/body/div[3]/div[2]/div/div[2]/button[2]"
   search_customer ="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div/div[1]/div/div/input"
   Warehouse="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div/div[1]/div/div/input"
   Apply_Customer="/html/body/div[1]/div/div[3]/div[1]/div[1]/div[1]/div[3]/button[2]"
   cash_location="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[2]/div/div[1]/div/div/input"
   payment_method="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/div[1]/div/div[1]/div/div/input"
   payment_apply="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/button"
   cash_me_up="/html/body/div[4]/div[2]/div/div[2]/button"
   price_change="/html/body/div[3]/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div[1]/div/div/input"
   payment_entry_ok="/html/body/div[3]/div[2]/div/div[3]/button[1]"

clickburgermenu(){
    cy.xpath(this.Burger_menu).should("be.visible").click()   

}

Saleprocessing(){
    cy.xpath(this.Sale_processing).should("contain", "Sales Processing").click()
   

}

Innersaleprocessing(){
    cy.xpath(this.Inner_saleprocessing).should("contain","Sales Processing").click()

}
Cancelsale(){
    cy.xpath(this.Cancel_sale).should("be.visible").click()

}
selectingNo(){
    cy.xpath(this.selecting_no).should("be.visible").click()

}

searchcustomer(){
    cy.xpath(this.search_customer).should("be.visible").type('14{enter}')
}


enterWarehouse(){
    cy.xpath(this.Warehouse).should("be.visible").type('NW{enter}')

}
clickcustomer_apply(){
    cy.xpath(this.Apply_Customer).should("be.visible").click()
}

Productsearch(){
    cy.xpath(this.Product_search).should("be.visible").type('BK-KIT{enter}')   

}

Okbutton(){
    cy.xpath(this.Ok_button).should("be.visible").click()
}
enterquantity(){
    cy.xpath(this.quantity).should("be.visible").type(11)
}


Apply(){
    cy.xpath(this.Apply_button).click()
}

editline(){
    cy.xpath(this.editinglinebtn).should("be.visible").click()
}

suppliedquantity(){
    cy.xpath(this.supplied).should("be.visible").click()
    cy.xpath(this.supplied).should("be.visible").type(11)
}

    
Process(){
    cy.xpath(this.Process_button).click()
}


Customerpurchaseorder(purchaseorder){
    cy.xpath(this.Customer_purchase_order).should("be.visible").type(purchaseorder)
}

Saleconfirm(){
    cy.xpath(this.Saleconfirmation).should("be.visible").click()
}

cashlocation(){
    cy.xpath(this.cash_location).should("be.visible").clear()
    cy.xpath(this.cash_location).should("be.visible").type('10{enter}')
}

paymentmethod(){
    cy.xpath(this.payment_method).should("be.visible").clear()
    cy.xpath(this.payment_method).should("be.visible").type("cash{enter}")
}

paymentapply(){
    cy.xpath(this.payment_apply).should("be.visible").click()

}
cashmeup(){
    cy.xpath(this.cash_me_up).should("be.visible").click()
}
pricechange(){
    cy.xpath(this.price_change).should("be.visible").clear()
    cy.xpath(this.price_change).type('109{enter}')
}

paymentok(){
    cy.xpath(this.payment_entry_ok).should("be.visible").click()
}


}
export default Sale