import { Meta, StoryObj } from "@storybook/react";
import AccordianWithMultiplePanels from '../../src/components/molecules/accordianWithMultiplePanels/AccordianWithMultiplePanels';

const meta: Meta = {
  title: 'Molecule/AccordianWithMultiplePanels',
  component: AccordianWithMultiplePanels,
};

export default meta;

type Story = StoryObj<typeof AccordianWithMultiplePanels>;

export const Example: Story = {
  args: {
    panels: [
      {
        title: 'Panel 1',
        content: 'Content for panel 1 goes here...',
      },
      {
        title: 'Panel 2',
        content: 'Content for panel 2 goes here...',
      },
      {
        title: 'Panel 3',
        content: 'Content for panel 3 goes here...',
      },
    ],
  },
};
