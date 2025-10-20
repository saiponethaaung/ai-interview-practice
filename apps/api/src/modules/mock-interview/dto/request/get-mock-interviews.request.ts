import { Field, InputType } from '@nestjs/graphql';
import {
  DifficultyLevel,
  InterviewStage,
  InterviewType,
  QuestionType,
} from 'generated/prisma';
import { PaginationRequest } from 'src/dto/request/pagination.request';

@InputType()
export class GetMockInterviewsRequest extends PaginationRequest {
  @Field({ nullable: true })
  jobId?: string;

  @Field({ nullable: true })
  type?: InterviewType;

  @Field({ nullable: true })
  stage?: InterviewStage;

  @Field({ nullable: true })
  questionType?: QuestionType;

  @Field({ nullable: true })
  difficulty?: DifficultyLevel;
}
