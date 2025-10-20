import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { CreateMockInterviewRequest } from './dto/request/create-mock-interview.request';
import { MockInterviewResponse } from './dto/response/mock-interview.response';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { MockInterviewPaginatedResponse } from './dto/response/mock-interview-paginated.response';
import { GetMockInterviewsRequest } from './dto/request/get-mock-interviews.request';

@Injectable()
export class MockInterviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateMockInterviewRequest,
  ): Promise<MockInterviewResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockInterview = await this.prisma.mockInterview.create({
      data: {
        jobId: dto.jobId,
        type: dto.type,
        stage: dto.stage,
        questionType: dto.questionType,
        difficulty: dto.difficulty,
        globalPrompt: dto.globalPrompt,
      },
    });

    return new MockInterviewResponse(mockInterview);
  }

  async findAll({
    page = 1,
    limit = 10,
  }: GetMockInterviewsRequest): Promise<
    ServiceResponse<MockInterviewPaginatedResponse>
  > {
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.mockInterview.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.mockInterview.count(),
    ]);

    return {
      status: true,
      message: 'Mock interviews fetched successfully',
      data: {
        data: items.map((mi) => new MockInterviewResponse(mi)),
        pagination: this.prisma.calculatePagination(total, page, limit),
      },
      error: null,
    };
  }

  async findById(dto: {
    id: string;
  }): Promise<ServiceResponse<MockInterviewResponse>> {
    const mockInterview = await this.prisma.mockInterview.findFirst({
      where: { id: dto.id },
    });

    if (!mockInterview) {
      return {
        status: false,
        message: 'Mock interview not found',
        error: new Error('Not Found'),
      };
    }

    return {
      status: true,
      message: 'Mock interview fetched successfully',
      data: new MockInterviewResponse(mockInterview),
      error: null,
    };
  }
}
