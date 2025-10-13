import { Field, ObjectType } from '@nestjs/graphql';
import { File, FileStatus, FileType } from 'generated/prisma';
import { ResumeResponse } from 'src/dto/response/resume.response';

@ObjectType()
export class FileResponse {
  constructor(partial?: Partial<File>) {
    if (partial) {
      Object.assign(this, partial);
      this.url = `${process.env.HOST}/uploads/${partial.filename}`;
      if (
        partial.type === 'RESUME' &&
        partial.json &&
        typeof partial.json === 'object' &&
        !Array.isArray(partial.json)
      ) {
        this.resume = new ResumeResponse(
          partial.json as Partial<ResumeResponse>,
        );
      }
    }
  }

  @Field()
  id: string;

  @Field()
  url: string;

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

  @Field(() => ResumeResponse, { nullable: true })
  resume: ResumeResponse | null;

  @Field()
  status: FileStatus;

  @Field({ nullable: true })
  errorMessage?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
