import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Button, { ButtonProps } from "./button";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  children: "primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: "danger",
  children: "danger Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "lg Button",
};

export const Small: React.VFC<ButtonProps> = () => (
  <Button size="sm">test vfc button</Button>
);

export const LinkButton = Template.bind({});
LinkButton.args = {
  btnType: "link",
  href: "https://google.com",
  children: "link Button",
};
