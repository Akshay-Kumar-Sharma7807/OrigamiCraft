"use client";
import { Title, Text, Anchor, TextInput, Group, Button, Box, ActionIcon } from '@mantine/core';
import classes from './Welcome.module.css';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';


export function Welcome() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      query: '',
    },
  
    validate: {
      query: (value) => value.trim() == "" ? "": null,
    },
  });

  const search = (values: any) => {
    console.log(values)
    router.push("search/" + values.query);
  }


  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <br />
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          OrigamiCraft
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="xl" mb="xl">
        Paper can be anything
      </Text>
      <Box maw={400} mx="auto">
        <form onSubmit={form.onSubmit((values) => search(values))}>
          <Group justify='center'>
          <TextInput
            size='lg'
            radius="xl"
            width="500"
            placeholder="Search Origami"
            {...form.getInputProps('query')}
          >
          </TextInput>
          <ActionIcon size="xl"  type='submit' radius="xl"><IconSearch /></ActionIcon>

          </Group>

        </form>
      </Box>
    </>
  );
}
