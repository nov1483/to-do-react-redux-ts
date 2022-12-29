import { Link } from 'react-router-dom'
import classes from '../styles/linkTo.module.css'
import { LinkInt } from '../types'

const LinkTo:React.FC<LinkInt> = (props) => {
  return (
    <Link className={classes.changeLink} {...props}>{props.children}</Link>
  )
}

export default LinkTo