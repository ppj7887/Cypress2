/// <reference types="cypress" />


describe("Verify login for Orange HRM", ()=>{
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

    it("TC 01", ()=>{
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").as('loginPage')
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
        cy.wait("@loginPage").then(({response})=>{
            expect(response.statusCode).to.eq(200)
    
        })
    })

    it("TC 02", ()=>{
        let myConfing = Cypress.config()
        expect(myConfing).to.have.property('baseUrl')
        expect(myConfing.execTimeout).to.lessThan(70000)
    })
})