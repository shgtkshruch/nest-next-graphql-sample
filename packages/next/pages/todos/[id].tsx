import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useGetTodoQuery } from '../../src/generated/graphql';

export const Todo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useGetTodoQuery({
    variables: { id: Number(id) }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data?.getTodo) return <p>Not Fount :(</p>;

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>
      <h2>
        <span>{data.getTodo.id}</span>
        <span> </span>
        {data.getTodo.title}
      </h2>
      <span>{data.getTodo.done ? '完了' : '未完了'}</span>
    </>
  );
};

export default Todo;
