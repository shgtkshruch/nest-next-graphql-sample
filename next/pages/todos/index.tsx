import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useGetTodosQuery } from "../../src/generated/graphql";
import { AddTodoForm } from './AddTodoForm';

export const Todos: NextPage = () => {
  const { loading, error, data, refetch } = useGetTodosQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>

      <AddTodoForm refetch={refetch} />

      <ul>
        {data!.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span> </span>
            <span>{todo.done ? "完了" : "未完了"}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
