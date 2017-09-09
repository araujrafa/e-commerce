const INITIAL_STATE = { productsList: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return { ...state, productsList: action.payload }
  }
  return state
}
