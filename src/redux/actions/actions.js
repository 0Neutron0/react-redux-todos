import { TYPE_THEME, TYPE_TASK } from "../actionsTypes";

export const themeChange = themeName => ({ type: TYPE_THEME.CHANGE, payload: {theme: themeName}});
export const addTask = taskText => ({type: TYPE_TASK.ADD, payload: {text: taskText}});
export const changeStatus = task => ({type: TYPE_TASK.CANGE_STATUS, payload: {task: task}});
export const deleteTask = idItem => ({type: TYPE_TASK.DELETE, payload: {id: idItem}});