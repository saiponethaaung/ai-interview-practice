import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { CreateFileRequest } from './dto/request/create-file.request';
import { ServiceResponse } from 'src/interfaces/service-response.interface';
import { CreateFileResponse } from './dto/response/create-file.response';
import { FileResponse } from './dto/response/file.response';
import { FileStatus, FileType, Prisma } from 'generated/prisma';
import { GetFilesRequest } from './dto/request/get-files.request';
import { FilePaginatedResponse } from './dto/response/file-paginated.response';
import { AIService } from 'src/libs/ai/ai.service';
import z from 'zod';

@Injectable()
export class FileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AIService,
  ) {}

  async updateFileStatus(
    id: string,
    status: FileStatus,
  ): Promise<ServiceResponse<FileResponse>> {
    const file = await this.prisma.file.update({
      where: { id },
      data: { status },
    });

    if (!file) {
      return {
        message: 'File not found',
        status: false,
        error: new Error('File not found'),
      };
    }

    const data = new FileResponse(file);

    if (
      (file.type === FileType.RESUME || file.type === FileType.CV) &&
      status === FileStatus.UPLOADED
    ) {
      const json = await this.aiService.generateObject(
        z.object({
          fullName: z.string().nullable(),
          firstName: z.string().nullable(),
          middleName: z.string().nullable(),
          lastName: z.string().nullable(),
          email: z.string().email().nullable(),
          phoneNumber: z.string().nullable(),
          address: z.string().nullable(),
          experience: z
            .array(
              z.object({
                company: z.string().nullable(),
                position: z.string().nullable(),
                startDate: z.string().nullable(),
                endDate: z.string().nullable(),
                description: z.string().nullable(),
              }),
            )
            .nullable(),
          education: z
            .array(
              z.object({
                institution: z.string().nullable(),
                degree: z.string().nullable(),
                fieldOfStudy: z.string().nullable(),
                startDate: z.string().nullable(),
                endDate: z.string().nullable(),
                description: z.string().nullable(),
              }),
            )
            .nullable(),
          skills: z.array(z.string()).nullable(),
          certifications: z.array(z.string()).nullable(),
          languages: z.array(z.string()).nullable(),
          summary: z.string().nullable(),
        }),
        [
          {
            role: 'system',
            content:
              'Perform OCR and return everything as a string. Keep the date format in YYYY-MM-DD or YYYY-MM if there is no day present. For job experience, only set null for end date if it is still working there. If you cannot find any information, return null.',
          },
          {
            role: 'user',
            content: [
              {
                type: 'file',
                data: new URL(`${process.env.HOST}/uploads/${file.filename}`),
                mediaType: file.mime,
              },
            ],
          },
        ],
        true,
      );

      if (json) {
        await this.prisma.file.update({
          where: { id: file.id },
          data: { json },
        });
      }
    }

    return {
      data,
      message: 'File status updated successfully',
      status: true,
      error: null,
    };
  }

  async getFileById(id: string): Promise<ServiceResponse<FileResponse>> {
    const file = await this.prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      return {
        message: 'File not found',
        status: false,
        error: new Error('File not found'),
      };
    }

    return {
      data: new FileResponse(file),
      message: 'File retrieved successfully',
      status: true,
      error: null,
    };
  }

  async createFile(
    dto: CreateFileRequest,
  ): Promise<ServiceResponse<CreateFileResponse>> {
    const file = await this.prisma.file.create({
      data: {
        ...dto,
        filename: new Date().getTime() + '-' + dto.filename,
        status: 'PENDING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return {
      data: new CreateFileResponse(file),
      message: 'File created successfully',
      status: true,
      error: null,
    };
  }

  async getFiles(dto: GetFilesRequest): Promise<FilePaginatedResponse> {
    const { page = 1, limit = 10, name } = dto;
    const skip = (page - 1) * limit;

    const where: Prisma.FileWhereInput = {};
    if (name) {
      where.name = { contains: name };
    }

    const [files, total] = await this.prisma.$transaction([
      this.prisma.file.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.file.count({ where }),
    ]);

    return {
      data: files.map((file) => new FileResponse(file)),
      pagination: this.prisma.calculatePagination(total, page, limit),
    };
  }
}
