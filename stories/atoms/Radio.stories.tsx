import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Radio, { RadioProps } from '../../src/components/atoms/radio/Radio';

const meta: Meta = {
    title: 'Atom/Radio',
    component: Radio,
    argTypes: {
      label: {
        control: { type: 'text' },
      },
      description: {
        control: { type: 'text' },
      },
      error: {
        control: { type: 'text' },
      },
    },
  };
  

export default meta;

export const Default = () => {
  const [selected, setSelected] = useState('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Radio
        id="option1"
        label="Option 1"
        checked={selected === 'option1'}
        onChange={handleOptionChange}
      />
      <Radio
        id="option2"
        label="Option 2"
        checked={selected === 'option2'}
        onChange={handleOptionChange}
      />
      <Radio
        id="option3"
        label="Option 3"
        checked={selected === 'option3'}
        onChange={handleOptionChange}
      />
    </>
  );
};

export const WithDescription = () => {
  const [selected, setSelected] = useState('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Radio
        id="option1"
        label="Option 1"
        checked={selected === 'option1'}
        onChange={handleOptionChange}
        description="This is option 1"
      />
      <Radio
        id="option2"
        label="Option 2"
        checked={selected === 'option2'}
        onChange={handleOptionChange}
        description="This is option 2"
      />
      <Radio
        id="option3"
        label="Option 3"
        checked={selected === 'option3'}
        onChange={handleOptionChange}
        description="This is option 3"
      />
    </>
  );
};

export const WithError = () => {
  const [selected, setSelected] = useState('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Radio
        id="option1"
        label="Option 1"
        checked={selected === 'option1'}
        onChange={handleOptionChange}
        error="This option is invalid"
      />
      <Radio
        id="option2"
        label="Option 2"
        checked={selected === 'option2'}
        onChange={handleOptionChange}
      />
      <Radio
        id="option3"
        label="Option 3"
        checked={selected === 'option3'}
        onChange={handleOptionChange}
      />
    </>
  );
};
