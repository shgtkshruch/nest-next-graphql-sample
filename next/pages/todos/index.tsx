import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../../src/generated/graphql";
import { AddTodoForm } from "./AddTodoForm";

export const Todos: NextPage = () => {
  const { loading, error, data, refetch } = useGetTodosQuery();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  async function deleteTodo(id: number) {
    await deleteTodoMutation({
      variables: {
        id,
      },
    });
    refetch();
  }

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>

      <AddTodoForm refetch={refetch} />

      <ul>
        {data!.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id} </span>
            <span>{todo.title}</span>
            <span> </span>
            <span>{todo.done ? "完了" : "未完了"} </span>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
