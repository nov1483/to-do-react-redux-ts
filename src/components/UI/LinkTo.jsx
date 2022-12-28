import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/linkTo.module.css'

function LinkTo(props) {
  return (
    <Link className={classes.changeLink} {...props}>{props.children}</Link>
  )
}

export default LinkTo