import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class AutoComplete implements NXMGenericComponent{
  label?: string;
  input?: Input;
  optionsDataEndpoint?: string;
  sourceAssignItemEndpoint?:string;
  getIdLastItemEndpoint?:string;
}
class Input {
  type?: string;
  placeholder?:string
}
