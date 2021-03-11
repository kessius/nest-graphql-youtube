import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('ClientDto')
export class Client {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
