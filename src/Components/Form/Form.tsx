import { BackLink, Button } from "nhsuk-react-components";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FormChoices, Schema } from "../../types";
import Checkboxes, { ICheckboxes } from "../Input/Checkboxes/Checkboxes";
import DateInput, { IDateInput } from "../Input/DateInput/DateInput";
import Radios, { IRadios } from "../Input/Radios/Radios";
import Input, { IInput } from "../Input/Input/Input";
import TextArea, { ITextArea } from "../Input/TextArea/TextArea";

interface FormProps {
  schema: Schema;
}
export const Form: React.FC<FormProps> = ({ schema: { pages } }) => {
  const [formChoices, setFormChoices] = useState<FormChoices>({});

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
      <h1>{page.title}</h1>
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
          case "DateInput":
            return (
              <DateInput
                component={component as IDateInput}
                formChoices={formChoices}
                setFormChoices={setFormChoices}
                key={component.id}
              />
            );
          case "Input":
            return (
              <Input
                component={component as IInput}
                formChoices={formChoices}
                setFormChoices={setFormChoices}
                key={component.id}
              />
            );
          case "TextArea":
            return (
              <TextArea
                component={component as ITextArea}
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
