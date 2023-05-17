import { Meta, StoryObj } from "@storybook/react";
import AccordionPanel from '../../src/components/molecules/accordianPanel/AccordianPanel';
import React from "react";

const meta: Meta = {
  title: 'Molecule/AccordionPanel',
  component: AccordionPanel,
};

export default meta;

type Story = StoryObj<typeof AccordionPanel>;

export const Example: Story = {
  args: {
    title: 'Section 1',
    isActive: true,
    onClick: () => {},
    children: (
        <p>Content for section 1 goes here...</p>
    ),
  },
};
