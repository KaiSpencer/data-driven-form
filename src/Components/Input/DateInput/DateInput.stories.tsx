import React from "react";
import { ComponentMeta } from "@storybook/react";
import DateInput, { IDateInputProps } from "./DateInput";

export default {
  title: "Example/DateInput",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

export const NHSUK = { args: { component: { title: "hi" } } };
