import React, { Component } from 'react'
import Button from 'components/common/button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDescription } from '../productsActions'
import pagarme from 'pagarme'

class Description extends Component {
  componentWillMount () {
    this.props.setDescription(this.props.match.params.id)
  }

  finishTransaction () {
    pagarme.client.connect({ api_key: 'ak_test_HtuT2Dj1KT1kTCaoq1b2wuTmAcfhPG' })
      .then(client => client.transactions.create({
        amount: 1000,
        card_number: '4111111111111111',
        card_holder_name: 'abc',
        card_expiration_date: '1225',
        card_cvv: '123',
      }))
  }

  render () {
    const description = this.props.description[0] || []
    return (
      <section className='c-description container-page'>
        <div className='c-description__container c-description__container--images'>
          <img className='c-description__image' src={description.image} />
        </div>
        <div className='c-description__container c-description__container--infos'>
          <p className='c-description__salesman'>Por {description.salesman}</p>
          <h2 className='c-description__name'>{description.name}</h2>
          <p className='c-description__infos'>{`${description.status} - ${description.local}`}</p>
          <h3 className='c-description__value'>R$ {description.price}</h3>
          <Button style='green' label='Finalizar compra' size='big' click={this.finishTransaction()}/>
        </div>
        <section className='c-description__container c-description__container--description'>
          <h3 className='c-description__title'>Descrição do produto</h3>
          <p className='c-description__info'>{description.description}</p>
        </section>
        <div className='c-description__related'>
          <img className='c-description__image' src='' />
          <h2 className='c-description__name'></h2>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  description: state.products.productsDescription
})

const mapDispatchToProps = dispatch => bindActionCreators({setDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Description)
