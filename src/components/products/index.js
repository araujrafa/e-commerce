import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProducts } from '../productsActions'

// componentes
import ListProducts from './listProducts'

class Products extends Component {
  componentWillMount () {
    this.props.loadProducts()
  }

  render () {
    return (
      <div>
        <h1>Lista de Produtos</h1>
        <ListProducts listProducts={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.productsList
})

const mapDispatchToProps = dispatch => bindActionCreators({loadProducts}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Products)
