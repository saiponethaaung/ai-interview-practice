"use client";

import { Box, Button, Container, Flex, Modal, Stack, Text } from "@mantine/core";
import { IconVideoPlus } from "@tabler/icons-react";
import { CreateMockInterviewForm } from "@web/components/mock-interview/create-form/create-mock-interview-form.component";
import { MockInterviewTable } from "@web/components/mock-interview/table/mock-interview-table.component";
import { useGetMockInterviewsQuery } from "@ai-interview-practice/gql";
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
      <Container size="xl">
        <Flex p={"0"} direction={"column"} my={20} gap={20}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Stack align="flex-start" gap={0}>
              <h1 className="text-3xl font-bold mb-2">
                Mock Interview
              </h1>
              <span className="text-gray-600">
                Prepare for your interviews with AI-powered mock interviews
              </span>
            </Stack>
            <Button style={{
              backgroundColor: 'var(--primary)',
              fontWeight: '700'
            }}
              onClick={() => setOpenCreateForm(true)}>
              <IconVideoPlus className="mr-2" size={20} color="white" /> Create Mock Interview
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
          <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6">
            <MockInterviewTable data={data} loading={loading} error={error} />
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
