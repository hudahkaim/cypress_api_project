/// <reference types = "cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath')


describe("Test category selection of Amazon", () => {


    it("open Amazon and select category", () => {


        cy.visit("https://www.amazon.ae")

        cy.get("#searchDropdownBox").select("Electronics", { force: true })

        //cy.get("#twotabsearchtextbox").type("apple watch")

        cy.get("#nav-search-submit-button").click()

        cy.xpath("//a/span[contains(text(),'Earbuds & Accessories')]").click()

        cy.get('[class="_octopus-search-result-card_style_apbSearchResultItem__2-mx4"]').as("products")

        cy.get("@products").eq(0).invoke('text').then(productsText => {

            cy.log(productsText)
            expect(productsText).contains("New Apple AirPods Pro (2nd Gen)")
            
        })
        cy.get("@products").each(($el,index,$list)=>{

            cy.wrap($el).scrollIntoView()

            cy.log("index "+index+" TEXT "+$el.text())

            if(index=== 3){
                return false
            }

        })

    })





})