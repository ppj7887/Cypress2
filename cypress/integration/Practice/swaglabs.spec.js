/// <reference types="cypress" />

describe('Verify the intercept functionality',()=>{
    let object;
    before(()=>{
        cy.fixture('login').then((data)=>{
            object = data
        })
    })

    it('TC 01', ()=>{
        cy.intercept('GET', '/').as('login')
        cy.visit('https://www.saucedemo.com/')
        cy.get('[name="user-name"]').type(object.username)
        cy.get('[name="password"]').type(object.password)
        cy.get('#login-button').click()
        cy.wait('@login')
    })
})