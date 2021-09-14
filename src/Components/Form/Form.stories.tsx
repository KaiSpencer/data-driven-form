import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "./Form";
import { testSchema } from "../../EXAMPLE_SCHEMA";
import { MemoryRouter } from "react-router-dom";
import "nhsuk-frontend/packages/nhsuk";

export default {
  title: "Example/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const NHSUK = { args: { schema: testSchema } };
