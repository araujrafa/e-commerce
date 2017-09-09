import React from 'react'
import Button from 'components/common/button'

const product = props => {
  const renderList = () => {
    const products = props.listProducts.produtos || []
    return products.map(elem => {
      return (
        <div className='c-product'>
          <img src={elem.image} className='c-product__image' />
          <h3 className='c-product__name'>{elem.name}</h3>
          <p className='  c-product__description'>{elem.description}</p>
          <Button />
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
