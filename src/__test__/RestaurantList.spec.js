import { render } from '@testing-library/react'
import { RestaurantList } from '../components/RestaurantList'

describe('Restaurant List', () => {
  it('should load restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants')

    render(<RestaurantList loadRestaurants={loadRestaurants} />)

    expect(loadRestaurants).toHaveBeenCalled()
  })
})
