/// <reference types="cypress" />

describe("Verify the env", ()=>{

    let url = Cypress.env("baseUrl")
    it("TC 01", ()=>{
        cy.visit(url)
    })

    let faceBook = Cypress.env("faceBook")
    it.only("TC 02", ()=>{
        cy.visit(faceBook)
    })

    it("TC 03", ()=>{
        cy.visit("https://www.amazon.in/?tag=enin-edge-ntp-topsites-affiliates-21")
        let count = 0
        cy.get('a').then((el)=>{
            count = el.length
            cy.log(count)
            console.log(count)
        })
    })
})