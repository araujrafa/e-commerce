import React from 'react'
import Button from 'components/common/button'

const Description = ({ match }) => {
  console.log(match.params.id)
  return (
    <div className='c-description'>
      <img className='c-description__image' src='' />
      <h2 className='c-description__name'>{match.params.id}</h2>
      <p className='c-description__info'>dsahjsda</p>
      <h3 className='c-description__value'>156</h3>
      <Button style='green' label='Comprar'/>
      
      <div className='c-description__related'>
        <img className='c-description__image' src='' />
        <h2 className='c-description__name'>{match.params.id}</h2>
      </div>
    </div>
  )
}

export default Description
