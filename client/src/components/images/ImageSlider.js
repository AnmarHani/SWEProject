import React from 'react'

const ImageSlider = (props) => {
  return (
    <div {...props} className="image-slider">
        {props.children}
    </div>
  )
}

export default ImageSlider