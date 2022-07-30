import type { NextPage } from 'next'
import Head from 'next/head'
import React, { FormEvent } from 'react'
import { useGetTodosQuery, useCreateTodoMutation } from '../../src/generated/graphql';

export const Todos: NextPage = () => {
  const { loading, error, data, refetch } = useGetTodosQuery();
  const [createTodoMutation] = useCreateTodoMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  async function createTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    const target = e.target as typeof e.target & {
      title: { value: string };
    };

    await createTodoMutation({
      variables: {
        title: target.title.value
      }
    });

    target.title.value = '';
    refetch()
  }

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>

      <form onSubmit={createTodo}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <button type="submit">Add</button>
      </form>

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
