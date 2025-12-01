import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item1">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a 30-day return policy for all unused items in their original packaging.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>How do I track my order?</AccordionTrigger>
        <AccordionContent>
          You will receive a tracking number via email once your order ships.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
        <AccordionContent>
          Yes, we ship to most countries worldwide. Shipping costs vary by location.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Accordion variant="secondary">
      <AccordionItem value="team">
        <AccordionTrigger>Team Information</AccordionTrigger>
        <AccordionContent>
          Our team consists of experienced professionals dedicated to your success.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="schedule">
        <AccordionTrigger>Game Schedule</AccordionTrigger>
        <AccordionContent>
          Games are held every Saturday at 3 PM during the season.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="single">
        <AccordionTrigger>Click to expand</AccordionTrigger>
        <AccordionContent>
          This is a single accordion item with detailed content inside.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
