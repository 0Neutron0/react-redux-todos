import React from "react";
import TodoFormContainer from "./../TodoForm/TodoFormContainer";
import TodoListContainer from "../TodoList/TodoListContainer";

const AppTodoWindow = ({param}) => {
    return(
        <main className={"todo-window todo-window--" + param.theme}>
          <TodoFormContainer />
          <TodoListContainer />
        </main>
    )
};

export default AppTodoWindow;