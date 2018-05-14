import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todo } from './todo.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo,
    };
  }

  render() {
    const todos = this.state.todo.map((todos, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3 className="h3">{todos.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todos.priority}</span>
            </div>
            <div className="card-body">
              <p className="font-weight-light">{todos.responsible}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <Navigation title="Tasks" count={this.state.todo.length} />

        <div className="container-fluid">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo} />
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
