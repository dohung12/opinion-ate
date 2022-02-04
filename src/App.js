import React from 'react'
import RestaurantScreen from './components/RestaurantScreen'
import { Provider } from 'react-redux'
import store from './store'
import {
  AppBar,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
