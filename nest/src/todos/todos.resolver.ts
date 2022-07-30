import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Todo } from '../graphql';
import { todos } from './todos';

@Resolver()
export class TodosResolver {
  @Query('todos')
  async todos(): Promise<Todo[]> {
    return todos;
  }

  @Query('getTodo')
  async getTodo(@Args('id') id: number) {
    return todos.filter((todo) => todo.id === id)[0];
  }

  @Mutation()
  async createTodo(@Args('title') title: string) {
    const todo = {
      id: todos.length + 1,
      title,
      done: false,
    };
    todos.push(todo);
    return todo;
  }
}
