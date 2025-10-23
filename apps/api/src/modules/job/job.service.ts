import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { CreateJobRequest } from './dto/request/create-job.request';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { Job } from 'generated/prisma';
import { AIService } from 'src/libs/ai/ai.service';
import z from 'zod';
import { GetJobsRequest } from './dto/request/get-jobs.request';

@Injectable()
export class JobService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AIService,
  ) {}

  async getJobById(id: string): Promise<Job | null> {
    return this.prisma.job.findUnique({
      where: { id },
    });
  }

  async getJobs({ page = 1, limit = 10 }: GetJobsRequest): Promise<Job[]> {
    const skip = (page - 1) * limit;

    return this.prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });
  }

  async create({
    title,
    company,
    description = '',
    link,
    resumeFileId,
  }: CreateJobRequest): Promise<ServiceResponse<Job>> {
    // TODO: Use prompt management system to manage prompts
    const skillResponse = await this.aiService.generateObject<
      z.ZodObject<{
        salary: z.ZodObject<{
          min: z.ZodNullable<z.ZodNumber>;
          max: z.ZodNullable<z.ZodNumber>;
          currency: z.ZodNullable<z.ZodString>;
          fixed: z.ZodNullable<z.ZodNumber>;
        }>;
        skills: z.ZodArray<z.ZodString>;
      }>,
      {
        salary: {
          min: number | null;
          max: number | null;
          currency: string | null;
          fixed: number | null;
        };
        skills: string[];
      }
    >(
      z.object({
        salary: z.object({
          min: z.number().nullable(),
          max: z.number().nullable(),
          currency: z.string().nullable(),
          fixed: z.number().nullable(),
        }),
        skills: z.array(z.string()),
      }),
      [
        {
          role: 'system',
          content:
            'You are a helpful assistant that helps to extract skill from job description.',
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Extract all the soft skill, programming language, library, and framework including the example given in the description. Be sure to look through entire description and don't leave anything and don't add extra words that is not included in the description except it's not a skill relevant to the actual position. Be sure to include everythings that is included in the descirption no matter how long the array is. The result should be returned as a single array of string for examaple "['<skill1>', '<skill2>', ...]" and array need to be only 1 level not object of array and return only json array without any extra text. Make sure do you not add skill that is not present in the job description and you can return empty array if you don't find any skills in it. And don't create skill out of thin air. \nTitle: ${title}\nDescription: ${description}`,
            },
          ],
        },
      ],
    );

    // TODO: Use prompt management system to manage prompts
    const skillArray = await this.aiService.generateObject<
      z.ZodArray<
        z.ZodObject<{
          name: z.ZodString;
          description: z.ZodString;
          technical: z.ZodBoolean;
          mandatory: z.ZodBoolean;
        }>
      >,
      Array<{
        name: string;
        description: string;
        technical: boolean;
        mandatory: boolean;
      }>
    >(
      z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          technical: z.boolean(),
          mandatory: z.boolean(),
        }),
      ),
      [
        {
          role: 'system',
          content:
            'You are a helpful assistant that helps research additional information about skills mentioned in job description and give detail explanation about the skill and example of the skill and also categorize the skill into technical skill or non-technical skill and also categorize the skill into mandatory or non-mandatory skill for the job position',
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `This is JD ${description}. Return should be in json array. Nothing more and nothing less and no extra text.`,
            },
            ...skillResponse.skills.map((skill: any) => ({
              type: 'text' as const,
              text: `Please write a description for the skill and result should be in json object like {name: string, description: string, technical: boolean, mandatory: boolean}: ${skill}`,
            })),
          ],
        },
      ],
    );

    const job = await this.prisma.job.create({
      data: {
        title,
        description,
        link,
        company,
        status: 'OPEN',
        skills: skillArray,
        resumeFileId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return {
      data: job,
      message: 'Job created successfully',
      error: null,
      status: true,
    };
  }
}
