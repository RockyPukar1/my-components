import { Meta, StoryObj } from '@storybook/react';
import Avatar from '../../src/components/molecules/avatar/Avatar';

const meta: Meta = {
  title: 'Molecule/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const SmallAvatar: Story = {
  args: {
    src: 'https://picsum.photos/seed/1234/64',
    alt: 'Avatar',
    name: 'John Doe',
    size: 'small',
  },
};

export const MediumAvatar: Story = {
  args: {
    src: 'https://picsum.photos/seed/1234/64',
    alt: 'Avatar',
    name: 'John Doe',
    size: 'medium',
  },
};

export const LargeAvatar: Story = {
  args: {
    src: 'https://picsum.photos/seed/1234/64',
    alt: 'Avatar',
    name: 'John Doe',
    size: 'large',
  },
};
