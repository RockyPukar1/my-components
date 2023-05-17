import { StoryObj, Meta } from '@storybook/react';
import Form from '../../src/components/molecules/form/Form';

const meta: Meta = {
  title: 'Molecule/Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    onSubmit: data => console.log(data),
    buttonText: 'Submit',
    buttonType: 'button',
    onClick: () => console.log('Button clicked'),
  },
};
