import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { Form, IFormProps } from "./Form";
import { testSchema } from "../../EXAMPLE_SCHEMA";
import { MemoryRouter } from "react-router-dom";
import "nhsuk-frontend/packages/nhsuk";

export default {
  title: "Example/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story<IFormProps> = (args) => <Form {...args} />;
export const NHSUK = Template.bind({});
NHSUK.args = {
  /**
   * Schema docstring
   *
   */
  schema: testSchema,
};
