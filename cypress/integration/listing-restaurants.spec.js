/* eslint-disable no-undef */

describe('Listing restaurants', () => {
  it('should shows restaurants from the server', () => {
    const sushiPlace = 'Sushi place'
    const pizzaPlace = 'Pizza place'

    cy.server({ force404: true })

    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/49mFIdtKfIzAsR0jYcxbEpP22b2p13pR/restaurants',
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    })

    cy.visit('/')
    cy.contains(sushiPlace)
    cy.contains(pizzaPlace)
  })
})
