import { Hint, DateInput as LibDateInput } from "nhsuk-react-components";
import React, { SyntheticEvent } from "react";
import { Component, FormChoices } from "../../../types";
import { IDateInputOnChangeValue } from "./types";

export interface IDateInput extends Component {}

export interface IDateInputProps {
  /**
   * Component to render
   */
  component: IDateInput;
  formChoices: FormChoices;
  setFormChoices: React.Dispatch<React.SetStateAction<FormChoices>>;
}

const DateInput: React.FC<IDateInputProps> = ({
  component,
  formChoices,
  setFormChoices,
}) => {
  const handleChange = (e: any) => {
    const value: IDateInputOnChangeValue = e.target.value;
    console.log(value);
    formChoices[component.id] = value;
    setFormChoices({ ...formChoices });
  };
  return (
    <>
      {component.title && <h2>{component.title}</h2>}
      <LibDateInput hint={component.hint || ""} onChange={handleChange} />
    </>
  );
};

export default DateInput;
