describe('Registration scenario',()=>{

it('from filling',()=>{

    cy.visit('https://demo.wpeverest.com/user-registration/simple-registration-form/')
    cy.get('[data-id="first_name"]').type('Thalapathy')
    cy.get('[data-id="last_name"]').type('Vijay')
    cy.get('[data-id="user_login"]').type('Jananayagan')
    cy.get('[data-id="user_email"]').type('xxxabc55@gmail.com')
    cy.get('[data-id="user_pass"]').type('Abcd@56789')
    cy.get('[data-id="user_confirm_password"]').type('Abcd@56789')
    cy.get('[data-id="description"]').type('I am ABC, completed A.E in 2021 and having 10 years experience in Epub field')
    cy.get('[class="btn button ur-submit-button "]').click()
    cy.get('[id="ur-submit-message-node"]').contains('User successfully registered.')
    cy.on('uncaught:exception',(err,runnable)=>{
        return false
    })  
})

})