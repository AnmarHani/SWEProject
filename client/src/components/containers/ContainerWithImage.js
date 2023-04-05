import React from 'react'

const ContainerWithImage = (props) => {
  return (
    <div {...props} className='container-with-image row'>
        {props.children}
    </div>
  )
}

export default ContainerWithImage