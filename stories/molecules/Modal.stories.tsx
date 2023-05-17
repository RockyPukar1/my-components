import { StoryObj, Meta } from '@storybook/react';
import Modal from '../../src/components/molecules/modal/Modal';

const meta: Meta = {
  title: 'Molecules/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;


export const Default: Story = {
  args: {
    title: 'Modal Title',
    primaryButtonText: 'Save',
    secondaryButtonText: 'Cancel',
  },
};
