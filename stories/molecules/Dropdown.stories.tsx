import {useState} from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from '../../src/components/molecules/dropdown/Dropdown';

const meta: Meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj< typeof Dropdown>;


export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const WithSelectedOption: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selectedOption: 'Option 2',
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
};

