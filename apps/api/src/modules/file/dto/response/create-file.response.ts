import { Field, ObjectType } from '@nestjs/graphql';
import { FileResponse } from './file.response';
import { File } from 'generated/prisma';

@ObjectType()
export class CreateFileResponse {
  constructor(data?: Partial<File>) {
    if (data) {
      this.url = `${process.env.HOST}/v1/file/${data.id}`;
      this.file = new FileResponse(data);
    }
  }
  @Field()
  url: string;

  @Field()
  file: FileResponse;
}
