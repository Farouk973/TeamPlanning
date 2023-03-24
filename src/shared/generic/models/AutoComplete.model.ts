import {NXMGenericComponent} from "./NXMGenericComponent.model";

export class AutoComplete implements NXMGenericComponent{
  label?: string;
  input?: Input;
  optionsDataEndpoint?: string;
  addToItem?: string
  saveInputInBase: boolean;
  assignInputToItem: boolean;
  sourceEndpoint:string
}
class Input {
  type?: string;
  placeholder?:string
}
