/// <reference types="cypress" />
/* global Given, When, Then, And */

Given('Estou no parodifood restaurante fazendo um pedido', () => {
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
 
 When('Finalize o seu pedido', () => {
    

    cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('reinaldo')
    .get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('teste@hotmail.com')
    .get(':nth-child(5) > mt-input-container > .form-group > .form-control').type('teste@hotmail.com')
    .get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('amarais')
    .get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').type('1023')
    .get(':nth-child(3) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('esquina')
    .get(':nth-child(1) > label > .iradio_flat-red > .iCheck-helper').click()
    .get('.col-xs-12 > .btn').click()

 })

 
 Then('Pedido concluido', () => {
   cy.get('h2').should('be.visible')
   .get('.jumbotron > :nth-child(2)').should('be.visible')
   .get('mt-rating > :nth-child(3)').click()
         
 
 })
 
