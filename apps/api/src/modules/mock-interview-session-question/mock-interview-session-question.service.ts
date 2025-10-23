import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { GetMockInterviewSessionQuestionRequest } from './dto/request/get-mock-interview-session-question.request';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { MockInterviewSessionQuestionResponse } from './dto/response/mock-interview-session-question.response';
import { StartMockInterviewSessionQuestionRequest } from './dto/request/start-mock-interview-session-question.request';
import { AIService } from 'src/libs/ai/ai.service';
import { ModelMessage } from 'ai';
import { AnswerMockInterviewSessionQuestionRequest } from './dto/request/answer-mock-interview-session-question.request';

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
}
