import { TYPE_TASK } from "../actionsTypes";

const initState = [];

const taskReducer = (state = initState, action) => {
    switch(action.type){
        case TYPE_TASK.ADD:
            return [...state, {id : Date.now(), text : action.payload.text, status: 'default'}];
        case TYPE_TASK.CANGE_STATUS:
            const statusArr = ['default', 'success', 'fail'];
            let indexStatus = statusArr.findIndex(item => item === action.payload.task.status);
            indexStatus++;
            if(indexStatus + 1 > statusArr.length){
                indexStatus = 0;
            }
            return [...state.map(item => item.id !== action.payload.task.id ? {...item} : {...item, status: statusArr[indexStatus]})];
        case TYPE_TASK.DELETE:
            return [...state.filter(item => item.id !== action.payload.id)];
        default:
            return state;
    }
};

export default taskReducer;