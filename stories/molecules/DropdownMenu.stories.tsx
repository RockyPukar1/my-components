import { StoryObj, Meta } from '@storybook/react';
import DropdownMenu from '../../src/components/molecules/dropdownMenu/DropdownMenu';

const meta: Meta = {
  title: 'Molecule/DropdownMenu',
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    buttonText: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: (option: string) => console.log(`Selected: ${option}`),
  },
};

export const Primary: Story = {
  args: {
    buttonText: 'Select a color',
    buttonType: 'submit',
    options: ['Red', 'Green', 'Blue'],
    onSelect: (option: string) => console.log(`Selected: ${option}`),
  },
};
