

 class Login{
       Username="//input[@id='user-name']"
       Password="//input[@id='password']"
       Loginbutton="//input[@id='login-button']"
    
    enterURL(){
        cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        cy.viewport(1200,1200)

    }

    enterUsername2(){
        cy.xpath(this.Username).type(Cypress.env('USERNAME2')) 

    }

    enterPassword2(){
        cy.xpath(this.Password).type(Cypress.env('PASSWORD2'))
       

    }

    clickLogin(){
        cy.xpath(this.Loginbutton).click()

    }
    enterUsername1(){
        cy.xpath(this.Username).type(Cypress.env('USERNAME')) 

    }

    enterPassword1(){
        cy.xpath(this.Password).type(Cypress.env('PASSWORD'))
       

    

    }

}

export default Login