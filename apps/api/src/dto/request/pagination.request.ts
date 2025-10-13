import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationRequest {
  @Field(() => Number, { nullable: true })
  page?: number;

  @Field(() => Number, { nullable: true })
  limit?: number;
}
