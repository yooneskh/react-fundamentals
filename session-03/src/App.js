import { connect } from 'react-redux'
import { DELETE_TODO_TYPE } from './redux/action_types';

function App(props) {

  const plusedId = props.currentTodoItem + '123123123';

  return <div>
    <h1>App {plusedId}</h1>
    <h3>{props.advId} {props.todos[0]}</h3>
    <button type="button" onClick={() => props.deleteMyTodo(123)}>Logout</button>
  </div>;

}

const mapStateToProps = (state) => {
  return {
    currentTodoItem: state.defaultReducer.currentTodoId,
    advId: state.advancedReducer.currentAdvancedTodoId,
    todos: state.advancedReducer.advancedTodos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMyTodo: (id) => dispatch({ type: DELETE_TODO_TYPE, payload: id })
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
