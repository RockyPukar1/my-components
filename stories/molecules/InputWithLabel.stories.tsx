import { StoryObj, Meta } from '@storybook/react';
import InputWithLabel from '../../src/components/molecules/inputWithLabel/InputWithLabel';

const meta: Meta = {
  title: 'Molecule/InputWithLabel',
  component: InputWithLabel,
};

export default meta;

type Story = StoryObj<typeof InputWithLabel>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
};
