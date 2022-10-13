import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Heading,
  title: "components/Heading",
  args: {
    children: "Children man",
  },
  argTypes: {
    size: {
      options: ["lg", "xl", "2xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const HeadingDefault: StoryObj = {};

export const HeadingLarge: StoryObj = {
  args: {
    size: "lg",
  },
};
export const HeadingXLarge: StoryObj = {
  args: {
    size: "xl",
  },
};
export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <p>PARAGRAFO</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

// () => <Heading size="lg">Children of the world</Heading>;
