import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EndMockInterviewSessionRequest {
  @Field()
  mockInterviewSessionId: string;
}
