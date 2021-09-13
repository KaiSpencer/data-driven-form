import { Hint, DateInput as LibDateInput } from "nhsuk-react-components";
import React, { SyntheticEvent } from "react";
import { Component, FormChoices } from "../../../types";
import { IDateInputOnChangeValue } from "./types";

interface IDateInputOption {
  displayText: string;
  id: string;
}

export interface IDateInput extends Component {
  options: IDateInputOption[];
}

interface IDateInputProps {
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
      <h3>{component.title}</h3>
      <LibDateInput hint={component.hint || ""} onChange={handleChange} />
    </>
  );
};

export default DateInput;
