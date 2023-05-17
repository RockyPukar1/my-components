import {Meta, StoryObj} from '@storybook/react';
import CheckboxWithLabel from '../../src/components/molecules/checkboxWithLabel/CheckboxWithLabel';

const meta: Meta = {
    title: 'Molecule/CheckboxWithLabel',
    component: CheckboxWithLabel,
    argTypes: {
        onChange: {action: 'checked'}
    }
}

export default meta;

type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
    args: {
        label: 'Unchecked Checkbox',
    }
}

export const Checked: Story = {
    args: {
        label: 'Checked Checkbox',
        checked: true
    }
}

export const Disabled: Story = {
    args: {
        label: 'Disabled Checkbox',
        checked: true,
        disabled: true
    }
}

export const CustomClass: Story = {
    args: {
        label: 'Disabled Checkbox',
        checked: false,
        className: 'custom-class'
    }
}