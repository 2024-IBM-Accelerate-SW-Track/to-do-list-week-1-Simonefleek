import React, { Component } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (content) => {
    this.setState({
      todos: [...this.state.todos, { content, completed: false }],
    });
  };

  toggleComplete = (index) => {
    const newTodos = this.state.todos.slice();
    newTodos[index].completed = !newTodos[index].completed;
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
