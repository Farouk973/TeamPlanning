import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class AutoComplete implements NXMGenericComponent{
  label?: string;
  input?: Input;
  labelChips?:string;
  saveInputInBase?:boolean;
  optionsDataEndpoint?: string;
  sourceSaveItemEndpoint?: string;
  sourceAssignItemEndpoint?:string;
  getIdLastItemEndpoint?:string;
}
class Input {
  type?: string;
  placeholder?:string
}
