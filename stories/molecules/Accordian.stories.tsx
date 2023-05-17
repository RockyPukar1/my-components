import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Accordian from '../../src/components/molecules/accordian/Accordian'
const meta: Meta = {
  title: 'Molecule/Accordian',
  component: Accordian,
};

export default meta;

type Story = StoryObj<typeof Accordian>;

export const Example: Story = {
  args: {
    children: (
      <>
        <h2>Section 1</h2>
        <div>
          <p>Content for section 1 goes here...</p>
        </div>
        <h2>Section 2</h2>
        <div>
          <p>Content for section 2 goes here...</p>
        </div>
        <h2>Section 3</h2>
        <div>
          <p>Content for section 3 goes here...</p>
        </div>
      </>
    ),
  },
};
