import { Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { FileService } from './file.service';
import {
  DiskStorageFile,
  FileInterceptor,
  UploadedFile,
} from '@blazity/nest-file-fastify';
import { UploadFileInterceptor } from 'src/interceptors/upload-file.interceptor';
import { renameSync } from 'node:fs';
import { FileRequest } from 'src/interfaces/file-request.interface';

@Controller({
  path: 'file',
  version: '1',
})
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post(':id')
  @UseInterceptors(
    UploadFileInterceptor,
    FileInterceptor('file', {
      dest: './uploads',
    }),
  )
  async uploadFile(
    @UploadedFile()
    file: DiskStorageFile,
    @Req() req: FileRequest,
  ) {
    renameSync(file.path, `./uploads/${req.fileObj.filename}`);

    await this.fileService.updateFileStatus(req.fileObj.id, 'UPLOADED');

    return { status: true, message: 'File uploaded successfully' };
  }
}
