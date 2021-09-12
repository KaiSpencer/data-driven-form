import { Hint } from "nhsuk-react-components";
import React, { SyntheticEvent } from "react";
import { Checkboxes as LibCheckboxes } from "nhsuk-react-components";
import { Component } from "../../../types";

interface ICheckboxesOption {
  displayText: string;
  id: string;
  disabled: boolean;
  checked: boolean;
}
export interface ICheckboxes extends Component {
  options: ICheckboxesOption[];
}
interface ICheckboxesProps {
  component: ICheckboxes;
  formChoices: {
    [key: string]: string | boolean;
  };
  setFormChoices: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | boolean;
    }>
  >;
}
const Checkboxes: React.FC<ICheckboxesProps> = ({
  component,
  formChoices,
  setFormChoices,
}) => {
  const handleCheckboxChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      formChoices[target.id] = target.checked;
    } else {
      delete formChoices[target.id];
    }
    setFormChoices({ ...formChoices });
  };
  return (
    <>
      <h3>{component.title}</h3>{" "}
      {component.hint && <Hint>{component.hint}</Hint>}
      <LibCheckboxes onChange={handleCheckboxChange}>
        {component.options.map((option) => {
          return (
            <LibCheckboxes.Box id={option.id} key={option.id}>
              {option.displayText}
            </LibCheckboxes.Box>
          );
        })}
      </LibCheckboxes>
    </>
  );
};

export default Checkboxes;
