import {
  Box,
  Button,
  Flex,
  Group,
  LoadingOverlay,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE, PDF_MIME_TYPE } from "@mantine/dropzone";
import { useCreateUploadFileMutation } from "@web/utils/graphql/generated/types";
import { useEffect, useState } from "react";

interface UploadFileData {
  name: string;
  filename: string;
  size: string;
  mime: string;
  type: string;
}

interface IProps {
  closeCallback: () => void;
}

export default function UploadFileForm({ closeCallback }: IProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setIsUploading] = useState<boolean>(false);

  const form = useForm<UploadFileData>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      type: "",
      filename: "",
      size: "",
      mime: "",
    },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      type: (value) =>
        value.trim().length > 0 ? null : "File type is required",
      filename: (value) =>
        value.trim().length > 0 ? null : "File name is required",
      size: (value) =>
        value.trim().length > 0 ? null : "File size is required",
      mime: (value) =>
        value.trim().length > 0 ? null : "File mime type is required",
    },
  });

  const [createFileUpload, { data, loading }] = useCreateUploadFileMutation();

  const createFileRecord = async (
    values: typeof form.values
  ): Promise<void> => {
    await createFileUpload({
      variables: {
        createFileRequest: { ...values, size: parseInt(values.size) },
      },
    }).catch((error) => {
      console.error("Error uploading file:", error);
    });
  };

  const handleDrop = (file: File) => {
    setFile(file);
    form.setFieldValue("filename", file.name.replaceAll(/\s+/g, "-"));
    form.setFieldValue("size", `${file.size}`);
    form.setFieldValue("mime", file.type);

    if (form.getValues().name.trim().length === 0) {
      form.setFieldValue("name", file.name);
    }
  };

  const uploadFile = async (): Promise<void> => {
    const formData = new FormData();
    formData.append("file", file as Blob);

    setIsUploading(true);

    await fetch(`${data?.createUploadFile.url}`, {
      method: "POST",
      body: formData,
    });

    setIsUploading(false);
    closeCallback();
  };

  useEffect(() => {
    if (data && data.createUploadFile) {
      uploadFile();
    }
  }, [data]);

  return (
    <Form form={form} onSubmit={(values) => createFileRecord(values)}>
      <Box>
        <LoadingOverlay visible={loading || uploading} />
        <Flex direction="column" gap="15px">
          <label>
            <TextInput
              label="Name"
              description="Auto filled upon file selection if empty"
              placeholder="Enter file name"
              error={form.errors.name && "Name is required"}
              {...form.getInputProps("name")}
            />
          </label>

          <label>
            <TextInput
              label="File size"
              description="Auto filled upon file selection"
              placeholder="File size in bytes"
              disabled
              error={form.errors.size && "File size is required"}
              {...form.getInputProps("size")}
            />
          </label>

          <label>
            <TextInput
              label="MIME"
              description="Auto filled upon file selection"
              placeholder="File mime type"
              type="text"
              disabled
              error={form.errors.mime && "File mime type is required"}
              {...form.getInputProps("mime")}
            />
          </label>

          <label>
            <Select
              label="File Type"
              placeholder="Select file type"
              data={[
                { value: "RESUME", label: "Resume" },
                { value: "CV", label: "CV" },
                { value: "COVER_LETTER", label: "Cover Letter" },
              ]}
              error={form.errors.type && "File type is required"}
              {...form.getInputProps("type")}
            ></Select>
          </label>

          <label>
            <Dropzone
              onDrop={(files) => handleDrop(files[0])}
              onReject={(file) => console.log("rejected file", file)}
              maxSize={5 * 1024 ** 2}
              multiple={false}
              accept={[...IMAGE_MIME_TYPE, ...PDF_MIME_TYPE]}
            >
              <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload
                    size={52}
                    color="var(--mantine-color-blue-6)"
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size={52}
                    color="var(--mantine-color-red-6)"
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto
                    size={52}
                    color="var(--mantine-color-dimmed)"
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <div style={{ textAlign: "center" }}>
                  <Text size="xl" inline>
                    Drag file here or click to select file
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    File should not exceed 5mb
                  </Text>
                </div>
              </Group>
            </Dropzone>
          </label>

          {form.errors.name && (
            <Text c="red" size="sm">
              {form.errors.name}
            </Text>
          )}
          {form.errors.filename && (
            <Text c="red" size="sm">
              {form.errors.filename}
            </Text>
          )}
          {form.errors.size && (
            <Text c="red" size="sm">
              {form.errors.size}
            </Text>
          )}
          {form.errors.mime && (
            <Text c="red" size="sm">
              {form.errors.mime}
            </Text>
          )}
          {form.errors.type && (
            <Text c="red" size="sm">
              {form.errors.type}
            </Text>
          )}

          <Button type="submit">Upload</Button>
        </Flex>
      </Box>
    </Form>
  );
}
