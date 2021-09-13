import React, { SyntheticEvent } from "react";
import { Hint as _LibHint, Radios as _LibRadios } from "nhsuk-react-components";
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

  const {
    Radios: { component: Radios, props: radiosProps },
    Hint: { component: Hint, props: hintProps },
  } = getComponents(
    { Radios: _LibRadios, Hint: _LibHint },
    component.overrides,
  );

  return (
    <>
      {component.title && <h2>{component.title}</h2>}
      {component.hint && <Hint {...hintProps}>{component.hint}</Hint>}
      <Radios onChange={handleRadioChange} {...radiosProps}>
        {component.options.map((option) => {
          return (
            <Radios.Radio id={option.id} key={option.id}>
              {option.displayText}
            </Radios.Radio>
          );
        })}
      </Radios>
    </>
  );
};

export default Radios;

function getComponents<T>(
  defaultComponents: { [key: string]: React.ComponentType<T> },
  overrides: any,
): any {
  return Object.keys(defaultComponents).reduce((acc, name) => {
    const override = overrides ? overrides[name] || {} : {};

    (acc as any)[name] = {
      component: override.component || defaultComponents[name],
      props: { ...override.props },
    };
    return acc;
  }, {});
}
