import { combineReducers } from 'redux'

import ProductsReducer from './components/products/productsReducer'

const rootReducer = combineReducers({
  products: ProductsReducer
})

export default rootReducer
