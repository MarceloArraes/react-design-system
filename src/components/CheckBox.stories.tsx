import { CheckBox, CheckBoxProps } from "./CheckBox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
  component: CheckBox,
  title: "components/CheckBox",
  args: {
    text: "Aceitar termos de uso.",
  },
  /*   decorators: [
    (Story) => {
      return (
        <div>
          {Story()}
          <Text children="LEmbrar de mim" />
        </div>
      );
    },
  ], */
  argTypes: {},
} as Meta<CheckBoxProps>;

export const CheckBoxDefault: StoryObj = {};

// () => <CheckBox size="lg">Children of the world</CheckBox>;
