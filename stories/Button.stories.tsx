import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
// const Template: Story = (args) => <Button {...args} />

export const Default: Story = {
  args: {
    children: 'DEFAULT TEXT',
  },
};


export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'I am secondary',
    onClick: action('secondary click'),
  },
};
