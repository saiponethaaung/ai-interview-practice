import { Injectable } from '@nestjs/common';
import { AIService } from 'src/libs/ai/ai.service';
import { GenerateCoverLetterRequest } from './dto/request/generate-cover-letter.request';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import z, { ZodString } from 'zod';
import { ModelMessage } from 'ai';
import {
  ChatMessage,
  JobAnswerResponse,
} from './dto/response/job-answer.response';
import { GetJobAnswersRequest } from './dto/request/get-job-answers.request';
import { AskQuestionJobAnswerRequest } from './dto/request/ask-question-job-anwer.request';

@Injectable()
export class JobAnswerService {
  constructor(
    private readonly aiService: AIService,
    private readonly prisma: PrismaService,
  ) {}

  async generateCoverLetter(dto: GenerateCoverLetterRequest) {
    const job = await this.prisma.job.findUnique({
      where: { id: dto.jobId },
      include: {
        resumeFile: true,
      },
    });

    if (!job || !job.resumeFile) {
      throw new Error('Job not found');
    }

    const messages: ModelMessage[] = [
      {
        role: 'system',
        content: `You are a helpful assistant that helps write cover letters for the job.
        Please make sure to include relevant skills and experiences from the resume.
        The cover letter should be concise and to the point, ideally within 300 words.
        The cover letter should be in English.
        The cover letter should be in a professional tone.

        It should be structured exactly as below:

        Dear [Hiring Manager's Name if available, otherwise use Hiring Manager],
        <br/>
        <br/>
        [Introduction: A brief introduction about yourself and the position you are applying for.]
        <br/>
        <br/>
        [Body: Highlight your relevant skills, experiences, and achievements that make you a suitable candidate for the job. Use specific examples to demonstrate your qualifications.]
        <br/>
        <br/>
        [Conclusion: Express your enthusiasm for the position and the company. Mention that you have attached your resume for further details. Thank the hiring manager for considering your application.]
        <br/>
        <br/>
        Sincerely,
        [Your Name]
        `,
      },
      {
        role: 'user',
        content: `Please write a cover letter for the job description. Here is the job description: ${job.description}
        Here is the resume: ${JSON.stringify(job.resumeFile.json)}`,
      },
    ];

    const coverLetter = await this.aiService.generateObject<ZodString, string>(
      z.string(),
      messages,
    );

    messages.push({ role: 'assistant', content: coverLetter });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const coverLetterRecord = await this.prisma.jobAnswer.findFirst({
      where: { jobId: dto.jobId, type: 'COVER_LETTER' },
    });

    if (coverLetterRecord) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await this.prisma.jobAnswer.update({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        where: { id: coverLetterRecord.id },
        data: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          content: {
            content: coverLetter,
            chats: messages as ChatMessage[],
          } as any,
        },
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      await this.prisma.jobAnswer.create({
        data: {
          jobId: dto.jobId,
          type: 'COVER_LETTER',
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          content: {
            content: coverLetter,
            chats: messages as ChatMessage[],
          } as any,
        },
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const jobAnswer = await this.prisma.jobAnswer.findFirst({
      where: { jobId: dto.jobId, type: 'COVER_LETTER' },
    });

    return new JobAnswerResponse(jobAnswer ?? {});
  }

  async getJobAnswers({
    jobId,
  }: GetJobAnswersRequest): Promise<JobAnswerResponse[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const answers = await this.prisma.jobAnswer.findMany({
      where: { jobId },
      orderBy: { createdAt: 'desc' },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return answers.map((a) => new JobAnswerResponse(a));
  }

  async askQuestion({ jobId, question }: AskQuestionJobAnswerRequest) {
    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: {
        resumeFile: true,
      },
    });

    if (!job || !job.resumeFile) {
      throw new Error('Job not found');
    }

    // TODO: to reconsider the prompt later
    // If the question is not relevant to the job, please answer politely that you are not able to answer the question.
    const baseMessages: ModelMessage[] = [
      {
        role: 'system',
        content: `You are a helpful assistant that helps answer questions for the job.
        Please make sure to include relevant skills and experiences from the resume if applicable.
        The answer should be concise and to the point, ideally within 500 words.
        The answer should be in English.
        The answer should be in a professional tone.

        If you are unsure about the answer, please say that you are unsure and provide your best guess.

        If the question is about the company, please answer based on the job description only.

        If the question is about the application process, please answer based on the job description only.
        `,
      },
      {
        role: 'user',
        content: `Here is the job description: ${job.description}
        Here is the resume: ${JSON.stringify(job.resumeFile.json)}
        Here is the question: ${question}
        `,
      },
    ];

    const answer = await this.aiService.generateObject<ZodString, string>(
      z.string(),
      baseMessages,
    );

    const messages: ModelMessage[] = [
      ...baseMessages,
      { role: 'assistant', content: answer },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const questionRecord = await this.prisma.jobAnswer.create({
      data: {
        jobId: jobId,
        type: 'QUESTIONS',
        question: question,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        content: {
          content: answer,
          chats: messages as ChatMessage[],
        } as any,
      },
    });

    return new JobAnswerResponse(questionRecord);
  }
}
