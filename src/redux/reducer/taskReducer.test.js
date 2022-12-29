import taskReducer from "./taskReducer";
import {
  addTask,
  ChangeDoneFlag,
  changeName,
  changeTask,
  changeTaskContent,
  deleteTask,
  doneTask,
} from '../actions/action' 

describe("NAME", () => {
  test("name should be changed", () => {
    const state = {
      userName: "No Name",
    };
    const newState = taskReducer(state, changeName("Anton"));
    expect(newState.userName).toBe("Anton");
  });
});
describe("TASKS", () => {
  test("new task should be added", () => {
    const state = {
      tasks: [{ content: "some content" }],
    };
    const newState = taskReducer(state, addTask("new task"));
    expect(newState.tasks.length).toBe(2);
  });
  test("delete task", () => {
    const state = {
      tasks: [
        { id: 1, content: "some content" },
        { id: 2, content: "some content 2" },
      ],
    };
    const newState = taskReducer(state, deleteTask(2));
    expect(newState.tasks.length).toBe(1);
  });
  test("edit task flag", () => {
    const state = {
      tasks: [
        { id: 1, content: "some content", isEdit: false },
        { id: 2, content: "some content 2", isEdit: false },
      ],
    };
    const newState = taskReducer(state, changeTask(1));
    expect(newState.tasks[0].isEdit).toBeTruthy();
  });
  test("edit task content", () => {
    const state = {
      tasks: [
        { id: 1, content: "some content", isEdit: false },
        { id: 2, content: "some content 2", isEdit: true },
      ],
    };
    const newState = taskReducer(state, changeTaskContent(2, "Edit content"));
    expect(newState.tasks[1].content).toBe("Edit content");
  });
  test("change done flag to true", () => {
    const state = {
      tasks: [
        { id: 1, content: "some content", isEdit: false, isDone: false },
        { id: 2, content: "some content 2", isEdit: false, isDone: false },
      ],
    };
    const newState = taskReducer(state, doneTask(1));
    expect(newState.tasks[0].isDone).toBeTruthy();
  });
  test("change done flag to false", () => {
    const state = {
      tasks: [
        { id: 1, content: "some content", isEdit: false, isDone: true },
        { id: 2, content: "some content 2", isEdit: false, isDone: false },
      ],
    };
    const newState = taskReducer(state, ChangeDoneFlag(1));
    expect(newState.tasks[0].isDone).toBeFalsy();
  });
});
