import { DELETE_TODO_TYPE } from "./action_types";

const defaultState = {
    advancedTodos: [123, 456],
    currentAdvancedTodoId: '33333333'
};

export default function advancedReducer(state = defaultState, action) {

    if (action.type === DELETE_TODO_TYPE) {
        return {
            ...state,
            currentAdvancedTodoId: action.payload
        }
    }

    return state;

}
