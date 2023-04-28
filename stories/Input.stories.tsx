import { Meta, StoryObj } from '@storybook/react';
import Input from '../src/components/atoms/input/Input';

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
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    disabled: false,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
    disabled: false,
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email...',
    type: 'email',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    disabled: true,
  },
};
