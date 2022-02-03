import React, { useEffect } from 'react'

export const RestaurantList = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants()
  }, [loadRestaurants])

  return <div>Restaurants List</div>
}

export default RestaurantList
