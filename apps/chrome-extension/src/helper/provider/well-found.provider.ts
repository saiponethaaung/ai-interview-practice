import type { ScrappedJob } from "../../interfaces/job.interface";
import { JobHelper } from "../job-helper";

export class WellFoundProvider extends JobHelper {
  public provider = "wellfound";
  private section: "job-detail" | "popup" = "job-detail";

  constructor() {
    super();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: activeTab.id },
            func: () => {
              const popup = document.querySelector(
                '[data-test*="DiscoverModal"]'
              );
              return popup ? "popup" : "job-detail";
            },
          },
          (results) => {
            if (results && results[0] && results[0].result) {
              this.section = results[0].result as "job-detail" | "popup";
            }
          }
        );
      }
    });
  }

  async pageChanged() {}

  async applyToJob(): Promise<boolean> {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab.id) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: () => {
            const btn = document.querySelector(
              '[class*="actionBar"] > button + button'
            ) as HTMLButtonElement | null;
            btn?.click();
          },
        });
      }
    });

    return true;
  }

  async getJobDetails(): Promise<ScrappedJob> {
    return new Promise((resolve) =>
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              func: (section) => {
                const scrappedJob: ScrappedJob = {
                  title: "",
                  company: "",
                  url: "",
                  description: "",
                };
                scrappedJob.description =
                  document.querySelector('[class*="description"]')
                    ?.textContent || "";
                scrappedJob.title =
                  document.querySelector('[class*="styles_header"]')
                    ?.textContent || "";
                scrappedJob.company =
                  document.querySelector('[href*="/discover/startups"]')
                    ?.nextElementSibling?.nextElementSibling?.textContent || "";

                scrappedJob.url = window.location.href;

                if (section === "popup") {
                  scrappedJob.company =
                    document.querySelector("[href*='/company/'] > span")
                      ?.textContent || "";

                  scrappedJob.title =
                    document.querySelector('[data-test*="DiscoverModal"] h1')
                      ?.textContent || "";

                  scrappedJob.url =
                    "https://wellfound.com/jobs/" +
                    new URL(scrappedJob.url).searchParams.get(
                      "job_listing_slug"
                    );
                }

                scrappedJob.title = scrappedJob.title.split("at")[0];
                scrappedJob.title = scrappedJob.title.split("-")[0];

                for (const key in scrappedJob) {
                  scrappedJob[key as keyof ScrappedJob] =
                    scrappedJob[key as keyof ScrappedJob].trim();
                }

                return scrappedJob;
              },
              args: [this.section],
            },
            (results) => {
              if (results && results[0] && results[0].result) {
                this.scrappedJob = results[0].result as ScrappedJob;
                resolve(this.scrappedJob);
              }
            }
          );
        }
      })
    );
  }
}
