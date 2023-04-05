import React from 'react'
import Text from './Text'


const Row = (props) => {
  let customTextStyles = {
    margin: "1em"
  }
  return (
    <div className="custom-row">
      {props.children === undefined && <Text style={customTextStyles}>{props.noChildrenMessage}</Text>}
        {props.children?.map((child) => (
          <div className='col'>{child}</div>
        ))}
    </div>
  )
}

export default Row