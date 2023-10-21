import React, { useEffect, useState } from 'react';

import DefaultLayout from './components/layout/DefaultLayout';
import TodoForm from './components/features/TodoForm';
import TodoList from './components/features/TodoList';

const todos = [
  { id: 1, title: 'Assignment 1', email: 'djnjdnsaj@gmail.com' },
  { id: 2, title: 'Quiz 1', email: 'shbSHJBJHD@gmail.com' },
];

const App = () => {
  const [todoList, setTodoList] = useState(todos);
  const [todoDataa, setTodoDataa] = useState(null);

  const AddTodo = (data) => {
    setTodoList((prevData) => [data, ...prevData]);
    // console.log(todoList);
  };

  const EditTodo = (data) => {
    setTodoDataa(data);
  };

  const updateTodoHandler = (data) => {
    // console.log(data);
    const updatedArray = todoList.map((todo) => {
      if (data.id === todo.id) {
        return {
          title: data.title,
          email: data.email,
        };
      }
      return todo;
    });
    setTodoList(updatedArray);
    setTodoDataa(null);
  };

  const DeleteTodo = (id) => {
    console.log(id);
    const filterArray = todoList.filter((todo) => +id !== +todo.id);
    setTodoList(filterArray);
  };

  // useEffect(() => {
  //   localStorage.setItem('todoList', JSON.stringify(todoList));
  // }, [todoList]);

  return (
    <>
      <DefaultLayout>
        <TodoForm
          AddTodo={AddTodo}
          todoDataa={todoDataa}
          updateTodoHandler={updateTodoHandler}
        />
        <TodoList
          todos={todoList}
          EditTodo={EditTodo}
          DeleteTodo={DeleteTodo}
        />
      </DefaultLayout>
    </>
  );
};

export default App;
