import React from 'react';
import Todos from './Todos';

const TodoList = ({ todos, EditTodo, DeleteTodo }) => {
  return (
    <>
      <h1>Todo List</h1>
      {todos.length === 0 && <h3>No Todos</h3>}
      {todos &&
        todos.length > 0 &&
        todos.map((data) => (
          <Todos
            todo={data}
            key={data.id}
            EditTodo={EditTodo}
            DeleteTodo={DeleteTodo}
          />
        ))}
    </>
  );
};

export default TodoList;
