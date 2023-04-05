import Icon from '../Icon'

const CardHead = (props) => {
  let customButtonStyles = {
    background: "none",

  }

  return (
    <div className="card-head">
      {props.submittions}
    </div>
  )
}

export default CardHead