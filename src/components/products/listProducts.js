import React from 'react'
// import Button from 'components/common/button'
import { Link } from 'react-router-dom'

const product = props => {
  const renderList = () => {
    const products = props.listProducts.produtos || []
    return products.map((elem, key) => {
      return (
        <li className='c-product' key={key} >
          <div className='c-product__container c-product__container--image'>
            <Link to={`/${elem.name}`}><img src={elem.image} className='c-product__image' /></Link>
          </div>
          <div className='c-product__container c-product__container--infos'>
            <Link to={`/${elem.name}`}><h3 className='c-product__name'>{elem.name}</h3></Link>
            <p className='c-product__salesman'>Por {elem.salesman}</p>
            <h3 className='c-product__price'>R$ {elem.price}</h3>
            <p className='c-product__infos'>{`${elem.status} - ${elem.local}`}</p>
          </div>
        </li>
      )
    })
  }

  return (
    <ul className='c-listProducts'>
      {renderList()}
    </ul>
  )
}

export default product
