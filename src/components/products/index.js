import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProducts } from '../productsActions'

// componentes
import ListProducts from './listProducts'
import Menu from '../menu/'

class Products extends Component {
  componentWillMount () {
    this.props.loadProducts()
  }

  render () {
    return (
      <div>
        <Menu />
        <div className='container-page'>
          <ListProducts listProducts={this.props.products} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.productsList
})

const mapDispatchToProps = dispatch => bindActionCreators({loadProducts}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Products)
