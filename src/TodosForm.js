import React from 'react';
import {connect} from 'react-redux'
import {syncAddTodo} from './actions/addTodo'

class TodoForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.syncAddTodo(this.state)
    this.setState({
      title: '',
      description: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Todo!</h3>
        <form onSubmit={this.onSubmit}>
          <label>Title:   </label>
          <input onChange={this.onChange} type="text" value={this.state.title} name="title"/><br/><br/>
          <label>   Description:   </label>
          <textarea onChange={this.onChange} type="text" value={this.state.description} name="description"/><br/><br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect(null, {syncAddTodo})(TodoForm);
