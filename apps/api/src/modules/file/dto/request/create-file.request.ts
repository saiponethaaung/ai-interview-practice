import { Field, InputType } from '@nestjs/graphql';
import { FileType } from 'generated/prisma';

@InputType()
export class CreateFileRequest {
  @Field()
  name: string;

  @Field()
  filename: string;

  @Field()
  size: number;

  @Field()
  mime: string;

  @Field()
  type: FileType;
}
