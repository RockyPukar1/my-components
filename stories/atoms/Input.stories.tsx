import { Meta, StoryObj } from '@storybook/react';
import Input from '../../src/components/atoms/input/Input';

const meta: Meta = {
  title: 'Atom/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select', options: ['text', 'password', 'email'] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email...',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
};
