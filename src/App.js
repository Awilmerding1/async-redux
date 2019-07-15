import React from 'react';
import TodosForm from './TodosForm'
import Todos from './Todos'

class App extends React.Component {
  render() {
    return (
      <div>
        <TodosForm/>
        <Todos/>
      </div>
    );
  }
}

export default App;
