import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Test')
export class TestResolver {
  @Query()
  async test() {
    return 'test';
  }
}
