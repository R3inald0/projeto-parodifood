/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

}

const cucumber = require('cypress-cucumber-preprocessor').default
   module.exports = (on, config) => {
   on('file:preprocessor', cucumber())
}
