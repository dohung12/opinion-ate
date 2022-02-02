/* eslint-disable no-undef */

describe('Smoke test', () => {
  it('can view the homepage', () => {
    cy.visit('/')
    cy.contains('Learn React')
  })
})
