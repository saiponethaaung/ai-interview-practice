"use client";

import { Box, Button, Container, Flex, Group, Modal, Stack, Table, Text, TextInput } from "@mantine/core";

export default function SettingsPage() {
    return (
        <div>
            <Container size="xl">
                <Flex p={"0"} direction={"column"} my={20} gap={20}>
                    <Flex align={"center"} justify={"space-between"} w={"100%"}>
                        <Stack align="flex-start" gap={0}>
                            <h1 className="text-3xl font-bold mb-2">
                                Settings
                            </h1>
                            <span className="text-gray-600">
                                Manage your personal settings and preferences
                            </span>
                        </Stack>
                    </Flex>
                    <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6 space-y-4">
                        <Stack align="flex-start" gap={0}>
                            <h2 className="text-xl font-semibold">API Key Management</h2>
                            <span className="text-gray-600">Connect your AI models to enhance your interview practice</span>
                        </Stack>
                        <Stack justify="flex-start" gap={20} mt={30}>
                            <Group align="end" style={{ width: '100%' }}>
                                <TextInput
                                    label="Ollama API Key"
                                    placeholder="e.g., sk-..."
                                    radius={"md"}
                                    style={{ flex: 1 }}
                                />
                                <Button
                                    variant="light"
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        fontWeight: '700',
                                        color: 'white',
                                    }}
                                >
                                    Test connection
                                </Button>
                            </Group>
                            <Group align="end" style={{ width: '100%' }}>
                                <TextInput
                                    label="Gemini API Key"
                                    placeholder="e.g., sk-..."
                                    radius={"md"}
                                    style={{ flex: 1 }}
                                />
                                <Button
                                    variant="light"
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        fontWeight: '700',
                                        color: 'white',
                                    }}
                                >
                                    Test connection
                                </Button>
                            </Group>
                            <Button
                                style={{
                                    fontWeight: '700',
                                    color: 'white',
                                }}
                            >
                                Save Keys
                            </Button>
                        </Stack>
                    </Box>
                    <Box p={20} className="bg-[var(--card-light)] rounded-lg shadow-md my-6 space-y-4">
                        <Stack align="flex-start" gap={0}>
                            <h2 className="text-xl font-semibold">Your Profile</h2>
                            <span className="text-gray-600">Manage your personal information.</span>
                        </Stack>
                        <Stack justify="flex-start" gap={20} mt={30}>
                            <Stack align="flex-start" gap={20}>
                                <TextInput
                                    label="Full Name"
                                    placeholder="John Doe"
                                    radius={"md"}
                                    style={{ width: '100%' }}
                                />
                                <TextInput
                                    label="Email Address"
                                    placeholder="john.doe@example.com"
                                    radius={"md"}
                                    style={{ width: '100%' }}
                                />
                                <TextInput
                                    label="Password"
                                    placeholder="••••••••"
                                    radius={"md"}
                                    style={{ width: '100%' }}
                                />
                            </Stack>
                            <Button
                                style={{
                                    fontWeight: '700',
                                    color: 'white',
                                }}
                            >
                                Save Profile
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
