import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { FileRequest } from 'src/interfaces/file-request.interface';
import { FileService } from 'src/modules/file/file.service';

@Injectable()
export class UploadFileInterceptor implements NestInterceptor {
  constructor(private readonly fileService: FileService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request: FileRequest = context
      .switchToHttp()
      .getRequest<Request>() as FileRequest;
    const id = request.params.id;

    const file = await this.fileService.getFileById(id);

    if (!file.status || !file.data) {
      throw new HttpException('File not found', 404);
    }

    if (file.data.status !== 'PENDING') {
      throw new HttpException('File already processed', 400);
    }

    request.fileObj = file.data;

    return next.handle();
  }
}
