describe('My Second Test', () => {
  it("Does not do much either!", () => {
    expect(true).to.equal(true)
  })

  it('Visits the Kitchen Sink again', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('Forced failure again', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq', 'forced failure')
  })

  it.skip('Forced skip again', () => {
    expect(false, 'should be skipped').to.equal(true)
  })
})
