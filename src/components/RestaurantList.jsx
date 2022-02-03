import React, { useEffect } from 'react'

export const RestaurantList = ({ loadRestaurants, restaurants }) => {
  useEffect(() => {
    loadRestaurants()
  }, [loadRestaurants])

  return (
    <ul>
      {restaurants.map((restaurant) => {
        return <li key={restaurant.id}>{restaurant.name}</li>
      })}
    </ul>
  )
}

export default RestaurantList
