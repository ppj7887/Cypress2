/// <reference types="cypress" />

describe("Validate Whole Page",()=>{
    Cypress.on("uncaught:exception", function(err, runnable){
        return false
    })
    it("TC01",()=>{
        cy.visit("https://www.jiomart.com/")
        cy.get("#autocomplete-0-input").type("chocolate")
        cy.get("#section_search_suggestions").children().find('div').contains("chocolate pack").click()
        cy.get("#algolia_hits").children().find('div').contains('Lotte Choco').click()
        cy.contains("Add to Cart").click()
        cy.get("#btn_minicart").trigger("mouseover")
    })
})