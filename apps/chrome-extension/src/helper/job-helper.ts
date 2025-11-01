import type { ScrappedJob } from "../interfaces/job.interface";

export abstract class JobHelper {
  public scrappedJob: ScrappedJob = {
    title: "",
    company: "",
    url: "",
    description: "",
  };

  public abstract provider: string;

  public abstract pageChanged(): Promise<void>;

  public abstract getJobDetails(): Promise<ScrappedJob>;

  abstract applyToJob(): Promise<boolean>;

  checkJob() {
    console.log("Checking job...", this.scrappedJob);
  }

  saveJob() {
    
  }
}
