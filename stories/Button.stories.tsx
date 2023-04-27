import {Meta, StoryObj} from "@storybook/react"
import Button from '../src/components/atoms/button/Button'
import '../src/index.css';
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Label Button'
    }
  },
}
export default meta;

type Story = StoryObj<typeof Button>;

export const small: Story = {
  args: {
    type: 'submit',
    className: 'naxatw-p-2'
  }
}

export const medium: Story = {
  args: {
    type: 'submit',
    className: 'naxatw-p-3'
  }
}

export const large: Story = {
  args: {
    type: 'submit',
    className: 'naxatw-p-4'
  }
}

export const Rounded: Story = {
  args: {
    type: 'submit',
    className: 'naxatw-rounded-2xl naxatw-p-2'
  }
}

export const Disabled: Story = {
  args: {
    type: 'submit',
    disabled: true,
    className: ''
  }
}
