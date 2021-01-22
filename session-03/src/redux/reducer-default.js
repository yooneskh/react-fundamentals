import { DELETE_TODO_TYPE } from "./action_types";

const defaultState = {
    todos: [],
    currentTodoId: '1111111'
};

export default function defaultReducer(state = defaultState, action) {

    if (action.type === DELETE_TODO_TYPE) {
        return {
            ...state,
            currentTodoId: ''
        }
    }

    return state;

}
