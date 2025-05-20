describe('swaglabs task',()=>{
    it('level 1 try',()=>{

    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[id="user-name"]').type('performance_glitch_user')
    cy.get('[id="password"]').type('secret_sauce')
    cy.get('[id="login-button"]').click()
    cy.url().should('contain','https://www.saucedemo.com/v1/inventory.html')
    cy.on('window:confirm',(message)=>{
        expect(message).to.eq('Change your password')
        return true;

    })
    cy.get('.product_sort_container').select('hilo')
    cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
    cy.get('[class="btn_primary btn_inventory"]').eq(2).click()
    cy.get('[class="btn_primary btn_inventory"]').eq(3).click()

     cy.get('[href="./cart.html"]').click()
    cy.get('[class="btn_action checkout_button"]').click()
    cy.get('[id="first-name"]').type('Vijay')
    cy.get('#last-name').type('Josep')
    cy.get('#postal-code').type('632515')
    cy.get('[class="btn_primary cart_button"]').click()
    cy.get('[class="btn_action cart_button"]').click()
    cy.get('[class="complete-header"]').contains('THANK YOU FOR YOUR ORDER')
    cy.get('div.bm-burger-button').click()
    cy.get('[class="bm-item menu-item"]').eq(2).click()
    })
})