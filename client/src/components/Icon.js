const Icon = (props) => {
  return (
    <i {...props} className={`icon ${props.icon} ${props.size}`}></i>
  )
}

export default Icon