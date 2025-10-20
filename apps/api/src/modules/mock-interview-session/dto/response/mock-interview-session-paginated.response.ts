import { Field, ObjectType } from '@nestjs/graphql';
import { PaginationResponse } from 'src/dto/response/pagination.response';
import { MockInterviewSessionResponse } from './mock-interview-session.response';

@ObjectType()
export class MockInterviewSessionPaginatedResponse {
  @Field(() => [MockInterviewSessionResponse])
  data: MockInterviewSessionResponse[];

  @Field()
  pagination: PaginationResponse;
}
