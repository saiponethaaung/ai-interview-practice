import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetMockInterviewSessionRequest {
  @Field()
  id: string;
}
