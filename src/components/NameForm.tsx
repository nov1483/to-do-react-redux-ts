import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeName } from "../redux/actions/action";
import { useState } from "react";
import classes from "./styles/nameForm.module.css";
import Input from "./UI/Input";
const NameForm:React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);

  function contentTasksHandler(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    if (e.target.value === "") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }
  return (
    <div className={classes.nameContainer}>
      {flag && <div>Required field</div>}
      <Input
        value={name}
        onChange={contentTasksHandler}
        type="text"
        placeholder="John"
      />
      {flag ? (
        ""
      ) : (
        <Link
          className={classes.taskBtn}
          to="/active-tasks"
          onClick={() => {
            dispatch(changeName(name));
          }}
        >
          Go to tasks!
        </Link>
      )}
    </div>
  );
}

export default NameForm;
