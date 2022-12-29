import React from 'react'
import classes from '../styles/input.module.css'

function Input(props) {
  return (
    <input className={props.flag === 'true' ? classes.taskComplete: classes.taskItem} {...props}>{props.children}</input>
  )
}

export default Input