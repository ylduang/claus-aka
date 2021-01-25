import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React from "react";
//import Button from '../Button/button'
import Icon from "../Icon/icon";
import { Upload, UploadProps } from "./upload";

export default {
  title: "Upload",
  component: Upload,
  argTypes: {},
} as Meta;

const Template: Story<UploadProps> = (args) => (
  <Upload {...args}>
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>Drag file over to upload</p>
  </Upload>
);

export const DefaultUpload = Template.bind({});

DefaultUpload.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange: () => {
    action("changed");
  },
  onRemove: () => {
    action("removed");
  },
  name: "fileName",
  multiple: true,
  drag: true,
};

// const defaultFileList: UploadFile[] = [
//   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]
// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false;
//   }
//   return true;
// }
// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }
