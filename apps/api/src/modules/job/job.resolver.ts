import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JobResponse } from './dto/response/job.response';
import { CreateJobRequest } from './dto/request/create-job.request';
import { JobService } from './job.service';
import { GetJobRequest } from './dto/request/get-job.request';
import { GetJobsRequest } from './dto/request/get-jobs.request';

@Resolver('job')
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [JobResponse])
  async jobs(
    @Args('GetJobsRequest') dto: GetJobsRequest,
  ): Promise<JobResponse[]> {
    const jobs = await this.jobService.getJobs(dto);

    return jobs.map((job) => new JobResponse(job));
  }

  @Query(() => JobResponse, { nullable: true })
  async job(
    @Args('GetJobRequest') { id }: GetJobRequest,
  ): Promise<JobResponse | null> {
    const job = await this.jobService.getJobById(id);

    if (job) {
      return new JobResponse(job);
    }

    return null;
  }

  @Mutation(() => JobResponse)
  async createJob(
    @Args('input') input: CreateJobRequest,
  ): Promise<JobResponse> {
    const response = await this.jobService.create(input);

    if (response.status && response.data) {
      return new JobResponse(response.data);
    }

    throw new Error(response.message);
  }
}
