const Image = (props) => {
  return (
    <img 
    {...props} 
    className={`image-${props.type} ${props.hide && "responsive-hide"}`} 
    src={`/assets/images/${props.img}.png`} 
    alt={`${props.img}`} 
    />
  )
}

export default Image