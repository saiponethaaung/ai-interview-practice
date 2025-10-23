import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StartMockInterviewSessionRequest {
  @Field()
  mockInterviewSessionId: string;
}
