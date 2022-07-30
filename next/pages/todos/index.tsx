import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useGetTodosQuery, useCreateTodoMutation } from '../../src/generated/graphql';

export const Todos: NextPage = () => {
  const { loading, error, data } = useGetTodosQuery();
  const [createTodoMutation] = useCreateTodoMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function createTodo() {
    createTodoMutation({
      variables: {
        title: 'test1'
      }
    });
  }

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>
      <button onClick={createTodo}>Add Todo</button>
      <ul>
        {data!.todos.map(todo=> (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span> </span>
            <span>{todo.done ? '完了' : '未完了'}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
