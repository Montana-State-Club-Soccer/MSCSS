import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    colorScheme: {
      control: 'select',
      options: ['blue', 'gold'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <Heading as="h3">
            Card Title
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>This is the card content with some description text.</Text>
        </CardBody>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardHeader>
          <Heading as="h3">
            Card Title
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>This is the card content with some description text.</Text>
        </CardBody>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <Heading as="h3">
            Player Profile
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>Midfielder • #10 • Senior</Text>
        </CardBody>
        <CardFooter>
          <Button>
            View Profile
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    children: (
      <>
        <CardHeader>
          <Heading as="h3">
            Hover Me
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>This card has a hover effect</Text>
        </CardBody>
      </>
    ),
  },
};

export const GoldScheme: Story = {
  args: {
    variant: 'outlined',
    colorScheme: 'gold',
    children: (
      <>
        <CardHeader>
          <Heading as="h3">
            Gold Card
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>This card uses the gold color scheme</Text>
        </CardBody>
      </>
    ),
  },
};
