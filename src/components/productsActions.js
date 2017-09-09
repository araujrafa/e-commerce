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

export function setDescription () {
  return (dispatch, getState) => {
    const productsList = getState().productsList;
    console.log(productsList)

    // const hotels = itens.filter(elem => {
    //   if (elem.rate == star) {
    //     return elem
    //   }
    // })

    // const hoteis = {
    //   hotels
    // }
    dispatch({type: 'SET_DESCRIPTION', payload: productsList})
  }
}