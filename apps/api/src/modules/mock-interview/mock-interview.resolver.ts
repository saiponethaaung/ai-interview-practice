import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MockInterviewService } from './mock-interview.service';
import { CreateMockInterviewRequest } from './dto/request/create-mock-interview.request';
import { MockInterviewResponse } from './dto/response/mock-interview.response';
import { MockInterviewPaginatedResponse } from './dto/response/mock-interview-paginated.response';
import { GetMockInterviewsRequest } from './dto/request/get-mock-interviews.request';
import { GetMockInterviewRequest } from './dto/request/get-mock-interview.request';

@Resolver()
export class MockInterviewResolver {
  constructor(private readonly mockInterviewService: MockInterviewService) {}

  @Mutation(() => MockInterviewResponse)
  async createMockInterview(@Args('input') dto: CreateMockInterviewRequest) {
    const mockInterview = await this.mockInterviewService.create(dto);
    return mockInterview;
  }

  @Query(() => MockInterviewPaginatedResponse)
  async getMockInterviews(@Args('input') dto: GetMockInterviewsRequest) {
    const mockInterviews = await this.mockInterviewService.findAll(dto);
    return mockInterviews.data;
  }

  @Query(() => MockInterviewResponse)
  async getMockInterviewById(@Args('input') dto: GetMockInterviewRequest) {
    const mockInterview = await this.mockInterviewService.findById(dto);
    return mockInterview.data;
  }
}
