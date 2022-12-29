import { ActionTypes } from "../../components/types";
import {
  ADD_TASK,
  CHANGE_DONE_FLAG,
  CHANGE_NAME,
  DELETE,
  DONE,
  EDIT_TASK,
  EDIT_TASK_CONTENT,
} from "../reducer/actionConst";

export const changeName = (name: string): ActionTypes => {
  return { type: CHANGE_NAME, name: name };
};

export const addTask = (content: string): ActionTypes => {
  return { type: ADD_TASK, content: content };
};

export const deleteTask = (id: number): ActionTypes => {
  return { type: DELETE, id: id };
};

export const changeTask = (id: number): ActionTypes => {
  return { type: EDIT_TASK, id: id };
};

export const changeTaskContent = (id: number, content: string): ActionTypes => {
  return { type: EDIT_TASK_CONTENT, id: id, content: content };
};

export const doneTask = (id: number): ActionTypes => {
  return { type: DONE, id: id };
};

export const ChangeDoneFlag = (id: number): ActionTypes => {
  return { type: CHANGE_DONE_FLAG, id: id };
};
