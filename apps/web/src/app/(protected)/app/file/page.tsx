"use client";

import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Modal,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconPlus, IconUpload, IconX } from "@tabler/icons-react";
import FileViewer from "@web/components/file-viewer/file-viewer";
import UploadFileForm from "@web/components/file/upload-file-form/upload-file-form.component";
import { useGetFilesQuery } from "@ai-interview-practice/gql";

export default function JobPage() {
  const [openFile, setOpenFile] = useState<number>(-1);
  const [openCreateJob, setOpenCreateJob] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error, refetch } = useGetFilesQuery({
    variables: { getFilesRequest: { page, limit: 10 } },
  });

  return (
    <div>
      <Container size="xl">
        <Flex p={"0"} direction={"column"} my={20} gap={20}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Stack align="flex-start" gap={0}>
              <h1 className="text-3xl font-bold mb-2">Files</h1>
              <span className="text-gray-600">
                Manage your application materials and interview resources
              </span>
            </Stack>
            <Modal
              opened={openCreateJob}
              title="Add File"
              onClose={() => setOpenCreateJob(false)}
            >
              <UploadFileForm
                closeCallback={(completed) => {
                  setOpenCreateJob(false);
                  if (completed) {
                    refetch();
                  }
                }}
              />
            </Modal>
          </Flex>
          <Flex direction={"column"} gap={20} mt={10}>
            <Flex direction={"row"} justify={"space-between"} gap={20} mt={10}>
              <h2 className="text-2xl font-semibold mb-2">Upload New File</h2>
              {/* 
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Stack align="center" justify="center" p={20}>
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

                  <div>
                    <Text size="xl" inline>
                      Drag and drop files here or click to add file
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                      Attach as many files as you like, each file should not
                      exceed 5mb
                    </Text>
                  </div>
                </Group>
              </Stack>
            </Dropzone> */}
              <Button
                style={{
                  backgroundColor: "var(--primary)",
                  fontWeight: "700",
                }}
                onClick={() => setOpenCreateJob(true)}
              >
                <IconPlus className="mr-2" size={20} color="white" />
                Add File
              </Button>
            </Flex>
            <Box
              p={20}
              className="bg-[var(--card-light)] rounded-lg shadow-md my-6"
            >
              <h2 className="text-xl font-semibold mb-4">Your Files</h2>
              <Group mb={20} justify="space-between" align="center">
                <Table>
                  <TableThead>
                    <TableTr>
                      <Table.Th>Name</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>MIME</Table.Th>
                      <Table.Th>Date</Table.Th>
                      <TableTh>Actions</TableTh>
                    </TableTr>
                  </TableThead>
                  <TableTbody>
                    {data?.getFiles.data.map((file, index) => (
                      <TableTr key={index}>
                        <Table.Td>{file.name}</Table.Td>
                        <Table.Td>{file.type}</Table.Td>
                        <Table.Td>{file.status}</Table.Td>
                        <Table.Td>{file.mime}</Table.Td>
                        <Table.Td>{file.createdAt}</Table.Td>
                        <TableTd>
                          <div className="flex gap-2">
                            <Button
                              variant="light"
                              style={{
                                backgroundColor: "#E5E7EB",
                                fontWeight: "700",
                                color: "black",
                              }}
                              onClick={() => setOpenFile(1)}
                            >
                              View
                            </Button>
                            <Button
                              variant="light"
                              style={{
                                backgroundColor: "#FF1130",
                                fontWeight: "700",
                                color: "black",
                              }}
                              onClick={() => setOpenFile(1)}
                            >
                              Delete
                            </Button>
                            <Modal
                              title={file.name}
                              opened={openFile === 1}
                              onClose={() => setOpenFile(-1)}
                              size="xl"
                            >
                              <FileViewer
                                fileUrl={file.url}
                                mimeType={file.mime}
                              />
                            </Modal>
                          </div>
                        </TableTd>
                      </TableTr>
                    ))}
                  </TableTbody>
                </Table>
              </Group>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
