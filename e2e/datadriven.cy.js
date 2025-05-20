describe('Registration scenario for data driven',()=>{

    it('from filling data driven',()=>{
cy.visit('https://demo.wpeverest.com/user-registration/simple-registration-form/')
cy.fixture('registrationform.json').then((fill)=>{
    cy.get('[data-id="first_name"]').type(fill.firstname)
    cy.get('[data-id="last_name"]').type(fill.lastname)
    cy.get('[data-id="user_login"]').type(fill.login)
    cy.get('[data-id="user_email"]').type(fill.email)
    cy.get('[data-id="user_pass"]').type(fill.pass)
    cy.get('[data-id="user_confirm_password"]').type(fill.confirmpass)
    cy.get('[data-id="description"]').type(fill.description)
    cy.get('[class="btn button ur-submit-button "]').click()
// cy.get('[id="ur-submit-message-node"]').contains('User successfully registered.')
})
cy.fixture('registrationform2.json').then((fill)=>{
    cy.get('[data-id="first_name"]').type(fill.firstname)
    cy.get('[data-id="last_name"]').type(fill.lastname)
    cy.get('[data-id="user_login"]').type(fill.login)
    cy.get('[data-id="user_email"]').type(fill.email)
    cy.get('[data-id="user_pass"]').type(fill.pass)
    cy.get('[data-id="user_confirm_password"]').type(fill.confirmpass)
    cy.get('[data-id="description"]').type(fill.description)
    cy.get('[class="btn button ur-submit-button "]').click()
// cy.get('[id="ur-submit-message-node"]').contains('User successfully registered.')
})

cy.on('uncaught:exception',(err,runnable)=>{
    return false
})
})
})