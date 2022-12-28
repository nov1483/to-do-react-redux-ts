import {
  ADD_TASK,
  CHANGE_NAME,
  EDIT_TASK,
  EDIT_TASK_CONTENT,
  DELETE,
  DONE,
  CHANGE_DONE_FLAG,
} from "./actionConst";

export const defaultState = {
  userName: "",
  tasks: [],
  count: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        ...state,
        userName: action.name,
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.content,
            isEdit: false,
            isDelete: false,
            isDone: false,
            id: Math.floor(Math.random() * 100000),
          },
        ],
        count: state.count + 1,
      };
    }
    case DELETE: {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
        count: state.count - 1,
      };
    }
    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return { ...item, isEdit: !item.isEdit };
          }
          return item;
        }),
      };
    }
    case EDIT_TASK_CONTENT: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return { ...item, content: action.content };
          }
          return item;
        }),
      };
    }
    case DONE: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: true };
          }
          return item;
        }),
        count: state.count - 1,
      };
    }
    case CHANGE_DONE_FLAG: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return { ...item, isDone: false };
          }
          return item;
        }),
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};

export const changeName = (name) => {
  return (dispatch) => {
    return dispatch({ type: CHANGE_NAME, name });
  };
};

export const addTask = (content) => {
  return (dispatch) => {
    return dispatch({ type: ADD_TASK, content });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return dispatch({ type: DELETE, id });
  };
};

export const changeTask = (id) => {
  return (dispatch) => {
    return dispatch({ type: EDIT_TASK, id });
  };
};

export const changeTaskContent = (id, content) => {
  return (dispatch) => {
    return dispatch({ type: EDIT_TASK_CONTENT, id, content });
  };
};

export const doneTask = (id) => {
  return (dispatch) => {
    return dispatch({ type: DONE, id });
  };
};

export const ChangeDoneFlag = (id) => {
  return (dispatch) => {
    return dispatch({ type: CHANGE_DONE_FLAG, id });
  };
};
