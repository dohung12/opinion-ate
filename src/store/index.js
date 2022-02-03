import { applyMiddleware, compose, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsEnhancer())
)

export default store
