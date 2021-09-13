import { Textarea as LibTextArea } from "nhsuk-react-components";
import { InputWidth } from "nhsuk-react-components/dist/util/types/NHSUKTypes";
import React, { FormEvent, FormEventHandler } from "react";
import { Component, FormChoices } from "../../../types";

export interface ITextArea extends Component {
  label: string;
  width?: InputWidth;
}

interface ITextAreaProps {
  component: ITextArea;
  formChoices: FormChoices;
  setFormChoices: React.Dispatch<React.SetStateAction<FormChoices>>;
}
const TextArea: React.FC<ITextAreaProps> = ({
  component,
  formChoices,
  setFormChoices,
}) => {
  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLFormElement;
    formChoices[target.id] = target.value;
    setFormChoices({ ...formChoices });
  };

  return (
    <>
      {component.title && <h2>{component.title}</h2>}
      <LibTextArea
        id={component.id}
        label={component.label}
        hint={component.hint}
        width={component.width || undefined}
        onChange={handleChange}
      />
    </>
  );
};

export default TextArea;
