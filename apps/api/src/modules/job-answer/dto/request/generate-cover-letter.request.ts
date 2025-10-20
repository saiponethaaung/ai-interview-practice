import { InputType } from '@nestjs/graphql';
import { BasedJobAnswerRequest } from './based-job-answer.request';

@InputType()
export class GenerateCoverLetterRequest extends BasedJobAnswerRequest {}
