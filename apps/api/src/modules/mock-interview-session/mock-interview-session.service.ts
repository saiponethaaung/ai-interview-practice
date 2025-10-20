/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { AIService } from 'src/libs/ai/ai.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { CreateMockInterviewSessionRequest } from './dto/request/create-mock-interview-session.request';
import z from 'zod';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { MockInterviewSessionResponse } from './dto/response/mock-interview-session.response';
import { GetMockInterviewSessionsRequest } from './dto/request/get-mock-interview-sessions.request';
import { GetMockInterviewSessionRequest } from './dto/request/get-mock-interview-session.request';

@Injectable()
export class MockInterviewSessionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  async createMockInterview({
    mockInterviewId,
  }: CreateMockInterviewSessionRequest): Promise<
    ServiceResponse<MockInterviewSessionResponse>
  > {
    const mockInterview = await this.prisma.mockInterview.findFirstOrThrow({
      where: { id: mockInterviewId },
      include: {
        job: {
          include: {
            resumeFile: true,
          },
        },
      },
    });

    const aiResponse = await this.ai.generateObject(
      z.array(
        z.object({
          question: z.string(),
          type: z.enum([
            'BEHAVIORAL',
            'TECHNICAL',
            'SITUATIONAL',
            'PERSONAL',
            'COMPANY_SPECIFIC',
            'ROLE_SPECIFIC',
            'MIXED',
          ]),
        }),
      ),
      [
        {
          role: 'system',
          content: `You are an expert interview question generator. Generate a list of 50 interview questions based on the job description and resume provided. The questions should be a mix of technical, HR, and managerial types. Format the response as a JSON array with each question having a 'question' and 'type' field.`,
        },
        {
          role: 'user',
          content: `Job Description: ${mockInterview.job.description}\n\nResume: ${JSON.stringify(
            mockInterview.job.resumeFile?.json || {},
          )}`,
        },
      ],
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const mockInterviewSession = await this.prisma.mockInterviewSession.create({
      data: {
        mockInterviewId: mockInterview.id,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        questions: aiResponse as any,
      },
    });

    return {
      error: null,
      status: true,
      message: 'Mock interview session created successfully',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      data: new MockInterviewSessionResponse(mockInterviewSession),
    };
  }

  async findAll({
    page = 1,
    limit = 10,
    mockInterviewId,
  }: GetMockInterviewSessionsRequest): Promise<
    ServiceResponse<{
      data: MockInterviewSessionResponse[];
      pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
      };
    }>
  > {
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.mockInterviewSession.findMany({
        skip,
        take: limit,
        where: { mockInterviewId },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.mockInterviewSession.count(),
    ]);

    return {
      status: true,
      message: 'Mock interview sessions fetched successfully',
      data: {
        data: items.map((mis) => new MockInterviewSessionResponse(mis)),
        pagination: this.prisma.calculatePagination(total, page, limit),
      },
      error: null,
    };
  }

  async findById({
    id,
  }: GetMockInterviewSessionRequest): Promise<
    ServiceResponse<MockInterviewSessionResponse>
  > {
    const mockInterviewSession =
      await this.prisma.mockInterviewSession.findUnique({
        where: { id },
      });

    if (!mockInterviewSession) {
      return {
        status: false,
        message: 'Mock interview session not found',
        error: new Error('NOT_FOUND'),
      };
    }

    return {
      status: true,
      message: 'Mock interview session fetched successfully',
      data: new MockInterviewSessionResponse(mockInterviewSession),
      error: null,
    };
  }
}
