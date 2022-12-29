import classes from '../styles/button.module.css'

const Button = (props: any) => {
  return (
    <button className={classes.taskBtn} {...props}>{props.children}</button>
  )
}

export default Button