/// <reference types="cypress" />
/* global Given, When, Then, And */

// Importações
import {TelasPage} from '../pages/acessar_telas.js'
const telas_page = new TelasPage

import {HomePage} from '../pages/home.js'
const home_page = new HomePage

import {CompraPage} from '../pages/compra.js'
const compra_page = new CompraPage

import {CarrinhoPage} from '../pages/carrinho.js'
const carrinho_page = new CarrinhoPage



Given('que estou na tela restaurante Parodifood', () =>{
     telas_page.acessarParodifood()
})

When('eu pesquisar pelo restaurante {}', (nomeRest) => {
   home_page.buscarRestaurante(nomeRest)
})

And('adicionar uma "Pizza de Mussarela"', () =>{
   compra_page.adicionarPizza()
   cy.get('.snackbar').should('be.visible', 'Você adicionou o item Pizza de mussarela')
})

And('verificar se o pedido foi adicionado ao carrinho', () => {
   carrinho_page.validarPizzaNoCarrinho()
})