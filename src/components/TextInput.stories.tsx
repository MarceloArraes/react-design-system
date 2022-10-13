import { TextInput, TextInputProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: TextInput,
  title: "components/TextInput",
  args: {},
  argTypes: {},
} as Meta<TextInputProps>;

export const TextInputDefault: StoryObj = {};
// () => <TextInput size="lg">Children of the world</TextInput>;
