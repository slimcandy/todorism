describe('create list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("should have a button containing words 'Create one'", () => {
    cy.get('button').contains('Create one')
  })

  it('should open a form when clicking on the button', () => {
    cy.get('button').contains('Create one').click()

    cy.get("form[data-test='create-list-form']").should('be.visible')
  })

  it('should append item list', () => {
    cy.get('button').contains('Create one').click()
    cy.get("form[data-test='create-list-form']").should('be.visible')

    cy.get("input[data-test='create-list-form-input']").type('test')
    cy.get("form[data-test='create-list-form']").submit()
    cy.get("[data-test='list-items']").contains('test')
  })

  it('should be a key list', () => {
    cy.get('button').contains('Create one').click()
    cy.get("form[data-test='create-list-form']").should('be.visible')
    cy.get("input[data-test='create-list-form-input']").type('test')
    cy.get("form[data-test='create-list-form']").submit()
    cy.get("[data-test='list-items']").contains('test')

    cy.get('button').contains('Save list').click()
    cy.get('legend').contains('List key:')
  })

  it('should store list in a local storage', () => {
    cy.get('button').contains('Create one').click()
    cy.get("form[data-test='create-list-form']").should('be.visible')
    cy.get("input[data-test='create-list-form-input']").type('test')
    cy.get("form[data-test='create-list-form']").submit()
    cy.get("[data-test='list-items']").contains('test')

    cy.get('button').contains('Save list').click()
    cy.get('legend').contains('List key:')
  })

  it('should save list in local storage', () => {
    cy.get('button').contains('Create one').click()
    cy.get("form[data-test='create-list-form']").should('be.visible')
    cy.get("input[data-test='create-list-form-input']").type('test')
    cy.get("form[data-test='create-list-form']").submit()
    cy.get("[data-test='list-items']").contains('test')
    cy.get('button').contains('Save list').click()
    cy.get('legend').contains('List key:')

    cy.get('legend')
      .contains('List key:')
      .get('kbd')
      .should($kbd => {
        expect($kbd).to.have.length(1)
        expect(localStorage.getItem($kbd.text())).to.be.not.null
      })
  })
})
