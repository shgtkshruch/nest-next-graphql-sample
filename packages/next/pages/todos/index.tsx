import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useGetTodosQuery } from "../../src/generated/graphql";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

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
      {data && (
        <TodoList todoList={data.todos} refetch={refetch} />
      )}
    </>
  );
};

export default Todos;
