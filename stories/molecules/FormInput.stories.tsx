import { StoryObj, Meta } from '@storybook/react';
import FormInput from '../../src/components/molecules/formInput/FormInput';

const meta: Meta = {
  title: 'Molecule/FormInput',
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const WithLabel: Story = {
  args: {
    label: 'Name',
    id: 'name',
    type: 'text',
    onChange: () => console.log('Input changed'),
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    id: 'email',
    type: 'email',
    onChange: () => console.log('Input changed'),
    error: 'Please enter a valid email address',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    id: 'password',
    type: 'password',
    onChange: () => console.log('Input changed'),
  },
};
