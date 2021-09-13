import React, { SyntheticEvent } from "react";
import { Hint, Radios as LibRadios } from "nhsuk-react-components";
import { Component, FormChoices } from "../../../types";

interface IRadioOption {
  displayText: string;
  id: string;
}
export interface IRadios extends Component {
  options: IRadioOption[];
}

interface IRadiosProps {
  component: IRadios;
  formChoices: FormChoices;
  setFormChoices: React.Dispatch<React.SetStateAction<FormChoices>>;
}

const Radios: React.FC<IRadiosProps> = ({
  component,
  formChoices,
  setFormChoices,
}) => {
  const handleRadioChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    formChoices[component.id] = target.id;
    setFormChoices({ ...formChoices });
  };
  return (
    <>
      {component.title && <h2>{component.title}</h2>}
      {component.hint && <Hint>{component.hint}</Hint>}
      <LibRadios onChange={handleRadioChange}>
        {component.options.map((option) => {
          return (
            <LibRadios.Radio id={option.id} key={option.id}>
              {option.displayText}
            </LibRadios.Radio>
          );
        })}
      </LibRadios>
    </>
  );
};

export default Radios;
