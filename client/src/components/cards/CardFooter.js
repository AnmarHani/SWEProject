import Icon from '../Icon'

const CardFooter = (props) => {
  return (
    <div className="card-footer">
        <Icon icon="bi bi-person" />{props.createdBy}
        {props.submittions}<Icon icon="bi bi-person" />
    </div>
  )
}

export default CardFooter