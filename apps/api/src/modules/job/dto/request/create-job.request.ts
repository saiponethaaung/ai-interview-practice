import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJobRequest {
  @Field()
  title: string;

  @Field()
  company: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  link: string;

  @Field()
  resumeFileId: string;
}
