import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers(
    {
        taskReducer : taskReducer,
        themeReducer : themeReducer,
    }
);

export default rootReducer;