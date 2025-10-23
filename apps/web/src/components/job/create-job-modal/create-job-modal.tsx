import { Button, Flex, Select, Text, Textarea, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import {
  useCreateJobMutation,
  useGetFilesQuery,
} from "@web/utils/graphql/generated/types";

interface CreateJobFormData {
  title: string;
  company: string;
  link: string;
  description: string;
  resumeFileId: string;
}

export default function CreateJobModal({
  closeCallback,
}: {
  closeCallback: (completed: boolean) => void;
}) {
  const form = useForm<CreateJobFormData>({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      company: "",
      link: "",
      description: "",
      resumeFileId: "",
    },
    validate: {
      title: (value) => (value.trim().length > 0 ? null : "Title is required"),
      company: (value) =>
        value.trim().length > 0 ? null : "Company is required",
      link: (value) => (value.trim().length > 0 ? null : "Link is required"),
      description: (value) =>
        value.trim().length > 0 ? null : "Description is required",
      resumeFileId: (value) =>
        value.trim().length > 0 ? null : "Resume/CV file is required",
    },
  });

  const [createJobMutation, { loading }] = useCreateJobMutation();
  const { data, loading: filesLoading } = useGetFilesQuery({
    variables: { getFilesRequest: { page: 1, limit: 30 } },
  });

  const onSubmit = async (data: CreateJobFormData) => {
    await createJobMutation({
      variables: { createJobRequest: data },
    })
      .then(() => {
        closeCallback(true);
      })
      .catch((error) => {
        console.error("Error creating job:", error);
      });
  };

  return (
    <Form form={form} onSubmit={(values) => onSubmit(values)}>
      <Flex direction="column" gap="15px">
        <label>
          <TextInput
            label="Title"
            placeholder="Enter job title"
            {...form.getInputProps("title")}
          />
        </label>
        <label>
          <TextInput
            label="Company"
            placeholder="Enter company name"
            {...form.getInputProps("company")}
          />
        </label>
        <label>
          <TextInput
            label="Link"
            placeholder="Enter job link"
            {...form.getInputProps("link")}
          />
        </label>
        <label>
          <Textarea
            label="Description"
            placeholder="Enter job description"
            resize="vertical"
            {...form.getInputProps("description")}
          />
        </label>

        <label>
          <Select
            label="Resume/CV"
            placeholder="Select a file"
            data={
              filesLoading
                ? [{ value: "", label: "Loading files...", disabled: true }]
                : data?.getFiles.data.map((file) => ({
                    value: file.id,
                    label: file.name,
                  })) || []
            }
            {...form.getInputProps("resumeFileId")}
          />
        </label>

        <Button type="submit" disabled={loading}>
          Create
        </Button>
      </Flex>
    </Form>
  );
}
