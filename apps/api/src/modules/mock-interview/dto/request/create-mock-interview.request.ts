import { Field, InputType } from '@nestjs/graphql';
import {
  DifficultyLevel,
  InterviewStage,
  InterviewType,
  QuestionType,
} from 'generated/prisma';

@InputType()
export class CreateMockInterviewRequest {
  @Field()
  jobId: string;

  @Field()
  type: InterviewType;

  @Field()
  stage: InterviewStage;

  @Field()
  questionType: QuestionType;

  @Field()
  difficulty: DifficultyLevel;

  @Field({ nullable: true })
  globalPrompt?: string;
}
