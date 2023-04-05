import React from 'react'

const Button = (props) => {
  return (
    <button {...props} className={`button-${props.type}`}>{props.children}</button>
  )
}

export default Button