import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import DateInput, { IDateInputProps } from "./DateInput";

export default {
  title: "Example/DateInput",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: Story<IDateInputProps> = (args) => <DateInput {...args} />;
export const NHSUK = Template.bind({});

NHSUK.args = {
  component: {
    id: "id",
    type: "DateInput",
  },
};
