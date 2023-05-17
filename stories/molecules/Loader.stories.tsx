import { StoryObj, Meta } from '@Storybook/react';
import Loader from '../../src/components/molecules/loader/Loader';

const meta: Meta = {
  title: 'Molecule/Loader',
  component: Loader,
};

export default meta;

export const Small = {
  args: {
    size: 'small',
  },
};

export const Medium = {
  args: {
    size: 'medium',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};
