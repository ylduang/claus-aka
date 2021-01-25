import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Button, { ButtonProps } from "./button";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: "danger",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

// const defaultButton = () => <Button onClick={action('clicked')}> default button </Button>;

// const buttonWithSize = () => (
//   <>
//     <Button size="lg"> large button </Button>
//     <Button size="sm"> small button </Button>
//   </>
// );

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com">
//       {' '}
//       link button{' '}
//     </Button>
//   </>
// );
// storiesOf('Button Component', module).add('Button', defaultButton).add('不同尺寸的 Button', buttonWithSize).add('不同类型的 Button', buttonWithType);
