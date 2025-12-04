import type { Meta, StoryObj } from '@storybook/react';
import { ImageBlock } from '../components/ImageBlock';

const meta: Meta<typeof ImageBlock> = {
  title: 'Components/ImageBlock',
  component: ImageBlock,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The color theme variant of the block.',
    },
    aspectRatio: {
      control: 'select',
      options: ['square', 'wide', 'tall'],
      description: 'The aspect ratio of the image container.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageBlock>;

export const Basic: Story = {
  args: {
    image: 'https://via.placeholder.com/500x400/007bff/ffffff?text=Basic+Image',
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    image: 'https://via.placeholder.com/500x400/28a745/ffffff?text=Image+with+Text',
    title: 'Featured Item Title',
    description: 'This is a brief description providing context for the image block.',
  },
};

export const SecondaryVariant: Story = {
  args: {
    image: 'https://via.placeholder.com/500x400/dc3545/ffffff?text=Secondary+Style',
    title: 'Product Highlight',
    description: 'Using the secondary color variant for a distinct look and feel.',
    variant: 'secondary',
  },
};

export const PlaceholderImage: Story = {
  args: {
    title: 'Missing Image Data',
    description: 'This block displays the placeholder icon when no image is provided.',
  },
};

export const WideAspect: Story = {
  args: {
    image: 'https://via.placeholder.com/800x450/ffc107/000000?text=Wide+Aspect+(16:9)',
    title: 'Featured Banner',
    aspectRatio: 'wide',
    description: 'A wider aspect ratio for a more panoramic display.',
  },
};

export const TallAspect: Story = {
  args: {
    image: 'https://via.placeholder.com/400x600/17a2b8/ffffff?text=Tall+Aspect+(3:4)',
    title: 'Portrait Mode',
    aspectRatio: 'tall',
    description: 'A taller aspect ratio, great for portrait-style content.',
  },
};