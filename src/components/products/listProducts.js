import React from 'react'
// import Button from 'components/common/button'
import { Link } from 'react-router-dom'

const product = props => {
  const renderList = () => {
    const products = props.listProducts.produtos || []
    return products.map((elem, key) => {
      return (
        <div className='c-product' key={key} >
          <img src={elem.image} className='c-product__image' />
          <h3 className='c-product__name'>{elem.name}</h3>
          <p className='  c-product__description'>{elem.description}</p>
          <Link to={`/${elem.name}`}>Modus Create</Link>
        </div>
      )
    })
  }

  return (
    <div>
      {renderList()}
    </div>
  )
}

export default product
