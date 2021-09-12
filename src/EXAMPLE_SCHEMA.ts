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
      nextPath: undefined,
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
  ],
};
