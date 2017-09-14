import fetch from 'isomorphic-fetch'

export function loadProducts () {
  return dispatch => {
    fetch('services/data.json')
      .then(res => res.json())
      .then(productsList => {
        dispatch({type: 'LOAD_PRODUCTS', payload: productsList})
      })
  }
}

export function setDescription (name) {
  return (dispatch, getState) => {
    const productsList = getState().products.productsList.produtos
    const descriptionProduct = productsList.filter(elem => {
      if (elem.name === name) return elem
    })
    loadProducts()
    dispatch({type: 'SET_DESCRIPTION', payload: descriptionProduct})
  }
}
