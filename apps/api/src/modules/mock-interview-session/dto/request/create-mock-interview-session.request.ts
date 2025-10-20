import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMockInterviewSessionRequest {
  @Field()
  mockInterviewId: string;
}
