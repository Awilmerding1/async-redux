import React from 'react';
import {connect} from 'react-redux'

import {fetchTodos} from './actions/fetchTodos'
import Todo from './Todo'

class Todos extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <div>{this.props.loading ? <h2>Loading todos!!!</h2> : null}</div>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {todos: state.todos, loading: state.loading}
}

export default connect(mapStateToProps, {fetchTodos})(Todos);
