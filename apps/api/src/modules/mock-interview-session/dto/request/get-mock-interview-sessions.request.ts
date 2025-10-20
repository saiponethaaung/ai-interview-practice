import { Field, InputType } from '@nestjs/graphql';
import { PaginationRequest } from 'src/dto/request/pagination.request';

@InputType()
export class GetMockInterviewSessionsRequest extends PaginationRequest {
  @Field()
  mockInterviewId: string;
}
