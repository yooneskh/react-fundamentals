import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className={this.props.done ? 'todo-item done' : 'todo-item'}>

      { this.props.text } <small>- due at { this.props.date }</small>

      {!this.props.done && <button type="button" style={{ marginLeft: 24 }} onClick={this.props.onMarkAsDone}>
        Mark As done
      </button>}
      
      {this.props.done && <button type="button" style={{ marginLeft: 24 }} onClick={this.props.onDeleteTodo}>
        Delete Item
      </button>}

    </h1>
  }

}