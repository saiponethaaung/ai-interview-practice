import { useEffect } from "react";
import { useConfigStore } from "../../store/config.store";
import LinkedinPlatform from "../platform/linkedin.platform";
import { ChromeHelper } from "../../helper/chrome.helper";
import WellFoundPlatform from "../platform/wellfound.platform";
import { useCreateJobMutation } from "@ai-interview-practice/gql";

function MainPage() {
  const [createJob, { loading }] = useCreateJobMutation();
  const { helper, setHelper } = useConfigStore((state) => state);
  const chromeHelper = new ChromeHelper();

  const detectPage = async () => {
    const jobHelper = await chromeHelper.getJobHelpers();
    setHelper(jobHelper);
  };

  const urlChangeListener = (
    tabId: number,
    changeInfo: chrome.tabs.OnUpdatedInfo,
    tab: chrome.tabs.Tab
  ) => {
    if (tab.active && changeInfo.status === "complete") {
      helper?.pageChanged();
    }
  };

  const saveJob = async () => {
    if (loading) return;

    createJob({
      variables: {
        createJobRequest: {
          title: helper?.scrappedJob.title || "",
          company: helper?.scrappedJob.company || "",
          link: helper?.scrappedJob.url || "",
          description: helper?.scrappedJob.description || "",
          resumeFileId: "019a2875-a655-7092-acec-c84b8962b65f",
        },
      },
    });
  };

  useEffect(() => {
    // Initial page detection
    detectPage();

    // Add event listener for tab changes
    chrome.tabs.onActivated.addListener(detectPage);

    // Add event listener for URL changes
    chrome.tabs.onUpdated.addListener(urlChangeListener);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (helper) {
      setTimeout(() => {
        helper.getJobDetails();
      }, 500);
    }
  }, [helper]);

  if (helper?.provider === "wellfound") {
    return <WellFoundPlatform saveJob={saveJob} saving={loading} />;
  }

  if (helper?.provider === "linkedin") {
    return <LinkedinPlatform />;
  }

  return (
    <>
      <div>Unsupported platform</div>
    </>
  );
}

export default MainPage;
