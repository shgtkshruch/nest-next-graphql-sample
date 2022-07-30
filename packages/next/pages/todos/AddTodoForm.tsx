import React, { FormEvent } from "react";
import { useCreateTodoMutation } from "../../src/generated/graphql";

export const AddTodoForm = ({ refetch }: { refetch: Function }) => {
  const [createTodoMutation] = useCreateTodoMutation();

  async function createTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    const target = e.target as typeof e.target & {
      title: { value: string };
    };

    await createTodoMutation({
      variables: {
        title: target.title.value,
      },
    });

    target.title.value = "";
    refetch();
  }

  return (
    <form onSubmit={createTodo}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
