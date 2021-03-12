import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Product')
export class Product {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
