/// <reference types="cypress" />

describe("Validate date", () => {
    Cypress.on("uncaught:exception", function (err, runnable) {
        return false
    })
    it("TC 01", () => {
        cy.visit("https://www.goibibo.com/")
        function getMonthYear() {
            cy.get('span[class="sc-iwjdpV jUsACy fswDownArrow"]').click({ force: true })
            cy.get('div[class="DayPicker-Caption"]',).last().then((el) => {

                if (!el.text().includes("May 2023")) {
                    cy.get('span[aria-label="Next Month"]').click()
                    getMonthYear()

                }
                
            })
        }
        getMonthYear()

        cy.get('div[class="DayPicker-Month"]').last().children().find('p').contains(23).click()
        cy.get('span[role="presentation"]').last().click()
        })

        
    })