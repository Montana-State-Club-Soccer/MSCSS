import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div>
      <p>Content above the divider</p>
      <Divider />
      <p>Content below the divider</p>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div>
      <p>Section 1</p>
      <Divider variant="secondary" />
      <p>Section 2</p>
    </div>
  ),
};

export const MultipleSections: Story = {
  render: () => (
    <div className="space-y-4">
      <section>
        <h3 className="font-bold">Section 1</h3>
        <p>Content for section 1</p>
      </section>
      <Divider />
      <section>
        <h3 className="font-bold">Section 2</h3>
        <p>Content for section 2</p>
      </section>
      <Divider />
      <section>
        <h3 className="font-bold">Section 3</h3>
        <p>Content for section 3</p>
      </section>
    </div>
  ),
};
