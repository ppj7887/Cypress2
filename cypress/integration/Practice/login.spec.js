/// <reference types="cypress" />
import Login from '../../support/utility'
import selector from '../../support/selector'

let sel = new selector()
describe("Validate Login Page", ()=>{

    it("TC 01", ()=>{
        Login.visitPage(sel.element.visitPage)
        Login.userInput(sel.element.userName, "Admin")
        Login.userInput(sel.element.password, "admin123")
        Login.clickButton(sel.element.submitButton)
    })
})