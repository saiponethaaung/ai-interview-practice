import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AnswerMockInterviewSessionQuestionRequest {
  @Field()
  mockInterviewSessionQuestionId: string;

  @Field()
  answer: string;
}
