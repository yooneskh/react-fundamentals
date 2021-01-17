import React from 'react';

export default class TodoCreator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newTodoText: ''
    };

  }

  handleNewTodoCreation = () => {

    if (this.props.onCreate !== undefined) {
      this.props.onCreate(this.state.newTodoText);
    }

    this.setState({ newTodoText: '' });

  }

  render() {
    return <div className="todo-creator">
      <input type="text" value={this.state.newTodoText} onChange={event => this.setState({ newTodoText: event.target.value })} />
      <button type="button" onClick={this.handleNewTodoCreation}>Make New Todo</button>
    </div>
  }

}