
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
    jobHelper?.getJobDetails().then((results: any) => {
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
    });
  };
