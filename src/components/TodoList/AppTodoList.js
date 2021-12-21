import React from "react";
import TodoItemContainer from "../TodoItem/TodoItemContainer";

const AppTodoList = ({param}) => {

    const setList = () => {
        if(param.items.length){
            return(
                <div className="todo-list__items">
                    {param.items.map((item, index) => <TodoItemContainer key={item.id} index={index + 1} item={item} />)}
                </div>
            )
        }else{
            return(
                <div className="todo-list__not-items">
                    Нет задч на сегодня
                </div>
            )
        }
    };

    return (
        <div className="todo-list">
            { setList() }
        </div>
    )
};

export default AppTodoList;