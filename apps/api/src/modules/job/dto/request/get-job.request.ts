import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetJobRequest {
  @Field()
  id: string;
}
