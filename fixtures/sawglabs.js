class TestAutomation{

    visitpage(){
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    }
    usernamefield(){
        cy.get('input#username').type('student');
    }

    passwordfield(){
        cy.get('input#password').type('Password123');

    }
    clickbutton(){
        cy.get('[id="submit"]').click();

    }
    assertion(){
        cy.contains('Congratulations').should('be.visible');

    }

}
export default TestAutomation;