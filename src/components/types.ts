import {
  ADD_TASK,
  CHANGE_NAME,
  EDIT_TASK,
  EDIT_TASK_CONTENT,
  DELETE,
  DONE,
  CHANGE_DONE_FLAG,
} from "../redux/reducer/actionConst";

export interface Tasks {
  userName: string;
  tasks: any[];
  count: number;
}

interface ActionChangeName {
  type: typeof CHANGE_NAME;
  name: string;
}

interface ActionAddTask {
  type: typeof ADD_TASK;
  content: string;
}

interface ActionEditTask {
  type: typeof EDIT_TASK;
  id: number;
}

interface ActionEditTaskContent {
  type: typeof EDIT_TASK_CONTENT;
  id: number;
  content: string;
}

interface ActionDeleteTask {
  type: typeof DELETE;
  id: number;
}

interface ActionDoneTask {
  type: typeof DONE;
  id: number;
}

interface ActionChangeDoneFlag {
  type: typeof CHANGE_DONE_FLAG;

  id: number;
}

export type ActionTypes =
  | ActionChangeName
  | ActionAddTask
  | ActionEditTask
  | ActionEditTaskContent
  | ActionDeleteTask
  | ActionDoneTask
  | ActionChangeDoneFlag;
