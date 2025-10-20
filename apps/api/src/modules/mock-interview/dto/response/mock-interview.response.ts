import { Field, ObjectType } from '@nestjs/graphql';
import { MockInterview } from 'generated/prisma';

@ObjectType()
export class MockInterviewResponse {
  constructor(data?: Partial<MockInterview>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  @Field()
  id: string;

  @Field()
  jobId: string;

  @Field()
  type: string;

  @Field()
  stage: string;

  @Field()
  questionType: string;

  @Field()
  difficulty: string;

  @Field({ nullable: true })
  globalPrompt?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
