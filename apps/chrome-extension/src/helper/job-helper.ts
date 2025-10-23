export abstract class JobHelper {
  abstract getJobDetails(): Promise<{
    title: string;
    company: string;
    location: string;
    description: string;
  }>;

  abstract applyToJob(): Promise<boolean>;
}
