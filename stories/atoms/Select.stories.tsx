import { Meta, StoryObj } from '@storybook/react';
import Select from '../../src/components/atoms/select/Select';

const meta: Meta = {
  title: 'Atom/Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'array' },
    },
    custom: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Placeholder: Story = {
  args: {
    placeholder: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const Custom: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};
