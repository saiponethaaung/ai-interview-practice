import { Field, InputType } from '@nestjs/graphql';
import { PaginationRequest } from 'src/dto/request/pagination.request';

@InputType()
export class GetJobsRequest extends PaginationRequest {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field({ nullable: true })
  link?: string;
}
