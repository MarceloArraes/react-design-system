import { TextInput, TextInputProps, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default {
  component: TextInput.Root,
  title: "components/TextInput",
  args: {
    children: [
      <TextInput.Icon>
        <Envelope size={20} />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
    // placeholder: "type your email",
    // type: "email",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const TextInputDefault: StoryObj<TextInputRootProps> = {};
// () => <TextInput size="lg">Children of the world</TextInput>;
