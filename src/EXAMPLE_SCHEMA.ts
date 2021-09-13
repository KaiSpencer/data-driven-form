import { Schema } from "./types";

export const testSchema: Schema = {
  title: "My first form",
  pages: [
    {
      title: "Page 1",
      path: "page-1",
      nextPath: "/page-2",
      backlink: { displayText: "Back to home", route: "/" },
      components: [
        {
          id: "hereAreSomeRadios",
          type: "Radios",
          title: "Here are some Radios",
          options: [
            { displayText: "Option 1", id: "1" },
            { displayText: "Option 2", id: "2" },
            { displayText: "Option 3", id: "3" },
            { displayText: "Option 4", id: "4" },
            { displayText: "Option 5", id: "5" },
            { displayText: "Option 6", id: "6" },
          ],
        },
      ],
    },
    {
      title: "Page 2",
      path: "page-2",
      nextPath: "page-3",
      backlink: { displayText: "Back to page 1", route: "/page-1" },
      components: [
        {
          id: "hereAreSomeCheckboxes",
          type: "Checkbox",
          title: "Here are some Checkboxes",
          hint: "You can have hints too",
          options: [
            { displayText: "Checkbox ", id: "1" },
            { displayText: "Disabled by default", id: "2" },
            { displayText: "Checked by default", id: "3" },
          ],
        },
      ],
    },
    {
      title: "Page 3",
      path: "page-3",
      nextPath: "page-4",
      backlink: { displayText: "Back to page 2", route: "/page-2" },
      components: [
        {
          id: "hereAreSomeCheckboxes",
          type: "DateInput",
          title: "Here is a DateInput",
          hint: "With a hint",
          options: [],
        },
        {
          id: "hereAreSomeCheckboxes2",
          type: "DateInput",
          hint: "Title is optional",
          options: [],
        },
      ],
    },
    {
      title: "Page 4",
      path: "page-4",
      nextPath: "page-5",
      backlink: { displayText: "Back to page 3", route: "/page-3" },
      components: [
        {
          id: "input",
          type: "Input",
          title: "Here is an Input",
          hint: "And a hint",
          label: "With a label",
        },
        {
          id: "input2",
          type: "Input",
          hint: "And a hint",
          label: "Another input",
        },
      ],
    },
    {
      title: "Page 5",
      path: "page-5",
      nextPath: undefined,
      backlink: { displayText: "Back to page 4", route: "/page-4" },
      components: [
        {
          id: "textArea",
          type: "TextArea",
          label: "Please input some text.",
          hint: "Hint goes here",
        },
      ],
    },
  ],
};
