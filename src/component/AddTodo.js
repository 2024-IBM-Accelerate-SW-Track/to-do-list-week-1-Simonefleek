import React from "react";
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <Card key={todo.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item>
                <Checkbox />
              </Grid>
              <Grid item xs>
                <ListItemText primary={todo.content} />
              </Grid>
              <Grid item>
                <ListItemButton onClick={() => deleteTodo(todo.id)}>
                  Delete
                </ListItemButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return <div>{todoList}</div>;
};

export default Todos;