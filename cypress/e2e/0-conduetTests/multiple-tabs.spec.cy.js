/// <reference types="cypress" />

describe("Multiple window handeling with cypress", ()=>{

beforeEach(()=>{

    cy.visit("https://test.qatechhub.com/window-handling/")

})

it("TC#1 Verify Href and target attributes  ",()=>{

    cy.contains("a" , "Click Here").as("button")
    
    cy.get("@button").should("have.attr","href").and("equal","https://qatechhub.com")

    cy.get("@button").should("have.attr","target").and("equal","_blank")

})

it("TC#2 Navigate to another URL by removing target attribute",()=>{

    cy.contains("a","Click Here").as("button")

    cy.get("@button").invoke("removeAttr","target").click()

//to verify if the new page is loaded
   cy.xpath("//p/a").as("urls")
   cy.get("@urls").eq(0).invoke('text').then(text1=>{
    expect(text1).contains("Join QA Tech Hub Slack Community!")

   })

})

})