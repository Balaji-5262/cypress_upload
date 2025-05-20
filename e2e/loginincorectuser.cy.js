describe('test case scenario',()=>{
    it('test cases',()=>{
  
      cy.visit('https://practicetestautomation.com/practice-test-login/')
  
      cy.get('input#username').type('incorrectUser')

      cy.get('input#password').type('Password123')

      cy.get('[id="submit"]').click()

      cy.get('[id="error"]').should('be.visible')
      
      cy.contains('Your username is invalid!').should('be.visible')
      
    })
  })
    
  