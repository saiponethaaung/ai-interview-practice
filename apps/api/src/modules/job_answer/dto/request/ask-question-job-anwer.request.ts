import { Field, InputType } from '@nestjs/graphql';
import { BasedJobAnswerRequest } from './based-job-answer.request';

@InputType()
export class AskQuestionJobAnswerRequest extends BasedJobAnswerRequest {
  @Field()
  question: string;
}
