import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MockInterviewSessionService } from './mock-interview-session.service';
import { CreateMockInterviewSessionRequest } from './dto/request/create-mock-interview-session.request';
import { MockInterviewSessionResponse } from './dto/response/mock-interview-session.response';
import { MockInterviewSessionPaginatedResponse } from './dto/response/mock-interview-session-paginated.response';
import { GetMockInterviewSessionsRequest } from './dto/request/get-mock-interview-sessions.request';
import { GetMockInterviewSessionRequest } from './dto/request/get-mock-interview-session.request';
import { StartMockInterviewSessionRequest } from './dto/request/start-mock-interview-session.request';
import { EndMockInterviewSessionRequest } from './dto/request/end-mock-interview-session.request copy';

@Resolver()
export class MockInterviewSessionResolver {
  constructor(private readonly service: MockInterviewSessionService) {}

  @Mutation(() => MockInterviewSessionResponse)
  async createMockInterviewSession(
    @Args('input') dto: CreateMockInterviewSessionRequest,
  ): Promise<MockInterviewSessionResponse> {
    const serviceResponse = await this.service.createMockInterview(dto);

    if (!serviceResponse.status || !serviceResponse.data) {
      throw new Error(
        serviceResponse.message || 'Failed to create mock interview session',
      );
    }

    return serviceResponse.data;
  }

  @Query(() => MockInterviewSessionPaginatedResponse)
  async getMockInterviewSessions(
    @Args('input') dto: GetMockInterviewSessionsRequest,
  ): Promise<MockInterviewSessionPaginatedResponse> {
    const serviceResponse = await this.service.findAll(dto);

    if (!serviceResponse.status || !serviceResponse.data) {
      throw new Error(
        serviceResponse.message || 'Failed to fetch mock interview sessions',
      );
    }

    return serviceResponse.data;
  }

  @Query(() => MockInterviewSessionResponse)
  async getMockInterviewSessionById(
    @Args('input') dto: GetMockInterviewSessionRequest,
  ): Promise<MockInterviewSessionResponse> {
    const serviceResponse = await this.service.findById(dto);

    if (!serviceResponse.status || !serviceResponse.data) {
      throw new Error(
        serviceResponse.message || 'Failed to fetch mock interview session',
      );
    }

    return serviceResponse.data;
  }

  @Mutation(() => Boolean)
  async startMockInterviewSession(
    @Args('input') dto: StartMockInterviewSessionRequest,
  ): Promise<boolean> {
    const serviceResponse = await this.service.startSession(dto);

    if (!serviceResponse.status) {
      throw new Error(
        serviceResponse.message || 'Failed to start mock interview session',
      );
    }

    return true;
  }

  @Mutation(() => Boolean)
  async endMockInterviewSession(
    @Args('input') dto: EndMockInterviewSessionRequest,
  ): Promise<boolean> {
    const serviceResponse = await this.service.endSession(dto);

    if (!serviceResponse.status) {
      throw new Error(
        serviceResponse.message || 'Failed to end mock interview session',
      );
    }

    return true;
  }
}
