describe('alert case scenario',()=>{
it('alert handling',()=>{
    cy.visit('https://demo.automationtesting.in/Alerts.html');
    cy.get('[class="btn btn-danger"]').click()
   cy.on('window:alert',(message)=>{
    expect(message).to.eq('I am an alert box!');
    
      return true;
    })
    cy.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    })
    })
