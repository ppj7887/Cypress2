/// <reference types="cypress" />

describe('Verify login page', () => {

    it("TC 01", () => {
        cy.visit('https://demo.applitools.com/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get(".buttons-w > a").click()
    })

    it("TC 02", () => {
        cy.intercept('GET', 'app.html').as("login")
        cy.visit('https://demo.applitools.com/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get(".buttons-w > a").click()
        cy.wait('@login').then((res) => {
            cy.log(res)
            

        })
    })
})