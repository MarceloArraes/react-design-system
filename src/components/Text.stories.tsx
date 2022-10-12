import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Text,
  title: "components/Text",
  args: {
    children: "Children man",
  },
} as Meta<TextProps>;

export const TextDefault: StoryObj = {};

export const TextSmall: StoryObj = {
  args: {
    size: "sm",
  },
};
export const TextLarge: StoryObj = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <p>PARAGRAFO</p>,
  },
};

// () => <Text size="lg">Children of the world</Text>;
