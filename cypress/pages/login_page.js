

 class Login{
       Username="/html/body/div[1]/div/div/div[3]/div/div/div/form/div[1]/div/div/input"
       Password="/html/body/div[1]/div/div/div[3]/div/div/div/form/div[2]/div/div/input"
       Loginbutton="/html/body/div[1]/div/div/div[3]/div/div/div/form/div[3]/button"
    
    enterURL(){
        cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        cy.viewport(1200,1200)

    }

    enterUsername(){
        cy.xpath(this.Username).type(Cypress.env('USERNAME2')) 

    }

    enterPassword(){
        cy.xpath(this.Password).type(Cypress.env('PASSWORD2'))
       

    }

    clickLogin(){
        cy.xpath(this.Loginbutton).click()

    }

}

export default Login