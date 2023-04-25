/// <reference types = "cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath') 


describe("Test category selection of Amazon",()=>{


    it("open Amazon and select category",()=>{

    
    cy.visit("https://www.amazon.ae")
    
    cy.get("#searchDropdownBox").select("Electronics",{force:true})
    
    //cy.get("#twotabsearchtextbox").type("apple watch")

   cy.get("#nav-search-submit-button").click()

   cy.xpath("//a/span[contains(text(),'Earbuds & Accessories')]").click()

    cy.get('[data-component-type="s-product-image"]').as("products")

    cy.get("@products").eq(4).invoke('text').then(productsText => {

        cy.log(productsText)
    })

    })





})