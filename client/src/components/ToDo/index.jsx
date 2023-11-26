import React from 'react';
import TaskForm from './TaskForm';
import TasksList from './TasksList';

const Todo = () => {
  return (
    <section>
      <TaskForm />
      <TasksList />
    </section>
  );
}

export default Todo;
