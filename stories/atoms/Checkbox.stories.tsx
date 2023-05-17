import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../src/components/atoms/checkbox/Checkbox';

const meta: Meta = {
  title: 'Atom/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
    checked: false,
    disabled: false,
    onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  },
};

export const Checked: Story = {
  args: {
    label: 'Checkbox label',
    checked: true,
    disabled: false,
    onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox label',
    checked: false,
    disabled: true,
    onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
  },
};
