import { Signin } from "./Signin";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  component: Signin,
  title: "pages/Signin",
  args: {},
} as Meta;

export const SigninDefault: StoryObj = {
  play: ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "marcelo.arraes@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("********"), "12345678");
    userEvent.click(canvas.getByRole("button"));
  },
};
// () => <Signin size="lg">Children of the world</Signin>;
