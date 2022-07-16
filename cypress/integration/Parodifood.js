/// <reference types="cypress" />

it('Im at the parodifood restaurant placing an order', function () {
    cy.visit('http://parodifood.qaninja.academy/')
    .get('.btn').click()
    .get('.search-link > .fa').click()
    .get('.form-control').type('Starbugs Coffee{enter}')
    .get(':nth-child(3) > mt-restaurant > a > .place-info-box > .place-info-box-icon > img').click()
    .get(':nth-child(2) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
    .get('.snackbar').should('be.visible')
    .get(':nth-child(2) > .text-right').should('be.visible')
    .get('.snackbar').should('be.visible')
    .get('.btn-success').click()
    
 })

 it('incorrectly filled', function () { 
   
   cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('     ')
   .get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('teste@hotmail.com')
   .get(':nth-child(5) > mt-input-container > .form-group > .form-control').type('testehotmail.com')
   .get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('     ')
   .get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').type('2 ')
   .get(':nth-child(3) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('    ')
 })
 

 
 it('finalize your order', function () {
   
   cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('reinaldo')
   .get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('teste@hotmail.com')
   .get(':nth-child(5) > mt-input-container > .form-group > .form-control').type('teste@hotmail.com')
   .get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('erico')
   .get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').type('2')
   .get(':nth-child(3) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('esquina')
   cy.get('.ng-untouched > :nth-child(1) > label').click()
   

 })

 it('order completed', function () {


})