import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from '../src/components/atoms/textarea/Textarea';

const meta: Meta = {
  title: 'Atom/Textarea',
  component: Textarea,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    rows: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <Textarea
      id="name"
      label="Enter text"
      value={value}
      onChange={handleChange}
    />
  );
};

export const WithPlaceholder = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <Textarea
      label="Enter text"
      id="name"
      placeholder="Type something..."
      value={value}
      onChange={handleChange}
    />
  );
};

export const WithRows = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <Textarea
      label="Enter text"
      id="name"
      rows={5}
      value={value}
      onChange={handleChange}
    />
  );
};