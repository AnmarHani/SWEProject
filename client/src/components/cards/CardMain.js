import Text from '../Text'

const CardMain = (props) => {
  return (
    <div className="card-main">
        <Text size="medium">{props.title}</Text>
        <Text size="small" type="description">{props.description}</Text>
    </div>
  )
}

export default CardMain