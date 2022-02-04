import React from 'react'
import RestaurantList from './RestaurantList'
import { Card, CardContent, Typography } from '@material-ui/core'

const RestaurantScreen = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Restaurants</Typography>
        <RestaurantList />
      </CardContent>
    </Card>
  )
}

export default RestaurantScreen
