import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenerateCoverLetterRequest } from './dto/request/generate-cover-letter.request';
import { JobAnswerService } from './job-answer.service';
import { JobAnswerResponse } from './dto/response/job-answer.response';
import { GetJobAnswersRequest } from './dto/request/get-job-answers.request';
import { AskQuestionJobAnswerRequest } from './dto/request/ask-question-job-anwer.request';

@Resolver()
export class JobAnswerResolver {
  constructor(private readonly jobAnswerService: JobAnswerService) {}

  @Mutation(() => JobAnswerResponse)
  async generateCoverLetter(
    @Args('input') input: GenerateCoverLetterRequest,
  ): Promise<JobAnswerResponse> {
    return this.jobAnswerService.generateCoverLetter(input);
  }

  @Query(() => [JobAnswerResponse])
  async getJobAnswers(
    @Args('input') dto: GetJobAnswersRequest,
  ): Promise<JobAnswerResponse[]> {
    return this.jobAnswerService.getJobAnswers(dto);
  }

  @Mutation(() => JobAnswerResponse)
  async askQuestion(
    @Args('input') input: AskQuestionJobAnswerRequest,
  ): Promise<JobAnswerResponse> {
    return this.jobAnswerService.askQuestion(input);
  }
}
