import React, { SyntheticEvent } from "react";
import { Component, FormChoices } from "../../../types";
import { Input as LibInput } from "nhsuk-react-components";
import { InputWidth } from "nhsuk-react-components/dist/util/types/NHSUKTypes";

interface IInputOption {
  id: string;
}
export interface IInput extends Component {
  label: string;
  width?: InputWidth;
}

interface IInputProps {
  component: IInput;
  formChoices: FormChoices;
  setFormChoices: React.Dispatch<React.SetStateAction<FormChoices>>;
}
const Input: React.FC<IInputProps> = ({
  component,
  formChoices,
  setFormChoices,
}) => {
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    formChoices[target.id] = target.value;
    setFormChoices({ ...formChoices });
  };

  return (
    <>
      {component.title && <h2>{component.title}</h2>}
      <LibInput
        id={component.id}
        label={component.label}
        hint={component.hint}
        width={component.width || undefined}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
