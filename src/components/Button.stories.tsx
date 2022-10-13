import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Button,
  title: "components/Button",
  args: {
    children: "Submit Form",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ButtonProps>;

export const ButtonDefault: StoryObj = {};
