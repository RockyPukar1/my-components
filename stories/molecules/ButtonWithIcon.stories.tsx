import { Meta, StoryObj } from "@storybook/react";
import ButtonWithIcon from '../../src/components/molecules/buttonWithIcon/ButtonWithIcon';

const meta: Meta = {
  title: 'Molecule/ButtonWithIcon',
  component: ButtonWithIcon,
  argTypes: {
    onClick: { action: 'clicked' }
  },
};
export default meta;
type Story = StoryObj<typeof ButtonWithIcon>;

export const SmallCoffee: Story = {
  args: {
    label: 'Small Coffee',
    type: 'submit',
    className: 'naxatw-p-2',
    icon: "coffee"
  },
};

export const MediumEnvelope: Story = {
  args: {
    label: 'Medium Envelope',
    type: 'submit',
    className: 'naxatw-p-3',
    icon: "envelope"
  },
};

export const LargeCoffeeRounded: Story = {
  args: {
    label: 'Large Coffee Rounded',
    type: 'submit',
    className: 'naxatw-p-4 naxatw-rounded-2xl',
    icon: "coffee"
  },
};

export const DisabledEnvelope: Story = {
  args: {
    label: 'Disabled Envelope',
    type: 'submit',
    disabled: true,
    className: '',
    icon: "envelope"
  },
};
