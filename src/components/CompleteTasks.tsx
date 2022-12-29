import { useDispatch, useSelector } from "react-redux";
import Button from "./UI/Button";
import { ChangeDoneFlag } from "../redux/actions/action";
import Input from "./UI/Input";
import LinkTo from "./UI/LinkTo";
import classes from "./styles/completeTask.module.css";
import { RootState } from "../redux";

function CompleteTasks() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <LinkTo to="/active-tasks">Active Tasks</LinkTo>
        <LinkTo to="/complete-tasks">Complete Tasks</LinkTo>
      </div>
      {tasks.length > 0 ?
        tasks.map((item) => {
        return (
          <div key={item.id}>
            {item.isDone ? (
              <div className={classes.completeTaskContainer}>
                <Input readOnly defaultValue={item.content} />
                <Button onClick={() => dispatch(ChangeDoneFlag(item.id))}>
                  Forgot something
                </Button>
              </div>
            ) : (
              ''
            )}
          </div>
        );
      }) : <div style={{textAlign : 'center'}}><h2>You don't have complete tasks!</h2></div>}
    </div>
  );
}

export default CompleteTasks;
