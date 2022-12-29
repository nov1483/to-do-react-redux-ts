import classes from '../styles/button.module.css'
import { ButtonInt } from '../types'

const Button:React.FC<ButtonInt> = (props) => {
  return (
    <button className={classes.taskBtn} {...props}>{props.children}</button>
  )
}

export default Button