import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BasedJobAnswerRequest {
  @Field()
  jobId: string;
}
