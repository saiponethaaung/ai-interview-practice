import { Field, ObjectType } from '@nestjs/graphql';
import { MockInterviewSession } from 'generated/prisma';

@ObjectType()
export class MockInterviewSessionResponse {
  constructor(data?: Partial<MockInterviewSession>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  @Field()
  id: string;

  @Field()
  mockInterviewId: string;

  @Field()
  numberOfQuestions: number;

  @Field()
  skillFocus: boolean;

  @Field()
  isCompleted: boolean;

  @Field({ nullable: true })
  startedAt?: Date;

  @Field({ nullable: true })
  completedAt?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
