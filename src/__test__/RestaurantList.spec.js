import { render, screen } from '@testing-library/react'
import { RestaurantList } from '../components/RestaurantList'

describe('Restaurant List', () => {
  it('should load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants')

    render(
      <RestaurantList loadRestaurants={loadRestaurants} restaurants={[]} />
    )

    expect(loadRestaurants).toHaveBeenCalled()
  })

  it('should display the restaurants', () => {
    const noop = () => {}

    const restaurants = [
      { id: 1, name: 'Sushi Place' },
      { id: 2, name: 'Pizza Place' },
    ]

    render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />)

    expect(screen.getByText('Sushi Place')).not.toBeNull()
    expect(screen.getByText('Pizza Place')).not.toBeNull()
  })
})
