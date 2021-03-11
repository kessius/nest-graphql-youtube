import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('ClientsDTO')
export class Client {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
