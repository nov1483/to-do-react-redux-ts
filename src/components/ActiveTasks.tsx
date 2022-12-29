import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  changeTask,
  changeTaskContent,
  deleteTask,
  doneTask,
} from "../redux/actions/action";
import Button from "./UI/Button";
import Input from "./UI/Input";
import classes from "./styles/activeTasks.module.css";
import LinkTo from "./UI/LinkTo";
import { RootState } from "../redux";

function ActiveTasks() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [flag, setFlag] = useState(true);

  function contentTasksHandler(e:React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
    if (e.target.value === "") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }
  return (
    <div>
      {flag ? <div>Required field</div> : ""}
      <Input
        onBlur={contentTasksHandler}
        onChange={contentTasksHandler}
        value={content}
        type="text"
        placeholder="Enter new task"
        required
      />
      <Button
        disabled={flag}
        onClick={() => {
          dispatch(addTask(content));
          setContent("");
          setFlag(true);
        }}
      >
        Add
      </Button>
      <div className={classes.linkContainer}>
        <LinkTo to="/active-tasks">Active Tasks</LinkTo>
        <LinkTo to="/complete-tasks">Complete Tasks</LinkTo>
      </div>
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <div className={classes.taskContainer} key={task.id}>
                <Input
                  flag={task.isDone.toString()}
                  disabled={task.isDone}
                  readOnly={!task.isEdit}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(changeTaskContent(task.id, e.target.value))
                  }
                  value={task.content}
                />
                <Button
                  disabled={task.isDone}
                  onClick={() => dispatch(changeTask(task.id))}
                >
                  Edit
                </Button>
                <Button
                  disabled={task.isDone}
                  onClick={() => dispatch(doneTask(task.id))}
                >
                  Done
                </Button>
                <Button
                  disabled={task.isDone}
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  Delete
                </Button>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>You don't have active task!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActiveTasks;
