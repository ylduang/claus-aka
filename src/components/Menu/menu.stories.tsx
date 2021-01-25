import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React from "react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Menu {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

export const DefaultMenu = Template.bind({});

DefaultMenu.args = {
  defaultIndex: "0",
  onSelect: (index) => {
    action(`clicked ${index} item`);
  },
};
