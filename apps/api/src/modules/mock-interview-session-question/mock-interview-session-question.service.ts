import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { GetMockInterviewSessionQuestionRequest } from './dto/request/get-mock-interview-session-question.request';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { MockInterviewSessionQuestionResponse } from './dto/response/mock-interview-session-question.response';
import { StartMockInterviewSessionQuestionRequest } from './dto/request/start-mock-interview-session-question.request';
import { AIService } from 'src/libs/ai/ai.service';
import { ModelMessage } from 'ai';
import { AnswerMockInterviewSessionQuestionRequest } from './dto/request/answer-mock-interview-session-question.request';
import z from 'zod';

@Injectable()
export class MockInterviewSessionQuestionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AIService,
  ) {}

  async findAll(
    dto: GetMockInterviewSessionQuestionRequest,
  ): Promise<ServiceResponse<MockInterviewSessionQuestionResponse[]>> {
    const questions = await this.prisma.mockInterviewSessionQuestion.findMany({
      where: {
        mockInterviewSessionId: dto.mockInterviewSessionId,
      },
      orderBy: { id: 'asc' },
    });

    return {
      data: questions.map(
        (question) => new MockInterviewSessionQuestionResponse(question),
      ),
      message: 'Questions retrieved successfully',
      status: true,
      error: null,
    };
  }

  async startQuestion(
    dto: StartMockInterviewSessionQuestionRequest,
  ): Promise<ServiceResponse<boolean>> {
    const question = await this.prisma.mockInterviewSessionQuestion.findUnique({
      where: { id: dto.mockInterviewSessionQuestionId },
    });

    if (!question) {
      return {
        data: false,
        message: 'Question not found',
        status: false,
        error: new Error('NOT_FOUND'),
      };
    }

    if (question.startTime) {
      return {
        data: false,
        message: 'Question already started',
        status: false,
        error: new Error('ALREADY_STARTED'),
      };
    }

    const now = new Date();

    await this.prisma.mockInterviewSessionQuestion.update({
      where: { id: dto.mockInterviewSessionQuestionId },
      data: { startTime: now },
    });

    return {
      data: true,
      message: 'Question started successfully',
      status: true,
      error: null,
    };
  }

  async answerQuestion({
    answer,
    mockInterviewSessionQuestionId,
  }: AnswerMockInterviewSessionQuestionRequest): Promise<
    ServiceResponse<boolean>
  > {
    const question = await this.prisma.mockInterviewSessionQuestion.findUnique({
      where: { id: mockInterviewSessionQuestionId },
    });

    if (!question) {
      return {
        data: false,
        message: 'Question not found',
        status: false,
        error: new Error('NOT_FOUND'),
      };
    }

    if (question.endTime) {
      return {
        data: false,
        message: 'Question already answered',
        status: false,
        error: new Error('ALREADY_ANSWERED'),
      };
    }

    const messages: ModelMessage[] = [
      {
        role: 'system',
        content: `You are an expert interview coach. Provide detailed feedback on the candidate's answer to the interview question. Highlight strengths and areas for improvement. Be constructive and encouraging.`,
      },
      {
        role: 'assistant',
        content: question.question,
      },
      {
        role: 'user',
        content: answer,
      },
    ];
    const now = new Date();

    await this.prisma.mockInterviewSessionQuestion.update({
      where: { id: question.id },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: { endTime: now, conversations: messages as any },
    });

    return {
      data: true,
      message: 'Question answered successfully',
      status: true,
      error: null,
    };
  }

  async analyzeQuestion(dto: {
    mockInterviewSessionQuestionId: string;
  }): Promise<ServiceResponse<boolean>> {
    const question = await this.prisma.mockInterviewSessionQuestion.findUnique({
      where: { id: dto.mockInterviewSessionQuestionId },
      include: {
        mockInterviewSession: {
          include: { mockInterview: true },
        },
      },
    });

    if (!question) {
      return {
        data: false,
        message: 'Question not found',
        status: false,
        error: new Error('NOT_FOUND'),
      };
    }

    if (
      !question.conversations ||
      (question.conversations as ModelMessage[]).length === 0
    ) {
      return {
        data: false,
        message: 'No answer found to analyze',
        status: false,
        error: new Error('NO_ANSWER'),
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const analysisMessages: ModelMessage[] = [
      {
        role: 'system',
        content: `You are an expert interview coach. Provide detailed feedback on the candidate's answer to the interview question. Highlight strengths and areas for improvement. Be constructive and encouraging. Questions are for ${question.mockInterviewSession.mockInterview.questionType} with ${question.mockInterviewSession.mockInterview.difficulty} difficulty for ${question.mockInterviewSession.mockInterview.stage} stage.`,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      ...(question.conversations as any[]),
      {
        role: 'user',
        content: `Please provide a detailed analysis of my answer, including strengths and areas for improvement. Overview of answer, strengths, improvements, and score (0-10) with feedback and example(Like how you would answer based on my profile and experience) for each of the following criteria: correctness, relevance, depth, structure, clarity, tone, and confidence. Highlights is for higihlighting parts of the answer that were particularly well done or need improvement. It can be empty if not needed.`,
      },
    ];

    // interface AnalysisResult {
    //   score: number;
    //   feedback: string;
    //   example: string;
    // }

    // type ZodInterface = z.ZodObject<{
    //   correctness: z.ZodObject<{
    //     score: z.ZodNumber;
    //     feedback: z.ZodString;
    //     example: z.ZodString;
    //   }>;
    // }>;

    const anaylsisObjectSchema = z.object({
      score: z.number(),
      feedback: z.string(),
      example: z.string(),
      highlights: z.string().optional(),
    });

    const aiResponse = await this.aiService.generateObject(
      z.object({
        overview: z.string(),
        strengths: z.string(),
        improvements: z.string(),
        averageScore: z.number(),
        scores: z.object({
          correctness: anaylsisObjectSchema,
          relevance: anaylsisObjectSchema,
          depth: anaylsisObjectSchema,
          structure: anaylsisObjectSchema,
          clarity: anaylsisObjectSchema,
          tone: anaylsisObjectSchema,
          confidence: anaylsisObjectSchema,
        }),
      }),
      analysisMessages,
    );

    await this.prisma.mockInterviewSessionQuestion.update({
      where: { id: question.id },
      data: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        analysis: aiResponse as unknown as any,
      },
    });

    return {
      data: true,
      message: 'Question analyzed successfully',
      status: true,
      error: null,
    };
  }
}
