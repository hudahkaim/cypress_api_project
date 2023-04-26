/// <reference types = "cypress" />

describe("Drag Drop Functinality", () => {


    it("Perform drag drop", () => {

        cy.visit("https://jqueryui.com/droppable/")

        cy.get(".demo-frame").then($frame => {

            let body = $frame.contents().find('body')

            cy.wrap(body).find("#draggable").as("source")

            cy.wrap(body).find("#droppable").as("target")
        })

        cy.get("@source").trigger("mousedown", { which: 1 })
        cy.get("@target").trigger("mousemove", { which: 1 }).trigger("mouseup", { force: true })

    })
})

