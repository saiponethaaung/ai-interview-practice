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
import { ModelMessage } from 'ai';
import { Skill } from '../job/dto/response/job.response';
import { StartMockInterviewSessionRequest } from './dto/request/start-mock-interview-session.request';
import { EndMockInterviewSessionRequest } from './dto/request/end-mock-interview-session.request copy';

@Injectable()
export class MockInterviewSessionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  async createMockInterview({
    mockInterviewId,
    numberOfQuestions = 50,
    skillsFocus = false,
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

    const questionType =
      mockInterview.questionType === 'MIXED'
        ? [
            'BEHAVIORAL',
            'TECHNICAL',
            'SITUATIONAL',
            'PERSONAL',
            'COMPANY_SPECIFIC',
            'ROLE_SPECIFIC',
            'MIXED',
          ]
        : [mockInterview.questionType];

    const prompts: ModelMessage[] = [
      {
        role: 'system',
        content: `You are an expert interview question generator. Generate a list of ${numberOfQuestions} interview questions based on the job description and resume provided. The questions should be ${questionType.join(',')} type(s). Format the response as a JSON array with each question having a 'question' and 'type' field. Make sure the questions are relevant to the job description and resume. The difficulty level should be ${mockInterview.difficulty.toLowerCase()} and suitable for the ${mockInterview.stage.toLowerCase()} stage of the interview process and question should be relevant to that stage.`,
      },
      {
        role: 'user',
        content: `Job Description: ${mockInterview.job.description}\n\nResume: ${JSON.stringify(
          mockInterview.job.resumeFile?.json || {},
        )}`,
      },
    ];

    if (skillsFocus) {
      prompts.push({
        role: 'user',
        content: `Focus on generating questions that assess following skils ${(mockInterview.job.skills as unknown as Skill[]).map((s) => s.name).join(',')}.`,
      });
    }

    const aiResponse = await this.ai.generateObject<
      z.ZodArray<
        z.ZodObject<{
          question: z.ZodString;
          // TODO: Find type
          type: any;
        }>
      >,
      {
        question: string;
        type:
          | 'BEHAVIORAL'
          | 'TECHNICAL'
          | 'SITUATIONAL'
          | 'PERSONAL'
          | 'COMPANY_SPECIFIC'
          | 'ROLE_SPECIFIC'
          | 'MIXED';
      }[]
    >(
      z.array(
        z.object({
          question: z.string(),
          type: z.enum(questionType),
        }),
      ),
      prompts,
    );

    const mockInterviewSession = await this.prisma.mockInterviewSession.create({
      data: {
        mockInterviewId: mockInterview.id,
        numberOfQuestions,
        skillFocus: skillsFocus,
        questions: {
          createMany: {
            data: aiResponse.map((q) => ({
              question: q.question,
              type: q.type,
            })),
          },
        },
      },
    });

    return {
      error: null,
      status: true,
      message: 'Mock interview session created successfully',
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

  async startSession({
    mockInterviewSessionId,
  }: StartMockInterviewSessionRequest): Promise<ServiceResponse<boolean>> {
    const session = await this.prisma.mockInterviewSession.findFirst({
      where: { id: mockInterviewSessionId },
    });

    if (!session) {
      return {
        status: false,
        message: 'Mock interview session not found',
        error: new Error('NOT_FOUND'),
      };
    }

    if (session.startedAt) {
      return {
        status: true,
        message: 'Mock interview session already started',
        data: true,
        error: null,
      };
    }

    await this.prisma.mockInterviewSession.update({
      where: { id: mockInterviewSessionId },
      data: { startedAt: new Date() },
    });

    return {
      status: true,
      message: 'Mock interview session started successfully',
      data: true,
      error: null,
    };
  }

  async endSession({
    mockInterviewSessionId,
  }: EndMockInterviewSessionRequest): Promise<ServiceResponse<boolean>> {
    const session = await this.prisma.mockInterviewSession.findFirst({
      where: { id: mockInterviewSessionId },
    });

    if (!session) {
      return {
        status: false,
        message: 'Mock interview session not found',
        error: new Error('NOT_FOUND'),
      };
    }

    if (session.completedAt) {
      return {
        status: true,
        message: 'Mock interview session already completed',
        data: true,
        error: null,
      };
    }

    await this.prisma.mockInterviewSession.update({
      where: { id: mockInterviewSessionId },
      data: { completedAt: new Date(), isCompleted: true },
    });

    return {
      status: true,
      message: 'Mock interview session completed successfully',
      data: true,
      error: null,
    };
  }
}
