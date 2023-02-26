class Login{

    static visitPage(url){
        cy.visit(url)
    }

    static userInput(element, id){
        cy.get(element).type(id)
    }

    static clickButton(element){
        cy.get(element).click()
    }
}

export default Login