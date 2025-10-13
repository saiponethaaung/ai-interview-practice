import { Field, ObjectType } from '@nestjs/graphql';
import { Job, JobStatus } from 'generated/prisma';

@ObjectType()
class Skill {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  technical: boolean;

  @Field()
  mandatory: boolean;

  @Field({ nullable: true })
  analysis?: string;
}

@ObjectType()
export class JobResponse {
  constructor(partial?: Partial<Job>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field()
  link: string;

  @Field()
  status: JobStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
