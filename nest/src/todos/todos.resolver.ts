import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from '../graphql';
import { todos } from './todos';

@Resolver()
export class TodosResolver {
  @Query('todos')
  todos(): Todo[] {
    return todos;
  }

  @Query('getTodo')
  getTodo(@Args('id') id: number): Todo {
    return todos.filter((todo) => todo.id === id)[0];
  }

  @Mutation()
  createTodo(@Args('title') title: string): Todo {
    const todo = {
      id: todos.length + 1,
      title,
      done: false,
    };
    todos.push(todo);
    return todo;
  }
}
