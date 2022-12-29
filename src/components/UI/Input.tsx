import classes from '../styles/input.module.css'
import { InputInt } from '../types'

const Input:React.FC<InputInt>= (props) => {
  return (
    <input className={props.flag === 'true' ? classes.taskComplete: classes.taskItem} {...props}>{props.children}</input>
  )
}

export default Input