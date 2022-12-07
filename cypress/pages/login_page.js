 class Login{
       Username="/html/body/div/div/div[3]/div/div/div/form/div[1]/div/div/input"
       Password="/html/body/div/div/div[3]/div/div/div/form/div[2]/div/div/input"
       Loginbutton="/html/body/div/div/div[3]/div/div/div/form/div[3]/button"

    
    enterUsername(){
        cy.xpath(this.Username).type('rehan')   

    }

    enterPassword(){
        cy.xpath(this.Password).type('12345')
       

    }

    clickLogin(){
        cy.xpath(this.Loginbutton).click()

    }

}

export default Login