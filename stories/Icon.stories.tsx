import { Meta, StoryObj } from '@storybook/react';
import Icon from '../src/components/atoms/icon/Icon';

const meta: Meta = {
  title: 'Atom/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select', options: ['coffee', 'envelope'] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Coffee: Story = {
  args: {
    name: 'coffee',
  },
};

export const Envelope: Story = {
  args: {
    name: 'envelope',
  },
};
