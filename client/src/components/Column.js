import React from 'react'

const Column = (props) => {
  return (
    <div className={`${props.take ? `col-${props.take}`: "col"}`}>
        {props.children}
    </div>
  )
}

export default Column