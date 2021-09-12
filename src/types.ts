import { ICheckboxes } from "./Components/Input/Checkboxes/Checkboxes";
import { IRadios } from "./Components/Input/Radios/Radios";

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

type Components = ICheckboxes[] | IRadios[];

interface IBacklink {
  displayText: string;
  route: string;
}

type ComponentTypes = "Radios" | "Checkbox";

export interface Component {
  id: string;
  type: ComponentTypes;
  title: string;
  hint?: string;
}
