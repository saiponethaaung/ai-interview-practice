import { Field, InputType } from '@nestjs/graphql';
import { PaginationRequest } from 'src/dto/request/pagination.request';

@InputType()
export class GetFilesRequest extends PaginationRequest {
  @Field(() => String, { nullable: true })
  name?: string;
}
