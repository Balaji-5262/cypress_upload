describe('iframe for amazon',()=>{
    beforeEach('amazon',()=>{
        cy.visit('https://www.amazon.in/')
    })
    it('find iframe',()=>{
        cy.frameLoaded('#ape_Gateway_right-2_desktop_iframe');
        cy.iframe().find('[id="ad"]').click()
        cy.iframe().contains('Samsung Galaxy M06 5G').should('be.visible')
    })
})    