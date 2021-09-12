import React, { SyntheticEvent } from "react";
import { Hint, Radios as LibRadios } from "nhsuk-react-components";
import { Component } from "../../../types";

interface IRadioOption {
  displayText: string;
  id: string;
}
export interface IRadios extends Component {
  options: IRadioOption[];
}

interface IRadiosProps {
  component: IRadios;
  formChoices: {
    [key: string]: string | boolean;
  };
  setFormChoices: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | boolean;
    }>
  >;
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
      <h1>{component.title}</h1>
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
