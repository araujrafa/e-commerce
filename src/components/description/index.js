import React, { Component } from 'react'
import Button from 'components/common/button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDescription } from '../productsActions'

class Description extends Component {
  componentWillMount () {
    this.props.setDescription()
  }

  render () {
    console.log(this.props)
    return (
      <div className='c-description'>
        <img className='c-description__image' src='' />
        <h2 className='c-description__name'></h2>
        <p className='c-description__info'>dsahjsda</p>
        <h3 className='c-description__value'>156</h3>
        <Button style='green' label='Comprar'/>
        
        <div className='c-description__related'>
          <img className='c-description__image' src='' />
          <h2 className='c-description__name'></h2>
        </div>
      </div>
    )
  }
}
  
// const Description = ({ match }) => {
//   console.log(match.params.id)
  
// }

const mapStateToProps = state => ({
  products: state.products.productsList
})

const mapDispatchToProps = dispatch => bindActionCreators({setDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Description)
