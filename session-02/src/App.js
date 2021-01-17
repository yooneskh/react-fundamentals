import React from 'react';
import TodoCreator from './TodoCreator';
import TodoItem from './TodoItem';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };

  }

  componentDidMount() {

    // const savedTodoList = JSON.parse(localStorage.getItem('saved-todo-list') || '[]');
    let savedTodoList;

    try {
      savedTodoList = JSON.parse(localStorage.getItem('saved-todo-list'));
    }
    catch {
      savedTodoList = [];
    }

    this.setState({
      todoList: savedTodoList !== undefined && savedTodoList !== null ? savedTodoList : []
    });

  }

  handleNewTodoCreation = (newText) => {

    this.setState({
      todoList: this.state.todoList.concat({
        text: newText,
        createdAt: '1399/10/24',
        done: false
      })
    }, this.handleTodoListSave);

  }

  handleTodoListSave = () => {
    localStorage.setItem('saved-todo-list', JSON.stringify(this.state.todoList));
  }

  handleTodoMarkAsDone = (index) => {

    // const todo = this.state.todoList[index];
    // todo.done = true; WRONG!

    const todos = this.state.todoList;
    todos[index].done = true;

    this.setState({ todoList: todos }, this.handleTodoListSave);

    // const newTodoArray = [...this.state.todoList];
    // const newTodoArray2 = [];
    // newTodoArray2[0] = this.state.todoList[0];
    // ...
    // this.setState({
    //   todoList: newTodoArray
    // })

  }

  handleTodoDelete = (index) => {

    const newArray = this.state.todoList;
    newArray.splice(index, 1);

    this.setState({ todoList: newArray }, this.handleTodoListSave);

  }

  render() {
    return <div className="app">
    
      <TodoCreator onCreate={newTodoText => this.handleNewTodoCreation(newTodoText)} />

      <div>
        <h2>My Current Todos</h2>
        <ul>
          {this.state.todoList.map((todo, index) =>
            <TodoItem
              key={todo.text}
              text={todo.text}
              date={todo.createdAt}
              done={todo.done}
              onMarkAsDone={() => this.handleTodoMarkAsDone(index)}
              onDeleteTodo={() => this.handleTodoDelete(index)}
            />
          )}
        </ul>
      </div>

    </div>
  }

}