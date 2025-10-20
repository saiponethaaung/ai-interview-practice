import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMockInterviewSessionRequest {
  @Field()
  mockInterviewId: string;

  @Field({ nullable: true, defaultValue: false })
  skillsFocus?: boolean;

  @Field({ nullable: true, defaultValue: 50 })
  numberOfQuestions?: number;
}
