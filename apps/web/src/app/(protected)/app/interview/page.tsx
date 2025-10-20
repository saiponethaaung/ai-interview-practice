"use client";

import { Button, Container, Flex, Modal, Text } from "@mantine/core";
import { CreateMockInterviewForm } from "@web/components/mock-interview/create-form/create-mock-interview-form.component";
import { MockInterviewTable } from "@web/components/mock-interview/table/mock-interview-table.component";
import { useGetMockInterviewsQuery } from "@web/utils/graphql/generated/types";
import { useState } from "react";

export default function InterviewPage() {
  const [openCreateForm, setOpenCreateForm] = useState<boolean>(false);

  const [page, setPage] = useState(1);

  const { data, loading, error, refetch } = useGetMockInterviewsQuery({
    variables: {
      input: {
        limit: 10,
        page,
      },
    },
  });

  return (
    <div>
      <Container style={{ maxWidth: "100%", padding: "20px", flexGrow: 1 }}>
        <Flex p={"0"} direction={"column"}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Text size="lg">Mock Interviews</Text>
            <Button onClick={() => setOpenCreateForm(true)}>
              Create Mock Interview
            </Button>
            <Modal
              opened={openCreateForm}
              title="Add File"
              onClose={() => setOpenCreateForm(false)}
            >
              <CreateMockInterviewForm
                closeCallback={(status) => {
                  setOpenCreateForm(false);

                  if (status) {
                    refetch();
                  }
                }}
              />
            </Modal>
          </Flex>

          <MockInterviewTable data={data} loading={loading} error={error} />
        </Flex>
      </Container>
    </div>
  );
}
