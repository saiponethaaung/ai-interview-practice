import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class ResumeExperience {
  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  position?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
class ResumeEducation {
  @Field({ nullable: true })
  institution?: string;

  @Field({ nullable: true })
  degree?: string;

  @Field({ nullable: true })
  fieldOfStudy?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class ResumeResponse {
  constructor(partial?: Partial<ResumeResponse>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  @Field({ nullable: true })
  fullName?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => [ResumeExperience], { nullable: true })
  experience?: ResumeExperience[];

  @Field(() => [ResumeEducation], { nullable: true })
  education?: ResumeEducation[];

  @Field(() => [String], { nullable: true })
  skills?: string[];

  @Field(() => [String], { nullable: true })
  certifications?: string[];

  @Field(() => [String], { nullable: true })
  languages?: string[];

  @Field({ nullable: true })
  summary: string;
}
