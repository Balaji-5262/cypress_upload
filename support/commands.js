// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';

import 'cypress-file-upload';

cy.on('uncaught:exception',(err,runnable)=>{
        return false
    })

Cypress.Commands.add('karthik',()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('input#username').type('student')

    cy.get('input#password').type('Password123')

    cy.get('[id="submit"]').click()
    
    cy.contains('Congratulations').should('be.visible')
})