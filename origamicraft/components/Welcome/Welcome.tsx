import { Title, Text, Anchor, TextInput, Group } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
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
      <Group justify='center'>
      <TextInput
        size='xl'
        radius="xl"
        placeholder="Search Origami"
      >
      </TextInput>
      </Group>
    </>
  );
}
