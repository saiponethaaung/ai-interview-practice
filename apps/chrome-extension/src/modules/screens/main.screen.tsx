import { Button } from "@mantine/core";
import { useState } from "react";

function MainPage() {
  const [page, setPage] = useState<string>("");

  const applyJob = () => {
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
  };

  const pageData = () => {
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
                document.querySelector('[class*="description"]')?.textContent ||
                "";
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
            console.log("Script executed.");
            if (results && results[0] && results[0].result) {
              console.log("Script executed 2.");
              console.log(results[0].result);
              const { title, url } = results[0].result as {
                title: string;
                url: string;
              };
              setPage(`Title: ${title}\nURL: ${url}`);
              // console.log(`Title: ${title}\nURL: ${url}`);
            }
          }
        );
      }
    });
  };

  return (
    <>
      <Button onClick={pageData}>Get page data</Button>
      {page && <pre>{page}</pre>}
    </>
  );
}

export default MainPage;
