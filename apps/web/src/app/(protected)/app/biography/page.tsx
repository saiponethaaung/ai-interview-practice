"use client";

import { Box, Button, Container, Flex, Group, Modal, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, Textarea, TextInput } from "@mantine/core";
import FileViewer from "@web/components/file-viewer/file-viewer";

export default function BioPage() {
    return (
        <div>
            <Container size="xl">
                <Flex p={"0"} direction={"column"} my={20} gap={20}>
                    <Flex align={"center"} justify={"space-between"} w={"100%"}>
                        <Stack align="flex-start" gap={0}>
                            <h1 className="text-3xl font-bold mb-2">
                                Biography
                            </h1>
                            <span className="text-gray-600">
                                Manage your personal biography and background information
                            </span>
                        </Stack>
                    </Flex>
                    <Flex direction={"column"} gap={20}>
                        <Box p={40} className="bg-[var(--card-light)] rounded-lg shadow-md my-6 space-y-4 ">
                            <Stack align="flex-start" gap={0}>
                                <h2 className="text-xl font-semibold">Fill out your biography</h2>
                            </Stack>
                            <TextInput
                                label="Biography Name"
                                placeholder="e.g., Senior Software Engineer Application"
                                radius={"md"}
                            />
                            <Group grow>
                                <TextInput
                                    label="Name"
                                    placeholder="Your full name"
                                    radius={"md"}
                                />
                                <TextInput
                                    label="Role"
                                    placeholder="e.g., Software Engineer"
                                    radius={"md"}
                                />
                            </Group>
                            <Group grow>
                                <TextInput
                                    label="Company"
                                    placeholder="e.g., Tech Corp"
                                    radius={"md"}

                                />
                                <TextInput
                                    label="Location"
                                    placeholder="e.g., San Francisco, CA"
                                    radius={"md"}
                                />
                            </Group>
                            <Textarea
                                label="About Me"
                                placeholder="Write a brief summary about yourself"
                                radius={"md"}
                                autosize
                                minRows={4}
                                maxRows={12}
                            />
                            <Group justify="flex-end" mt="md">
                                <Button variant="light" style={{
                                    backgroundColor: '#E5E7EB',
                                    fontWeight: '700',
                                    color: 'black',
                                }}>
                                    Cancel
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        fontWeight: '700'
                                    }}
                                >
                                    Save Biography
                                </Button>
                            </Group>
                        </Box>
                    </Flex>
                    <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            Existing Biographies
                        </h2>
                        <Group mb={20} justify="space-between" align="center">
                            <Table>
                                <TableThead>
                                    <TableTr>
                                        <TableTh>Name</TableTh>
                                        <TableTh>Role</TableTh>
                                        <TableTh>Company</TableTh>
                                        <TableTh>Location</TableTh>
                                        <TableTh>Action</TableTh>
                                    </TableTr>
                                </TableThead>
                                <TableTbody>
                                    <TableTr>
                                        <TableTd>Senior Software Engineer Bio</TableTd>
                                        <TableTd>Software Engineer</TableTd>
                                        <TableTd>Tech Corp</TableTd>
                                        <TableTd>San Francisco, CA</TableTd>
                                        <TableTd>

                                            <div className="flex gap-2">
                                                <Button variant="light" style={{
                                                    backgroundColor: '#E5E7EB',
                                                    fontWeight: '700',
                                                    color: 'black',
                                                }} onClick={() => { }}>
                                                    View
                                                </Button>
                                                <Button variant="light" style={{
                                                    backgroundColor: '#FF1130',
                                                    fontWeight: '700',
                                                    color: 'black',
                                                }} onClick={() => { }}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </TableTd>
                                    </TableTr>


                                </TableTbody>
                            </Table>
                        </Group>

                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
