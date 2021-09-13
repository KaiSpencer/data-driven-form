import { ICheckboxes } from "./Components/Input/Checkboxes/Checkboxes";
import { IDateInput } from "./Components/Input/DateInput/DateInput";
import { IDateInputOnChangeValue } from "./Components/Input/DateInput/types";
import { IRadios } from "./Components/Input/Radios/Radios";
import { IInput } from "./Components/Input/Input/Input";

export interface Schema {
  title: string;
  pages: Page[];
}

interface Page {
  title: string;
  components: Components;
  path: string;
  nextPath: string | undefined;
  backlink: IBacklink | undefined;
}

interface IBacklink {
  displayText: string;
  route: string;
}

type Components = ICheckboxes[] | IRadios[] | IDateInput[] | IInput[];
type ComponentTypes = "Radios" | "Checkbox" | "DateInput" | "Input";

export interface Component {
  id: string;
  type: ComponentTypes;
  title?: string;
  hint?: string;
}

export interface FormChoices {
  [key: string]: string | boolean | IDateInputOnChangeValue;
}
