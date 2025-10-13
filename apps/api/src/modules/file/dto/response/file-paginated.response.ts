import { Field, ObjectType } from '@nestjs/graphql';
import { FileResponse } from './file.response';
import { PaginationResponse } from 'src/dto/response/pagination.response';

@ObjectType()
export class FilePaginatedResponse {
  @Field(() => [FileResponse])
  data: FileResponse[];

  @Field(() => PaginationResponse)
  pagination: PaginationResponse;
}
