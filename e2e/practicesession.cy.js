describe('practice session',()=>{
    it('practive session radio button',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="radioButton"]').eq(0).click()
        cy.wait(2000)
        cy.get('[class="radioButton"]').eq(1).click()
        cy.wait(2000)
        cy.get('[class="radioButton"]').eq(2).click()
        
    })
    it('practice session Suggeston dropdown',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('[id="autocomplete"]').type('Amer')
  cy.get('.ui-menu-item-wrapper').each(($country)=>{
        if($country.text().trim()===('American Samoa')){
            cy.wrap($country).click({force:true})
        }
    })
    
    })

    it('select dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option2')
        cy.wait(2000)
        cy.get('#dropdown-class-example').select('option3')


    })

it('select dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check()
        cy.wait(2000)
        cy.get('#checkBoxOption2').check()
        cy.wait(2000)
        cy.get('#checkBoxOption3').check()

})
it('open window',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#openwindow').click()
    cy.window.then((windows)=>{
        cy.stub(window,'open').callsfake(url)=>({windows.location.href=url;

        }) 
    })

})
it.only('alerts',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

})