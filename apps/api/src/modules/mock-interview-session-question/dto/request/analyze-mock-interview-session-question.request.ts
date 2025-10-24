import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AnalyzeMockInterviewSessionQuestionRequest {
  @Field()
  mockInterviewSessionQuestionId: string;
}
