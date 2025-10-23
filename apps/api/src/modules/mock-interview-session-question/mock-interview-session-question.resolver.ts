import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MockInterviewSessionQuestionService } from './mock-interview-session-question.service';
import { MockInterviewSessionQuestionResponse } from './dto/response/mock-interview-session-question.response';
import { GetMockInterviewSessionQuestionRequest } from './dto/request/get-mock-interview-session-question.request';
import { StartMockInterviewSessionQuestionRequest } from './dto/request/start-mock-interview-session-question.request';
import { AnswerMockInterviewSessionQuestionRequest } from './dto/request/answer-mock-interview-session-question.request';

@Resolver()
export class MockInterviewSessionQuestionResolver {
  constructor(private readonly service: MockInterviewSessionQuestionService) {}

  @Query(() => [MockInterviewSessionQuestionResponse])
  async getMockInterviewSessionQuestions(
    @Args('input') dto: GetMockInterviewSessionQuestionRequest,
  ) {
    const serviceResponse = await this.service.findAll(dto);
    return serviceResponse.data;
  }

  @Mutation(() => Boolean)
  async startMockInterviewSessionQuestion(
    @Args('input') dto: StartMockInterviewSessionQuestionRequest,
  ): Promise<boolean> {
    const serviceResponse = await this.service.startQuestion(dto);

    if (!serviceResponse.status || !serviceResponse.data) {
      throw new Error(serviceResponse.message);
    }

    return serviceResponse.data;
  }

  @Mutation(() => Boolean)
  async answerMockInterviewSessionQuestion(
    @Args('input') dto: AnswerMockInterviewSessionQuestionRequest,
  ): Promise<boolean> {
    const serviceResponse = await this.service.answerQuestion(dto);

    if (!serviceResponse.status || !serviceResponse.data) {
      throw new Error(serviceResponse.message);
    }

    return serviceResponse.data;
  }
}
