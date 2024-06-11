import React, { Component } from "react";

class AddTodo extends Component {
    // A local react state of the this component with a content property set to nothing.
    constructor() {
      super();
      this.state = {
        content: "",
      };
    }
    // The handleChange function updates the react state with the new input value provided from the user.
    // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
    // into the text field.
     handleChange = (event) => {
      this.setState({
        content: event.target.value,
      });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.content.trim()) {
        this.props.addTodo(this.state);
        this.setState({
          content: '',
        });
      }
    };
  
    render() {
      return (
        <div>
          <TextField
            label="Add New Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.content}
            data-testid="new-item-textfield"
          />
          <Button
            style={{ marginLeft: '10px' }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            data-testid="new-item-button"
          >
            Add
          </Button>
        </div>
      );
    }
  }
  
  export default AddTodo;