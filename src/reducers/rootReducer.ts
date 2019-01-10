import { IState } from "../interfaces/IState";
import { Action } from "redux";

const initState: IState = {
    output: ''
};

const rootReducer = (state = initState, action: any) => {
    console.log(action);
    switch (action.type) {
        case 'SELECT_NUMBER':
            return {
                ...state,
                output: state.output + action.label
            }
        case 'SELECT_PLUS':
            console.log(action);
            break;
        case 'SELECT_MINUS':
            console.log(action);
            break;
        case 'SELECT_DIV':
            console.log(action);
            break;
        case 'SELECT_MULT':
            console.log(action);
            break;
        case 'SELECT_RESULT':
            console.log(action);
            break;
        case 'SELECT_CLEAR':
            return {
                ...state,
                output: ''
            }
    }

    return state;
}

export default rootReducer;