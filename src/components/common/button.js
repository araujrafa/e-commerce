import React from 'react'

const Button = ({ style, label, size, click }) => (
  <button className={`c-button c-button--${style} c-button--${size}`} onClick={click}>{ label }</button>
)

export default Button
