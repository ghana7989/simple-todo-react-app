import React, { Component } from 'react'
import Todos from './todos';
import AddTodo from './addForm';


class App extends Component {
  state = {
    todos: [
      {
        id: 1, content: "Buy Some Milk"
      },
      {
        id: 2, content: "Kill some people"
      }
    ]
  }
  // Functions
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="container todo-app">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
