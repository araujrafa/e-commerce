import { combineReducers } from 'redux'

import ProductsReducer from './components/productsReducer'

const rootReducer = combineReducers({
  products: ProductsReducer
})

export default rootReducer
