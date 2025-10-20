import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetMockInterviewRequest {
  @Field()
  id: string;
}
