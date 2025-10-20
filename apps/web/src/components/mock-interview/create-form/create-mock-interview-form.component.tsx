import { Box, Button, Flex, LoadingOverlay, Select } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { CreateMockInterviewRequest } from "@web/utils/graphql/generated/graphql";
import {
  useCreateMockInterviewMutation,
  useGetJobsQuery,
} from "@web/utils/graphql/generated/types";
import { useEffect, useState } from "react";

interface IProps {
  closeCallback(status?: boolean): void;
}

export function CreateMockInterviewForm({ closeCallback }: IProps) {
  const [jobKeyword, setJobKeyword] = useState<string>("");
  const form = useForm<CreateMockInterviewRequest>({
    mode: "uncontrolled",
    initialValues: {
      jobId: "",
      type: "",
      questionType: "",
      stage: "",
      difficulty: "",
    },
    validate: {
      jobId: (value) => (value.trim().length > 0 ? null : "Job is required"),
      type: (value) => (value.trim().length > 0 ? null : "Type is required"),
      questionType: (value) =>
        value.trim().length > 0 ? null : "Question type is required",
      stage: (value) => (value.trim().length > 0 ? null : "Stage is required"),
      difficulty: (value) =>
        value.trim().length > 0 ? null : "Difficulty is required",
    },
  });

  const [createMockInterview, { data, loading, error }] =
    useCreateMockInterviewMutation({});

  const closeCallbackFunc = (status: boolean = false) => {
    closeCallback(status);
  };

  const {
    data: jobsData,
    loading: jobsLoading,
    error: jobsError,
  } = useGetJobsQuery({
    variables: { getJobsRequest: { limit: 100, page: 1, title: jobKeyword } },
  });

  const handleSubmit = (input: CreateMockInterviewRequest) => {
    createMockInterview({
      variables: {
        input,
      },
    })
      .then(() => {
        closeCallbackFunc(true);
      })
      .catch((e) => {
        console.error("Error creating mock interview:", e);
      });
  };

  useEffect(() => {
    if (data && !loading && !error) {
      closeCallbackFunc(true);
    }
  }, [data]);

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <Box>
        <LoadingOverlay visible={loading} />
        <Flex direction="column" gap="15px">
          <label>
            <Select
              label="Job"
              placeholder="Select a job"
              data={jobsData?.jobs.map((job) => ({
                label: `${job.title} - (${job.company})`,
                value: job.id,
              }))}
              {...form.getInputProps("jobId", { required: true })}
              searchValue={jobKeyword}
              onSearchChange={setJobKeyword}
              searchable
              clearable
            />
          </label>

          <label>
            <Select
              label="Mock interview type"
              placeholder="Select a mock interview type"
              data={[
                { label: "Text", value: "TEXT" },
                { label: "Video", value: "VIDEO" },
                { label: "Audio", value: "AUDIO" },
              ]}
              {...form.getInputProps("type", { required: true })}
            />
          </label>

          <label>
            <Select
              label="Interview Stage"
              placeholder="Select an interview stage"
              data={[
                { label: "General", value: "GENERAL" },
                { label: "Technical", value: "TECHNICAL" },
                { label: "HR", value: "HR" },
              ]}
              {...form.getInputProps("stage", { required: true })}
            />
          </label>

          <label>
            <Select
              label="Difficulty"
              placeholder="Select interview difficulty"
              data={[
                { label: "Easy", value: "EASY" },
                { label: "Medium", value: "MEDIUM" },
                { label: "Hard", value: "HARD" },
              ]}
              {...form.getInputProps("difficulty", { required: true })}
            />
          </label>

          <label>
            <Select
              label="Question Type"
              placeholder="Select question type"
              data={[
                { value: "BEHAVIORAL", label: "Behavioral" },
                { value: "TECHNICAL", label: "Technical" },
                { value: "SITUATIONAL", label: "Situational" },
                { value: "PERSONAL", label: "Personal" },
                { value: "COMPANY_SPECIFIC", label: "Company specific" },
                { value: "ROLE_SPECIFIC", label: "Role specific" },
                { value: "MIXED", label: "Mixed" },
              ]}
              {...form.getInputProps("questionType", { required: true })}
            />
          </label>

          <Button type="submit">Create</Button>
        </Flex>
      </Box>
    </Form>
  );
}
