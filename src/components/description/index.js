import React, { Component } from 'react'
import Button from 'components/common/button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDescription, loadProducts } from '../productsActions'
import { Link } from 'react-router-dom'
// import pagarme from 'pagarme' -> Não estou usando pois não está no servidor!
import Menu from '../menu/'
import ReactModal from 'react-modal'

class Description extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  componentWillMount () {
    this.props.loadProducts()
    this.props.setDescription(this.props.match.params.id)
  }

  // finishTransaction () { -> Função de ligação da api -> Nâo esta usando pois esta gerando erro, porque não esta
    //                                                     no servidor
    // pagarme.client.connect({ api_key: 'ak_test_HtuT2Dj1KT1kTCaoq1b2wuTmAcfhPG' })
    //   .then(client => client.transactions.create({
    //     amount: 1000,
    //     card_number: '4111111111111111',
    //     card_holder_name: 'abc',
    //     card_expiration_date: '1225',
    //     card_cvv: '123',
    //   }))
  // }

  reloadPage (name) {
    this.props.setDescription(name)
  }

  related () {
    const products = this.props.products.produtos || []
    const description = this.props.description[0] || []
    let count = 0
    return products.map((elem, index) => {
      if (elem.type_product === description.type_product & elem.name !== description.name & count < 2) {
        count++
        return (
          <Link to={`/${elem.name}`} className='c-description__related' onClick={() => this.reloadPage(elem.name)} key={index}>
            <div className='c-description__container c-description__container--images-related'>
              <img src={elem.image} />
            </div>
            <h2 className='c-description__related-name'>{elem.name}</h2>
            <h2 className='c-description__related-price'>R$ {elem.price}</h2>
          </Link>
        )
      }
    })
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render () {
    const description = this.props.description[0] || []
    return (
      <div>
        <Menu />
        <section className='c-description container-page'>
          <div className='c-description__container c-description__container--images'>
            <img className='c-description__image' src={description.image} />
          </div>
          <div className='c-description__container c-description__container--infos'>
            <p className='c-description__salesman'>Por {description.salesman}</p>
            <h2 className='c-description__name'>{description.name}</h2>
            <p className='c-description__infos'>{`${description.status} - ${description.local}`}</p>
            <h3 className='c-description__value'>R$ {description.price}</h3>
            <Button style='green' label='Finalizar compra' size='big' click={this.handleOpenModal} />
          </div>
          <section className='c-description__container c-description__container--description'>
            <h3 className='c-description__title'>Descrição do produto</h3>
            <p className='c-description__text'>{description.description}</p>
            <h3 className='c-description__title'>Mais anúncios</h3>
            <div className='c-description__container--products'>
              {this.related()}
            </div>
          </section>
        </section>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel=''
        >
          <button onClick={this.handleCloseModal} className='c-modal__close'>X</button>
          <div className='c-modal'>
            <h2 className='c-modal__text'>{description.price / 100 * 60} Vendedor irá ganhar </h2>
            <h2 className='c-modal__text'>{description.price / 100 * 25} Minha parte </h2>
            <h2 className='c-modal__text'>{description.price / 100 * 15} Nosso parceiro </h2>
          </div>
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  description: state.products.productsDescription,
  products: state.products.productsList
})

const mapDispatchToProps = dispatch => bindActionCreators({setDescription, loadProducts}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Description)
