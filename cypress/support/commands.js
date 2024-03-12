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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("typeInCorrectElement", { prevSubject: 'element' }, (subject, text, options = {}) => {
    cy.get(subject)
        .then(async $subject => {
            const $realDomRef = await $subject.get(0).getFocusDomRefAsync()

            console.log("======", $realDomRef)
            cy.wrap($realDomRef).type(text, options)
        })
})

Cypress.Commands.add("typeInCorrectElement2", { prevSubject: 'element' }, (subject, text, options = {}) => {
    cy.wrap(subject)
        .getFocusDomRef()
        .then($realDomRef => {

            console.log("======", $realDomRef)
            cy.wrap($realDomRef).type(text, options)
        })
})

Cypress.Commands.addQuery('getFocusDomRef', function () {
    return  async (subject) => {
        if (!subject?.[0].tagName.startsWith('UI5')) {
            const err = `getFocusDomRef() needs to be chained to`;
            throw new TypeError(err);
        }
        const shadow = await subject[0].getFocusDomRefAsync();
        return Cypress.dom.wrap(shadow)
    };
});