const Text = (props) => {
  return (
    <h1 {...props} className={`text-${props.type} ${props.size} ${props.position}`}>{props.children}</h1>
  )
}

export default Text