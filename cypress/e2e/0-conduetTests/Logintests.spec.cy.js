/// <reference types = "cypress" />

//const { should } = require("chai")

//mocha framework suit

describe("Login test cases", function callback()
{

    beforeEach(()=>{
        cy.log('I am a good tester')
    })
    it("perform signup",() =>{

        cy.visit('https://example.cypress.io')
        cy.contains('type').should('be.visible')
        cy.contains('type').click()
        //fetch the value of label firstname and print it and assert 
        cy.get('label[for="fullName1"]').invoke('text').then((text1) =>
        {
           cy.log(text1.text)
           expect(text1).to.eq('Full Name')
      })
       // cy.contains('blur').click()
       cy.get('input[id="fullName1"]').type('hello')
       cy.get('#email1').type('newlife@gmail.com')
       cy.get('input[type="email"]').click()
        cy.contains('Password').type('helloworld')
        //cy.get('#user_email_login')
       // cy.visit('https://app.invest.dubai.ae/')
       // cy.get("//button/span[contains(text(),'Search')]").click()
       // cy.wait(30000)
       // cy.get("//input[@data-ved='0ahUKEwjOnuj47eD9AhV8VaQEHWRcBtgQ4dUDCBA']").click()
        //cy.get("//a[href='#/login']").click()
       
        //cy.get("//input[@name='q']").type("Pakistan zindabad")
//button [contains(text(),'Confirm')]
    })

    it('Second test is here',()=>{

        cy.log('I am inside the second method')

    })

})

