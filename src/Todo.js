import React from 'react';

class Todo extends React.Component {

  render() {
    return (
      <div>
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.description}</p>
      </div>
    );
  }
}

export default Todo;
