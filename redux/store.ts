import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import nftsReducer from './nfts/nftsReducer'
import modalReducer from './modal/modalReducer'

const rootReducer = combineReducers({
  nfts: nftsReducer,
  modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composeEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(rootReducer, composeEnhancers)

  return store
}

export default generateStore
