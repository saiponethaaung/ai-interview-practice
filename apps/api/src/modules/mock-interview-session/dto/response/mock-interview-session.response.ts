import { Field, ObjectType } from '@nestjs/graphql';
import { MockInterviewSession } from 'generated/prisma';

@ObjectType()
class InterviewQuestions {
  @Field()
  question: string;

  @Field()
  type:
    | 'BEHAVIORAL'
    | 'TECHNICAL'
    | 'SITUATIONAL'
    | 'PERSONAL'
    | 'COMPANY_SPECIFIC'
    | 'ROLE_SPECIFIC'
    | 'MIXED';
}

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
  isCompleted: boolean;

  @Field(() => [InterviewQuestions])
  questions: InterviewQuestions[];

  @Field({ nullable: true })
  startedAt?: Date;

  @Field({ nullable: true })
  completedAt?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
