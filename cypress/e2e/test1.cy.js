
import Login from "../pages/login_page.js"

it('Login Test', function(){
    
    cy.visit('https://mp32client.markinsondev.com/',{timeout:1200000})
    const lp=new Login();
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
})

it('Sale Processing Test', function(){

    cy.visit('https://mp32client.markinsondev.com/')
    const lp=new Login();
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()

    cy.xpath('/html/body/div/div/div[1]/header/div/button').click()
    cy.xpath('/html/body/div[2]/div/div/div[1]/ul/div[1]').should("have.text","Sales Processing").click()
    cy.xpath('/html/body/div[3]/div/div/div[1]/div/div[2]/div[2]/div/div/div/a/div').should("have.text","Sales Processing").click()
    cy.xpath('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div/div/div[1]/div/div/input').should("be.visible").type('Bk-KIT{enter}')
    cy.xpath('/html/body/div[3]/div[2]/div/div[3]/div[2]').click()
    cy.xpath('/html/body/div[1]/div/div[3]/div[1]/div[2]/div[4]/div[1]/div[2]/button[1]').should("be.visible","Apply").click()
    cy.xpath('/html/body/div[1]/div/div[3]/div[3]/div/div[3]/button[4]').should("be.visible","Process").click()
   /// cy.xpath('/html/body/div[3]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div/form/div/div/div/div[11]/div/div/div/input').type('9999000000099')

})

