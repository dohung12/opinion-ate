import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadRestaurants } from '../store/restaurants/action'

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

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.records,
})

const mapDispatchToProps = { loadRestaurants }

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
