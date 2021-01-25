import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Input, InputProps } from "./input";
export default {
  title: "Input",
  component: Input,
  argTypes: {
    onChange: () => {
      action("changed");
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  placeholder: "placeholder",
};

DefaultInput.storyName = "Input";

export const DisableInput = Template.bind({});

DisableInput.args = { disabled: true, placeholder: "disabled input" };

DisableInput.storyName = "被禁用的Input";

export const IconInput = Template.bind({});

IconInput.args = { placeholder: "input with icon", icon: "search" };

IconInput.storyName = "带图标的";

export const PrependInput = Template.bind({});

PrependInput.args = {
  placeholder: "input with icon",
  prepend: "https://",
  append: ".com",
};

PrependInput.storyName = "带前后缀的Input";
