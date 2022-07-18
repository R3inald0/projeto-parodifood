import {Elementshome} from '../elements/elements'
const home_elements = new Elementshome


export class HomePage{
    buscarRestaurante(nomeRest){
        cy.get(home_elements.btnEstouComFome()).click() 
        cy.get(home_elements.campoPesquisarRestaurante()).type(nomeRest).click() 
        cy.contains('Pizzaria').click()  
    }


} // fechando classe