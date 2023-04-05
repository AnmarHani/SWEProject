import React from 'react'

const ContainerCardList = (props) => {
  return (
    <div className="container-card-list">
        {props.children}
    </div>
  )
}

export default ContainerCardList