import {Link} from 'react-router-dom'

import CardHead from './CardHead'
import CardMain from './CardMain'
import CardFooter from './CardFooter'

const Card = (props) => {
  return (
    <Link to={`/contents/${props.link}`}>
      <div className="card">
        {/* <CardHead submittions={props.submittions}/> */}
        <CardMain title={props.title} description={props.description}/>
        <CardFooter createdBy={props.createdBy} date={props.createdAt}/>
      </div>
    </Link>
  )
}

export default Card