"use client";

import { Button, Container, Flex, Modal, Table, Text } from "@mantine/core";
import FileViewer from "@web/components/file-viewer/file-viewer";
import UploadFileModal from "@web/components/file/upload-file-modal/upload-file-modal";
import { useGetFilesQuery } from "@web/utils/graphql/generated/types";
import { useState } from "react";

export default function JobPage() {
  const [openFile, setOpenFile] = useState<number>(-1);
  const [openCreateJob, setOpenCreateJob] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error, refetch } = useGetFilesQuery({
    variables: { getFilesRequest: { page, limit: 10 } },
  });

  return (
    <div>
      <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
        <Flex p={"0"} direction={"column"}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Text size="lg">Files</Text>
            <Button onClick={() => setOpenCreateJob(true)}>Add File</Button>
            <Modal
              opened={openCreateJob}
              title="Add File"
              onClose={() => setOpenCreateJob(false)}
            >
              <UploadFileModal closeCallback={() => setOpenCreateJob(false)} />
            </Modal>
          </Flex>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>MIME</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>View</Table.Th>
                {/* <Table.Th>Action</Table.Th> */}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data?.getFiles.data.map((file, index) => (
                <Table.Tr key={file.id}>
                  <Table.Td>{file.name}</Table.Td>
                  <Table.Td>{file.type}</Table.Td>
                  <Table.Td>{file.status}</Table.Td>
                  <Table.Td>{file.mime}</Table.Td>
                  <Table.Td>{file.createdAt}</Table.Td>
                  <Table.Td>
                    <Button onClick={() => setOpenFile(index)}>View</Button>

                    <Modal
                      title={file.name}
                      opened={openFile === index}
                      onClose={() => setOpenFile(-1)}
                      size={"80%"}
                    >
                      <FileViewer fileUrl={file.url} mimeType={file.mime} />
                    </Modal>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          {error && <div>Error: {error.message}</div>}
          {loading && <div>Loading...</div>}
        </Flex>
      </Container>
    </div>
  );
}
