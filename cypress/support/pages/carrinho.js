import {ElementsCarrinho } from "../elements/elements"
const carrinho_elements = ElementsCarrinho

export class CarrinhoPage{

    validarPizzaNoCarrinho(){
        cy.contains('(1x) Pizza de mussarela').should('be.visible')
    }


}