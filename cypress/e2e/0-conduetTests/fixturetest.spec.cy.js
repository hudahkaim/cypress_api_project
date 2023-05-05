/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />
require('cypress-xpath')

describe("Test the data flow through fixture",()=>{

    beforeEach(()=>{

        cy.visit("https://leetcode.com/")
        cy.fixture("sign-up").then(function(data){
            globalThis.data=data
        })

    })

    it("Validate the signup data from fixtures", ()=>{
        cy.xpath('//span[contains(text(),"Sign in")]').click()
        cy.get("#id_login").type(data.username)
        cy.get("#id_password").type(data.password)
        cy.xpath('//span[contains(text(),"Sign In")]').click()
    })

})

