import React, {useState} from "react";

const AppTodoForm = ({param, addTask = () => {}}) => {
    const [inputState, cangeInputState] = useState('');

    const changeInput = event => {
        cangeInputState(event.currentTarget.value);
    };

    const submitTask = event => {
        event.preventDefault();
        if(inputState.trim()){
            addTask(inputState.trim());
        }
        cangeInputState('');
    };

    const presteEnter = event => {
        if(event.key === 'Enter'){
            submitTask(event);
        }
    };

    return(
        <form 
            className="todo-window__form"
            onSubmit={submitTask}
        >
            <input
                className="todo-window__input"
                onChange={changeInput}
                onKeyDown={presteEnter}
                value={inputState}
                placeholder="Введите задание"
                autoFocus
            />
            <button
                className="todo-window__btn"
            >
                Добавить
            </button>
        </form>
    )
};

export default AppTodoForm;