import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export const Todo: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Todo | Create Next App</title>
      </Head>
      <span>{id}</span>
    </>
  );
};

export default Todo;
