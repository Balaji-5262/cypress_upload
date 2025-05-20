describe('rahul shetty',()=>{
it('radio button',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.radioButton').eq(0).check()
    cy.get('.radioButton').eq(1).check()
    cy.get('.radioButton').eq(2).check()
    cy.get('[name="checkBoxOption1"]').check()
    cy.get('[name="checkBoxOption2"]').check()
    cy.get('[name="checkBoxOption3"]').check()
    cy.get('[name="dropdown-class-example"]').select('Option1')
    cy.wait(2000)
    cy.get('[name="dropdown-class-example"]').select('Option2')
    cy.wait(3000)
    cy.get('[name="dropdown-class-example"]').select('Option3')

})
it.only('2nd row of rahul shetty',()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')  
    cy.get('[id="autocomplete"]').type('Ch')
    cy.wait(2000)
    cy.get('.ui-menu-item-wrapper').each(($country)=>{
        if($country.text().trim()===('China')){
            cy.wrap($country).click({force:true})
        }
    })

})
it('alert handling', ()=>{
    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.get('[class="btn btn-danger"]').click()
    cy.on('window:alert',(message)=>{
    expect(message).to.eq('I am an alert box!')
        return true;
    })
cy.on('uncaught exception',(err,runnable)=>{
    return false
})
    
})
})