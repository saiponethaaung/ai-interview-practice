import type { JobHelper } from "./job-helper";
import { LinkedinProvider } from "./provider/linkedin.provider";
import { WellFoundProvider } from "./provider/well-found.provider";

export class ChromeHelper {
  async getActiveTabID(): Promise<number | null> {
    let activeTabId: number | null = null;

    return new Promise((resolve: (value: number | null) => void) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id) {
          activeTabId = tabs[0].id;
        }

        resolve(activeTabId);
      });
    }).then((tabId) => tabId);
  }

  async getJobHelpers(): Promise<JobHelper | null> {
    const activeTab = await this.getActiveTabID();

    if (!activeTab) {
      return null;
    }

    return new Promise((resolve) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab },
          func: () => {
            return window.location.hostname;
          },
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            const hostname = results[0].result as string;

            let jobHelper: JobHelper | null = null;

            switch (hostname) {
              case "www.linkedin.com":
                jobHelper = new LinkedinProvider();
                break;

              case "wellfound.com":
                jobHelper = new WellFoundProvider();
                break;

              default:
                jobHelper = null;
            }

            resolve(jobHelper);
          } else {
            resolve(null);
          }
        }
      );
    });
  }
}
