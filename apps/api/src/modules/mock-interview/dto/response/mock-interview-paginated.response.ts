import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationResponse } from 'src/dto/response/pagination.response';
import { MockInterviewResponse } from './mock-interview.response';

@ObjectType()
export class MockInterviewPaginatedResponse {
  @Field(() => [MockInterviewResponse])
  data: MockInterviewResponse[];

  @Field()
  pagination: PaginationResponse;
}
