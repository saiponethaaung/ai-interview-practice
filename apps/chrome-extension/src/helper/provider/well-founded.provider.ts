import { JobHelper } from "../job-helper";

export class WellFoundedProvider extends JobHelper {
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

  getJobDetails(): Promise<{
    title: string;
    company: string;
    location: string;
    description: string;
  }> {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              func: () => {
                const platform = window.location.hostname.split(".")[0];
                const title =
                  document
                    .querySelector('[class*="styles_header"]')
                    ?.textContent.split("-")[0]
                    .trim() || "";
                const description =
                  document.querySelector('[class*="description"]')
                    ?.textContent || "";
                const company =
                  document.querySelector('[href*="/discover/startups"]')
                    ?.nextElementSibling?.nextElementSibling?.textContent || "";

                console.log({ platform, title, description, company });

                return {
                  title,
                  url: window.location.href,
                  description,
                  company,
                };
              },
            },
            (results) => {
              if (results && results[0] && results[0].result) {
                resolve(
                  results[0].result as unknown as {
                    title: string;
                    company: string;
                    location: string;
                    description: string;
                  }
                );
              }
            }
          );
        }
      });
    });
  }
}
