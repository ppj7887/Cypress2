/// <reference types="cypress" />

describe("Verify API responce", () => {

    it("TC 01", () => {
        cy.intercept('GET', "https://jsonplaceholder.cypress.io/comments/1", { fixture: "profile.json" }).as('details')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains("Get Comment").click()
        cy.wait("@details").then((el) => {
            console.log(el)
            expect(el.response.body.name).to.eq("Jane")
            
        })
    })
})