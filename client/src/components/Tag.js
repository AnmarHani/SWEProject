import Container from './containers/Container'

const Tag = (props) => {
  let customTagStyles = {
    width: "fit-content",
  }
  let customContainerStyles = {
    padding: "5px",
  }


  return (
    <div style={customTagStyles}>
      <Container style={customContainerStyles}>
        {props.children}
      </Container>
    </div>
  )
}

export default Tag