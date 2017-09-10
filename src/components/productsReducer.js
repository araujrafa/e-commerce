const INITIAL_STATE = { productsList: [], productsDescription: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return { ...state, productsList: action.payload }
    case 'SET_DESCRIPTION':
      return { ...state, productsDescription: action.payload }
  }
  return state
}
