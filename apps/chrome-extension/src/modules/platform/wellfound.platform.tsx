import { Button } from "@mantine/core";
import { useConfigStore } from "../../store/config.store";
import { useCreateJobMutation } from "@ai-interview-practice/gql";

export default function WellFoundPlatform({ saveJob, saving }: any) {
  const { helper } = useConfigStore((state) => state);

  return (
    <>
      <div>Apply on WellFound</div>
      <Button
        type="button"
        onClick={async () => {
          // const jobDetail = await helper?.getJobDetails();
          console.log("Job Detail:", helper?.scrappedJob);
        }}
      >
        Get job details
      </Button>
      <Button type="button" onClick={() => {}}>
        Apply to job
      </Button>
      <Button
        type="button"
        onClick={() => {
          helper?.checkJob();
        }}
      >
        Check
      </Button>
      <Button type="button" onClick={saveJob}>
        Save job
      </Button>
      {saving && <div>Saving job...</div>}
    </>
  );
}
