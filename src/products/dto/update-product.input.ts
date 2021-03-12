import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}