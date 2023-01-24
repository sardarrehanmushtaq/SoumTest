

 class Login{
       Username="/html/body/div/div/div[3]/div/div/div/form/div[1]/div/div/input"
       Password="/html/body/div/div/div[3]/div/div/div/form/div[2]/div/div/input"
       Loginbutton="/html/body/div/div/div[3]/div/div/div/form/div[3]/button"
    
    enterURL(){
        cy.visit(Cypress.config('baseUrl'))

    }

    enterUsername(){
        cy.xpath(this.Username).type(Cypress.env('USERNAME')) 

    }

    enterPassword(){
        cy.xpath(this.Password).type(Cypress.env('PASSWORD'))
       

    }

    clickLogin(){
        cy.xpath(this.Loginbutton).click()

    }

}

export default Login