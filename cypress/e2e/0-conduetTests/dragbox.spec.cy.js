/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />
require('cypress-xpath')

describe("Test the data flow through fixture",()=>{

    it("DRAG the box", () => {



        cy.visit("https://jqueryui.com/draggable/")

        cy.get(".demo-frame").then($frame => {

            let body = $frame.contents().find('body')

            cy.wrap(body).find("#draggable").as("source")

           
        })

        cy.get("@source").trigger("mousedown", { which: 1 })
        cy.get("@source").trigger("mousemove", 444, 68, { force: true }).trigger("mouseup", { force: true })

    })


})