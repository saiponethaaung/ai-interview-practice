import { JobHelper } from "../job-helper";

export class LinkedinProvider extends JobHelper {
  public provider = "linkedin";

  async pageChanged() {
    console.log("Linkedin page changed detected");
  }

  applyToJob(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getJobDetails(): Promise<{
    title: string;
    company: string;
    url: string;
    description: string;
  }> {
    throw new Error("Method not implemented.");
  }
}
