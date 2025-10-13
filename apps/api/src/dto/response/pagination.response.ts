import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginationResponse {
  @Field()
  total: number;

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field()
  totalPages: number;
}
