import {ElementsCompra} from '../elements/elements.js'
const compra_elements = new ElementsCompra


export class CompraPage{
    
    adicionarPizza(){
        cy.get(compra_elements.linkAdicionar()).click()
    }


}// fechando classe