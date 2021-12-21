import React from "react";

const AppTodoItem = ({index, param, item, changeStatus = () => {}, deleteTask = () => {}}) => {
    return(
        <div className={"todo-list__item todo-list__item-" + item.status}>
            <div 
                className="todo-list__index"
            >
                {index}.
            </div>
            <div 
                className="todo-list__text"
                onClick={() => changeStatus(item)}
            >
                {item.text}
            </div>
            <div 
                className="todo-list__icon"
                onClick={() => deleteTask(item.id)}
            >
                <div className="todo-list__delete"></div>
            </div>
        </div>
    )
};

export default AppTodoItem;