import {Link} from 'react-router-dom';

const CustomLink = (props) => {
  return (
    <Link to={{
      pathname: `${props.to}`,
      state: props.state && props.state
    }}
    {...props.parent}
    >
      <a {...props} className={props.type ? `link-${props.type} ${props.size}` : `link ${props.size}`} href="#">{props.children}</a>
    </Link>
  )
}

export default CustomLink

//make react router Link here