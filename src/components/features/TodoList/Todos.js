import React from 'react';

const Todos = ({ todo, EditTodo, DeleteTodo }) => {
  const EditTodoHandler = () => {
    EditTodo(todo);
  };
  const DeleteTodoHandler = () => {
    // console.log(todo);
    DeleteTodo(todo.id);
  };
  return (
    <>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>{todo.title}</li>
          <li>{todo.email}</li>
          <div>
            <button type="button" onClick={EditTodoHandler}>
              Edit
            </button>
            <button onClick={DeleteTodoHandler}>Delete</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Todos;
