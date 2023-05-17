import { Meta, StoryObj } from '@storybook/react';
import Card from '../../src/components/molecules/card/Card';

const meta: Meta = {
  title: 'Molecule/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    imageSrc: 'https://via.placeholder.com/350x150',
    children: 'Card Content',
  }
};



export const WithButton: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    imageSrc: 'https://via.placeholder.com/350x150',
    children: 'Card Content',
    buttonText: 'Button',
    onClick: () => alert('Button clicked!'),
  }
};

export const WithoutImage: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    children: 'Card Content',
  }
};
