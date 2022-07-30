import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from '../graphql';
import { todos } from './todos';

let todoList = todos;
let id = todoList.length;

@Resolver()
export class TodosResolver {
  @Query('todos')
  todos(): Todo[] {
    return todoList;
  }

  @Query('getTodo')
  getTodo(@Args('id') id: number): Todo {
    return todoList.filter((todo) => todo.id === id)[0];
  }

  @Mutation()
  createTodo(@Args('title') title: string): Todo {
    const todo = {
      id: ++id,
      title,
      done: false,
    };
    todoList.push(todo);
    return todo;
  }

  @Mutation()
  doneTodo(@Args('id') id: number): string {
    todoList = todoList.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, done: true };
    });
    return 'ok';
  }

  @Mutation()
  deleteTodo(@Args('id') id: number): string {
    todoList = todoList.filter((todo) => todo.id !== id);
    return 'ok';
  }
}
