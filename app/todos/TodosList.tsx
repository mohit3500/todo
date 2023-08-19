import React from 'react';
import Link from 'next/link';

interface Todo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

const fetchListing = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  return todos;
};

const TodosList = async () => {
  const todos = await fetchListing();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
