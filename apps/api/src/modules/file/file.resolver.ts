import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { CreateFileRequest } from './dto/request/create-file.request';
import { FilePaginatedResponse } from './dto/response/file-paginated.response';
import { GetFilesRequest } from './dto/request/get-files.request';
import { CreateFileResponse } from './dto/response/create-file.response';

@Resolver('file')
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query(() => FilePaginatedResponse)
  getFiles(@Args('getFilesRequest') dto: GetFilesRequest) {
    return this.fileService.getFiles(dto);
  }

  @Mutation(() => CreateFileResponse)
  async createUploadFile(@Args('createFileRequest') dto: CreateFileRequest) {
    const serviceResponse = await this.fileService.createFile(dto);
    return serviceResponse.data;
  }
}
