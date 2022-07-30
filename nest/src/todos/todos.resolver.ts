import { Resolver, Query } from '@nestjs/graphql';
import { Todo } from '../graphql';

@Resolver()
export class TodosResolver {
  @Query('todos')
  async todos(): Promise<Todo[]> {
    return [
      {
        id: 1,
        title: 'Frist Todo',
        done: false,
      },
      {
        id: 2,
        title: 'Second Todo',
        done: true,
      },
    ];
  }
}
