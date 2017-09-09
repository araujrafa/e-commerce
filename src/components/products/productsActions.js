import 'isomorphic-fetch'

export function loadProducts () {
  return dispatch => {
    fetch('services/data.json')
      .then(res => res.json())
      .then(productsList => {
        dispatch({type: 'LOAD_PRODUCTS', payload: productsList})
      })
  }
}
