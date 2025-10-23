import { Button, Flex, Text, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useConfigStore } from "../../store/config.store";

interface ConfigurationInput {
  apiHost: string;
}

export default function ConfigurationScreen() {
  const { setApiHost } = useConfigStore((state) => state);
  const form = useForm<ConfigurationInput>({
    initialValues: {
      apiHost: "",
    },
    validate: {
      apiHost: (value) => {
        if (value.trim().length === 0) {
          return "API Host is required";
        }

        if (!/^https?:\/\/.+/.test(value.trim())) {
          return "API Host must be a valid URL starting with http:// or https://";
        }

        return null;
      },
    },
  });

  const handleSubmit = async (values: ConfigurationInput) => {
    await setApiHost(values.apiHost.trim());
  };

  return (
    <Flex direction="column" gap="md" style={{ width: "100%" }}>
      <Text>Configuration Screen</Text>
      <Form form={form} onSubmit={handleSubmit}>
        <label>
          <TextInput
            label="API Host"
            placeholder="Enter API Host"
            {...form.getInputProps("apiHost")}
          />
        </label>
        <Button type="submit" mt="md" fullWidth>
          Save Configuration
        </Button>
      </Form>
    </Flex>
  );
}
