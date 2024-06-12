import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "", // Initialize the content state
    };
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = () => {
    // Implement your logic for adding a new item
    // (e.g., call a function to update the todo list)
    // Don't forget to clear the input field afterward.
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
          style={{ marginLeft: "10px" }}
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
