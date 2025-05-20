
describe('test case scenario',()=>{
    it('test cases',()=>{
  
      cy.visit('https://practicetestautomation.com/practice-test-login/')
  
      cy.get('input#username').type('student')

      cy.get('input#password').type('incorrectPassword')

      cy.get('[id="submit"]').click()
      
      cy.get('[id="error"]').should('be.visible')
      cy.contains('Your password is invalid!').should('be.visible')

    
    })
  }) 
  