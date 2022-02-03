import { render, screen } from '@testing-library/react'
import { RestaurantList } from '../components/RestaurantList'

describe('Restaurant List', () => {
  const restaurants = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ]
  let loadRestaurants
  const context = () => {
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    )
  }

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants')
  })

  it('should load restaurants on first render', () => {
    context()
    expect(loadRestaurants).toHaveBeenCalled()
  })

  it('should display the restaurants', () => {
    context()
    expect(screen.getByText('Sushi Place')).not.toBeNull()
    expect(screen.getByText('Pizza Place')).not.toBeNull()
  })
})
