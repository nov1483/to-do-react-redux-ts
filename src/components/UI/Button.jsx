import React from 'react'
import classes from '../styles/button.module.css'

function Button(props) {
  return (
    <button className={classes.taskBtn} {...props}>{props.children}</button>
  )
}

export default Button