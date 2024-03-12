/// <reference types="cypress" />
describe('page', () => {
  // it('works', () => {
  //   cy.visit('https://sap.github.io/ui5-webcomponents/nightly/playground/main/pages/Button/')

  //   cy.wait(1000);

  //   cy.get("#button1")
	// 		.typeInCorrectElement("{enter}")

	// 	cy.get("#click-counter")
	// 		.should("have.value", 1)
  // })

  it('works 2', () => {
    cy.visit('https://sap.github.io/ui5-webcomponents/nightly/playground/main/pages/Button/')

    cy.wait(1000);

    cy.get("#button1")
			.typeInCorrectElement2("{enter}")

		cy.get("#click-counter")
			.should("have.value", 1)
  })
})
