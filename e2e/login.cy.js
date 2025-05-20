describe('test case scenario',()=>{
  it('test cases',()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('input#username').type('student')

    cy.get('input#password').type('Password123')

    cy.get('[id="submit"]').click()
    
    cy.url().should('contain','practicetestautomation.com/logged-in-successfully/')
    cy.contains('Congratulations')  
  })
})


