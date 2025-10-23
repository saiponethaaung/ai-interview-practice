import { JobHelper } from "../job-helper";

export class IndeedProvider extends JobHelper {
  applyToJob(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getJobDetails(): Promise<{
    title: string;
    company: string;
    location: string;
    description: string;
  }> {
    throw new Error("Method not implemented.");
  }
}
