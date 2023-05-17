import { Meta, StoryObj } from '@storybook/react';
import Image from '../../src/components/atoms/image/Image';

const meta: Meta = {
  title: 'Atom/Image',
  component: Image,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Placeholder Image',
  },
};

export const WithDimensions: Story = {
  args: {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Placeholder Image',
    width: '350',
    height: '150',
  },
};

export const WithCustomAlt: Story = {
  args: {
    src: 'https://via.placeholder.com/350x150',
    alt: 'Custom Alt Text',
  },
};
