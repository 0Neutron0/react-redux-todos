import { TYPE_THEME } from "../actionsTypes";

const initState = {
    theme: 'dark'
};

const themeReducer = (state = initState, action) => {
    switch(action.type){
        case TYPE_THEME.CHANGE:
            return {...state, theme : action.payload.theme};
        default:
            return state;
    }
};

export default themeReducer;