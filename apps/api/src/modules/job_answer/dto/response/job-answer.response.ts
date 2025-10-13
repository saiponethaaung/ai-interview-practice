import { Field, ObjectType } from '@nestjs/graphql';
import { JobAnswer } from 'generated/prisma';

@ObjectType()
export class ChatMessage {
  @Field()
  role: 'user' | 'assistant' | 'system';

  @Field()
  content: string;
}

@ObjectType()
class JobContent {
  @Field()
  content: string;

  @Field(() => [ChatMessage])
  chats?: ChatMessage[];
}

@ObjectType()
export class JobAnswerResponse {
  constructor(partial: Partial<JobAnswer>) {
    Object.assign(this, partial);
  }

  @Field()
  id: string;

  @Field()
  jobId: string;

  @Field({ nullable: true })
  question?: string;

  @Field()
  type: 'QUESTIONS' | 'COVER_LETTER' | 'RESUME';

  @Field()
  content: JobContent;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
