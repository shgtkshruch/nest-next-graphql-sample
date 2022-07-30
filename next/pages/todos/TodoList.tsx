import React from "react";
import {
  useDeleteTodoMutation,
  useDoneTodoMutation,
  Todo,
} from "../../src/generated/graphql";

export const TodoList = ({
  todoList,
  refetch,
}: {
  todoList: Todo[];
  refetch: Function;
}) => {
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [doneTodoMutation] = useDoneTodoMutation();

  async function deleteTodo(id: number) {
    await deleteTodoMutation({
      variables: {
        id,
      },
    });
    refetch();
  }

  async function doneTodo(id: number) {
    await doneTodoMutation({
      variables: {
        id,
      },
    });
    refetch();
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <span>{todo.id} </span>
          <span>{todo.title} </span>
          <span>{todo.done ? "完了" : "未完了"} </span>
          {!todo.done && (
            <button type="button" onClick={() => doneTodo(todo.id)}>
              Done
            </button>
          )}
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
