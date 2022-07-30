import { Resolver, Query, Args } from '@nestjs/graphql';
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
}
