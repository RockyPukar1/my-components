import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';


const meta: Meta = {
    title: 'Button',
    component: Button,
}

export default meta;


const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'DEFAULT TEXT'
}
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'I am secondary'
}