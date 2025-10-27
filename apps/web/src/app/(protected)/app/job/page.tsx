"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Modal,
  Popover,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import CreateJobModal from "@web/components/job/create-job-modal/create-job-modal";
import { JobDetailDrawer } from "@web/components/job/job-detail-drawer/job-detail-drawer";
import { getRandomColor } from "@web/utils/color-generator.util";
import { useGetJobsQuery } from "@web/utils/graphql/generated/types";
import Link from "next/link";
import { useState } from "react";

export default function JobPage() {
  const [openCreateJob, setOpenCreateJob] = useState<boolean>(false);
  const [openModel, setOpenModel] = useState<number>(-1);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error, refetch } = useGetJobsQuery({
    variables: { getJobsRequest: { page, limit: 10 } },
  });

  return (
    <div>
      <Container size="xl">
        <Flex p={"0"} direction={"column"} my={20} gap={20}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Stack align="flex-start" gap={0}>
              <h1 className="text-3xl font-bold mb-2">
                Job Applications
              </h1>
              <span className="text-gray-600">
                Track and manage your job Applications
              </span>
            </Stack>
            <Button style={{
              backgroundColor: 'var(--primary)',
              fontWeight: '700'
            }} onClick={() => setOpenCreateJob(true)}>
              <IconPlus className="mr-2" size={20} color="white" />
              Add Application</Button>
            <Modal
              opened={openCreateJob}
              title="Add Job"
              onClose={() => setOpenCreateJob(false)}
            >
              <CreateJobModal closeCallback={() => setOpenCreateJob(false)} />
            </Modal>
          </Flex>
          <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6">

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Company</Table.Th>
                  <Table.Th>Title</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Skills</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data?.jobs.map((job, index) => (
                  <Table.Tr key={job.id}>
                    <Table.Th>{job.company || "N/A"}</Table.Th>
                    <Table.Th>
                      <Link href={job.link} target="_blank">
                        {job.title}
                      </Link>
                    </Table.Th>
                    <Table.Th>{job.status}</Table.Th>
                    <Table.Th>
                      <Flex gap="5px" wrap="wrap">
                        {job.skills.map((skill, index) => (
                          <Popover
                            key={index}
                            width={"50%"}
                            withArrow
                            shadow="md"
                          >
                            <Popover.Target>
                              <Badge color={getRandomColor()}>{skill.name}</Badge>
                            </Popover.Target>
                            <Popover.Dropdown>
                              <Flex direction="column" p="10px">
                                <Text>{skill.name}</Text>
                                <Text>{skill.description}</Text>

                                <Text mt={"10px"}>
                                  Required: {skill.mandatory ? "Yes" : "No"}
                                </Text>
                                <Text>
                                  Technical: {skill.technical ? "Yes" : "No"}
                                </Text>
                              </Flex>
                            </Popover.Dropdown>
                          </Popover>
                        ))}
                      </Flex>
                    </Table.Th>
                    <Table.Th>
                      <JobDetailDrawer
                        open={openModel === index}
                        closeCallback={() => setOpenModel(-1)}
                        job={job}
                      />

                      <Button onClick={() => setOpenModel(index)}>Detail</Button>
                    </Table.Th>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>

          {error && <div>Error: {error.message}</div>}
          {loading && <div>Loading...</div>}
        </Flex>
      </Container>
    </div>
  );
}
