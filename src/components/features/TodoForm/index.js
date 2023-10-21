import React, { useEffect, useState } from 'react';

const TodoForm = ({ AddTodo, todoDataa, updateTodoHandler }) => {
  const [todoData, setTodoData] = useState({
    title: '',
    email: '',
  });
  const onChangeHandler = (e) => {
    setTodoData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(todoData);

    {
      todoDataa !== null
        ? updateTodoHandler({ id: todoDataa?.id, ...todoData })
        : AddTodo({ id: Math.floor(Math.random() * 100), ...todoData });
    }
  };

  useEffect(() => {
    setTodoData({
      title: todoDataa?.title ?? '',
      email: todoDataa?.email ?? '',
    });
  }, [todoDataa]);
  return (
    <>
      <h1>Todo Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="todoTitle">Todo Title</label>
          <input
            type="text"
            name="title"
            id="todoTitle"
            value={todoData.title}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="todoEmail">Todo Email</label>
          <input
            type="email"
            name="email"
            id="todoEmail"
            value={todoData.email}
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <button>{todoDataa ? 'Update Todo' : 'Add Todo'}</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
