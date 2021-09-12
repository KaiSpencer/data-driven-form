import { BackLink, Button } from "nhsuk-react-components";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Checkboxes, { ICheckboxes } from "../Input/Checkboxes/Checkboxes";
import Radios, { IRadios } from "../Input/Radios/Radios";

type ComponentTypes = "Radios" | "Checkbox";
export interface Component {
  id: string;
  type: ComponentTypes;
  title: string;
  hint?: string;
}
interface IBacklink {
  displayText: string;
  route: string;
}
type Components = ICheckboxes[] | IRadios[];
interface Page {
  title: string;
  components: Components;
  path: string;
  nextPath: string | undefined;
  backlink: IBacklink | undefined;
}
export interface Schema {
  title: string;
  pages: Page[];
}
interface FormProps {
  schema: Schema;
}
export const Form: React.FC<FormProps> = ({ schema: { pages } }) => {
  const [formChoices, setFormChoices] = useState<{
    [key: string]: string | boolean;
  }>({});

  const history = useHistory();
  const { pagePath } = useParams<{ pagePath: string }>();

  const page = pages.find((page) => page.path === pagePath);
  if (!page) {
    return <>Cant find page</>;
  }

  return (
    <>
      Result:
      {JSON.stringify(formChoices)}
      {page.backlink && (
        <BackLink
          onClick={() => {
            history.push(page.backlink!.route);
          }}
        >
          {page.backlink.displayText}
        </BackLink>
      )}
      {page.components.map((component) => {
        switch (component.type) {
          case "Radios":
            return (
              <Radios
                component={component as IRadios}
                formChoices={formChoices}
                setFormChoices={setFormChoices}
                key={component.id}
              />
            );

          case "Checkbox":
            return (
              <Checkboxes
                component={component as ICheckboxes}
                formChoices={formChoices}
                setFormChoices={setFormChoices}
                key={component.id}
              />
            );
        }
      })}
      <Button
        onClick={() => {
          if (page.nextPath) {
            history.push(page.nextPath);
          } else {
            console.log("submit form");
          }
        }}
      >
        {page.nextPath ? "Continue" : "Submit"}
      </Button>
    </>
  );
};
