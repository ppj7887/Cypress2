/// <reference types="cypress" />

describe("Verify the login functionality",()=>{
    it("TC 01",()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get("#submit").click()
    })

    it("TC 02",()=>{
        cy.intercept('GET', '/logged-in-successfully/').as("getUrl")
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get("#submit").click()
        cy.wait('@getUrl').then((res)=>{
            cy.log(res)
            expect(res.request.body).to.eq("")
            expect()
        })
        
    })
})