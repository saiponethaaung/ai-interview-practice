import { Field, ObjectType } from '@nestjs/graphql';
import { MockInterviewSessionQuestion } from 'generated/prisma';

@ObjectType()
export class MockInterviewSessionQuestionResponse {
  constructor(partial?: Partial<MockInterviewSessionQuestion>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  @Field()
  id: string;

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

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  endTime?: Date;

  @Field()
  mockInterviewSessionId: string;
}
