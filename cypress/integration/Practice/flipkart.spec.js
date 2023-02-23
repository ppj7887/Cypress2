/// <reference types = "cypress" />

describe("Verify the cypres page", () => {
    Cypress.on("uncaught:exception", function(err, runnable){
        return false
    })
    it("TC 01", () => {
        cy.visit("https://www.flipkart.com/")
        cy.get("._3704LK").type("I phone")
        cy.get(".Y5N33s").children().find(".lrtEPN")
        
    })
})