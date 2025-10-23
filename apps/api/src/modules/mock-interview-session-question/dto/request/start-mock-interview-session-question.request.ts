import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StartMockInterviewSessionQuestionRequest {
  @Field()
  mockInterviewSessionQuestionId: string;
}
