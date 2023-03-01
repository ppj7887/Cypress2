/// <reference types="cypress" />

describe("Validate date", () => {
    Cypress.on("uncaught:exception", function (err, runnable) {
        return false
    })
    it("TC 01", () => {
        cy.visit("https://www.goibibo.com/")
    //     // cy.get('span[class="sc-eGRUor edGqvG"]').first().click()
    //     cy.get('div[class="sc-hGPBjI bYQHSX fswFld "]').first().type('Pune')
    //     cy.get('span[class="autoCompleteTitle "]').first().click()
    //     cy.get('div[class="sc-hGPBjI bYQHSX fswFld "]').eq(1).type("Banglore")
        
        // function getMonthYear() {
        //     cy.get('span[class="sc-iwjdpV jUsACy fswDownArrow"]').click({ force: true })
        //     cy.get('div[class="DayPicker-Caption"]',).last().then((el) => {

        //         if (!el.text().includes("May 2023")) {
        //             cy.get('span[aria-label="Next Month"]').click()
        //             getMonthYear()

        //         }
                
        //     })
        // }
        // getMonthYear()

        // cy.get('div[class="DayPicker-Month"]').last().children().find('p').contains(23).click()
        // cy.get('span[role="presentation"]').last().click()

        cy.get('span[class="sc-iwjdpV jUsACy fswDownArrow fswDownArrowTraveller"]').click()
        cy.get('span[class="sc-dvQaRk ghZzRT"]').eq(1).click()
        cy.get('span[class="sc-TBWPX eHZarz"]').first().should('contain.text', 2)
        cy.contains('SEARCH FLIGHTS').click()
        })

        
    })