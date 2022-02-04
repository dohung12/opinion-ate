import { applyMiddleware, compose, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import api from '../api'
import axios from 'axios'

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/49mFIdtKfIzAsR0jYcxbEpP22b2p13pR',
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), devToolsEnhancer())
)

export default store
