import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetMockInterviewSessionQuestionRequest {
  @Field()
  mockInterviewSessionId: string;
}
